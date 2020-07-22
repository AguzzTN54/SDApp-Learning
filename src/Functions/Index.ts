export const route = () => {
  const hash = window.location.hash.split('/')
  return {
    page: hash[1],
    kelas: parseInt(hash[2]),
    semester: parseInt(hash[3]),
    idMateri: parseInt(hash[4]),
    detailMateri: hash[5],
  }
}

export const setTitle = (title: string) => {
  const target = document.querySelector('#materiTitle')
  if (target) {
    target.innerHTML = title
    document.title = title
  }
}

export const setSmt = (smt: number) => {
  const target = document.querySelector('#semester')
  if (target) target.innerHTML = `Semester ${smt}`
}
