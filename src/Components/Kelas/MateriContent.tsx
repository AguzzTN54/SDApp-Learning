import React, { Component } from 'react'
import '../../Styles/Materi.css'
import { route } from '../../Functions'
import { DataKelas } from '../../Data'
import { Kelas1, Kelas2, MateriDefault } from './Materi/Index'

type Props = { semester: number }
type State = {
  title: string
  semester: number
  data: any
}
class Materi extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      title: 'Materi',
      semester: this.props.semester,
      data: null,
    }
  }
  componentDidMount() {
    this.getListBab(route().kelas)
  }

  getListBab(grade: number) {
    const D = new DataKelas()
    D.getListBab(grade).then((data: any[]) => {
      let sem: number = null
      if (data[0].isSemester) sem = this.props.semester
      this.setState({ semester: sem, data: data[0] })
    })
  }

  setTitle(title: string) {
    this.setState({ title: title })
  }

  content() {
    let konten: any = []
    const { semester, data } = this.state
    if (data) {
      data.items.forEach(
        (item: {
          id: number
          semester: number
          title: string
          name: string
        }) => {
          const rute = route()
          const itm = (
            <div
              className='col-6 col-md-4 col-lg-2 text-center mb-4'
              key={item.id}>
              <a href={`#/grade/${rute.kelas}/${semester}/${item.id}`}>
                <figure>
                  <img
                    src={`./assets/Images/${data.dir}/${item.name}.webp`}
                    alt='Materi'
                    style={{ maxWidth: 90 + '%' }}
                  />
                </figure>
                <h4 className='text-dark'>{item.title}</h4>
              </a>
            </div>
          )
          if (data.isSemester) {
            if (semester == item.semester) konten.push(itm)
          } else {
            konten.push(itm)
          }
        }
      )
    }

    return (
      <>
        <div className='row align-items-end justify-content-center col-md-11 col-lg pt-4'>
          {konten}
        </div>
      </>
    )
  }

  render() {
    let content
    const rute = route()
    switch (rute.kelas) {
      case 1:
        content = (
          <Kelas1 title={this.setTitle.bind(this)} idMateri={rute.idMateri} />
        )
        break

      case 2:
        content = (
          <Kelas2 title={this.setTitle.bind(this)} idMateri={rute.idMateri} />
        )
        break

      default:
        if (rute.idMateri > 0) {
          content = (
            <MateriDefault
              title={this.setTitle.bind(this)}
              idMateri={rute.idMateri}
            />
          )
        } else {
          content = this.content()
        }
        break
    }

    let { semester, title } = this.state,
      smt: string = '___'
    if (semester) smt = 'Semester ' + semester
    return (
      <>
        <div className='w-100 position-absolute row materi-title'>
          <div className='col-7 p-0'>
            <div className='btn btn-danger rounded-radius pl-5 pr-5 materiTitle'>
              {title}
            </div>
          </div>
          <div className='col-5 p-0 text-right'>
            <div className='btn btn-danger rounded-radius pl-4 pr-4 semester'>
              {smt}
            </div>
          </div>
        </div>
        {content}
      </>
    )
  }
}

export default Materi
