import Materi from './data.json'

export class DataKelas {
  getListBab(grade: number) {
    return Materi.list_bab.filter((bab: { kelas: number }) => {
      return bab.kelas === grade
    })
  }

  getFirst(data: { grade: number; subBab: string }) {
    return Materi.data_materi.filter(
      (M: { grade: number; sub_bab: string }) => {
        return M.grade == data.grade && M.sub_bab == data.subBab
      }
    )
  }
  getById(id: number) {
    return Materi.data_materi.filter((M: { id: number }) => {
      return M.id === id
    })
  }
}
