import React, { Component } from 'react'
import marked from 'marked'
import { DataKelas } from '../../../Data'
import { route } from '../../../Functions'

type Data = {
  hal: number
  content: any
  next_content: number
  prev_content: number
}
type Props = { idMateri: number; title: any }
type State = {
  grade: number
  title: string
  data: Data
}
export class MateriDefault extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const rute = route()

    this.state = {
      grade: rute.kelas,
      title: null,
      data: {
        hal: 1,
        content: `<p class="text-center">Loading ..</p>`,
        prev_content: 0,
        next_content: 0,
      },
    }
  }

  componentDidMount() {
    const rute = route()
    const D = new DataKelas()

    D.getListBab(rute.kelas).then((data: any[]) => {
      const { items } = data[0]
      const materi = items.find((item: any) => item.id == this.props.idMateri)

      const { name, title } = materi
      document.title = title + ' - Belajar Bahasa Inggris'
      this.props.title(title)
      if (name) {
        D.getFirst({ grade: rute.kelas, subBab: name }).then((data: Data[]) => {
          if (data.length > 0) {
            this.setState({
              title: title,
              data: {
                hal: 1,
                next_content: data[0].next_content,
                prev_content: data[0].prev_content,
                content: marked(data[0].content),
              },
            })
          } else {
            this.setState({
              title: 'No Data',
              data: {
                hal: 0,
                next_content: 0,
                prev_content: 0,
                content: '<h3 class="text-center"> No Data</h3>',
              },
            })
          }
        })
      }
    })
  }

  otherContent(id: number, btn: string) {
    document.querySelector('.konten-item').scrollTo(0, 0)
    const { hal } = this.state.data
    let pg = hal + 1
    if (btn == 'prev') pg = hal - 1
    const D = new DataKelas()
    D.getById(id).then((data: Data[]) => {
      this.setState({
        data: {
          hal: pg,
          next_content: data[0].next_content,
          prev_content: data[0].prev_content,
          content: marked(data[0].content),
        },
      })
    })
  }

  render() {
    let nextBtn: any = '',
      prevBtn: any = ''
    const { hal, next_content, prev_content } = this.state.data
    if (next_content > 0) {
      nextBtn = (
        <>
          <span>
            page <strong> {hal} </strong>
          </span>
          <button
            className='btn btn-danger'
            onClick={() => this.otherContent(next_content, 'next')}>
            Next
          </button>
        </>
      )
    }
    if (prev_content > 0) {
      prevBtn = (
        <button
          className='btn btn-danger'
          onClick={() => this.otherContent(prev_content, 'prev')}>
          Prev
        </button>
      )
    }
    return (
      <div className='col-10 col-sm-9 col-md-8 p-0 mt-4 mb-3'>
        <div dangerouslySetInnerHTML={{ __html: this.state.data.content }} />
        <div
          style={{ justifyContent: 'space-evenly', alignItems: 'center' }}
          className='d-flex pt-4'>
          {prevBtn} {nextBtn}
        </div>
      </div>
    )
  }
}
