class DataKelas {
  static async ambil(target: string) {
    const dataURI: string = 'data/' + target + '.json'
    let inCache: boolean = false
    let returnData = {}

    if ('caches' in window) {
      await caches.match(dataURI).then((respon) => {
        if (respon) {
          respon.json().then((data) => (returnData = data))
          inCache = true
        }
      })
    }

    await fetch(dataURI)
      .then((data) => data.json())
      .then((dataJSON) => {
        if (!inCache) returnData = dataJSON
      })

    return await returnData
  }
}

export default DataKelas
