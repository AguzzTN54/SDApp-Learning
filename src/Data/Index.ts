export class DataKelas {
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

  async getData(target: string) {
    let baseURL: string, returnData: object
    if (process.env.NODE_ENV == 'production') {
      baseURL = `https://api.allorigins.win/raw?url=http://sdapp-server.herokuapp.com`
    } else {
      baseURL = 'http://localhost:3000'
    }

    await fetch(`${baseURL}${target}&_sort=id&_order=asc`)
      .then((data) => data.json())
      .then((dataJSON) => (returnData = dataJSON))

    return await returnData
  }

  getClassList() {
    return this.getData(`/list_bab?`)
  }

  getListBab(grade: number) {
    return this.getData(`/list_bab?kelas=${grade}`)
  }

  getFirst(data: { grade: number; subBab: string }) {
    return this.getData(
      `/data_materi?grade=${data.grade}&sub_bab=${data.subBab}&_limit=1`
    )
  }
  getById(id: number) {
    return this.getData(`/data_materi?id=${id}`)
  }
}
