interface page {
  page: string
  kelas: string
}

const loadPage = (hal: page): void => {
  const { page, kelas } = hal
  window.addEventListener('popstate', () => {
    const hash: string[] = window.location.hash.split('/'),
      halaman: string = hash[1]
    renderPage({ page: halaman, kelas: null })
  })
  if (page) renderPage({ page: page, kelas: kelas })
}

const renderPage = (halaman: page): void => {
  let { page, kelas } = halaman
  let hal: string,
    atr: string = ''
  switch (page) {
    case 'start':
      hal = 'start-page'
      break

    case 'pilih':
      hal = 'pilih-kelas'
      break

    case 'grade':
      hal = 'main-kelas'
      atr = `kelas="${kelas}"`
      break

    default:
      hal = 'start-page'
      break
  }
  document.querySelector('main-page').innerHTML = `
    <${hal} ${atr} class="d-block"></${hal}>
  `
}

export { loadPage }
