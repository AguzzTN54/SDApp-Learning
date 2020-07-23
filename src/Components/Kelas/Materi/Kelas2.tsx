import React, { Component } from 'react'
import * as marked from 'marked'
import DataKelas from '../../../Data'

type Props = { idMateri: number; title: any }
type Data = {
  content: any
  next_content: number
  prev_content: number
}
type State = {
  idMateri: number
  sub_bab: string
  data: Data
}
class Kelas2 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      idMateri: 0,
      sub_bab: null,
      data: { next_content: 0, prev_content: 0, content: 'Loading..' },
    }
  }
  componentDidMount() {
    this.getData(this.setTitle())
  }
  componentDidUpdate(prevProps: Props) {
    if (this.props.idMateri) {
      if (this.props.idMateri !== prevProps.idMateri) {
        this.getData(this.setTitle())
      }
    }
  }

  setTitle() {
    let jdl,
      set = true,
      sub_bab: string = null
    const { title, idMateri } = this.props
    switch (idMateri) {
      case 4:
        jdl = 'Telling Time'
        sub_bab = 'times'
        break

      case 5:
        jdl = 'Foods & Drinks'
        sub_bab = 'foods'
        break

      case 6:
        jdl = 'Hobby'
        sub_bab = 'hobby'
        break

      default:
        jdl = 'No Data'
        set = false
        break
    }
    if (set) {
      this.setState({ idMateri: idMateri, sub_bab: sub_bab })
    }
    title(jdl)
    document.title = jdl + ' - Kelas 2'
    return sub_bab
  }

  getData(subBab: string) {
    const D = new DataKelas()
    D.getFirst({ grade: 2, subBab: subBab }).then((data: Data[]) => {
      this.setState({
        data: {
          next_content: data[0].next_content,
          prev_content: data[0].prev_content,
          content: marked(data[0].content),
        },
      })
    })
  }

  otherContent(id: number) {
    const D = new DataKelas()
    D.getById(id).then((data: Data[]) => {
      this.setState({
        data: {
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
    const { content, next_content, prev_content } = this.state.data
    if (next_content > 0) {
      nextBtn = (
        <button
          className='btn btn-danger'
          onClick={() => this.otherContent(next_content)}>
          {' '}
          Next
        </button>
      )
    }
    if (prev_content > 0) {
      prevBtn = (
        <button
          className='btn btn-danger'
          onClick={() => this.otherContent(prev_content)}>
          {' '}
          Prev
        </button>
      )
    }
    return (
      <>
        <div className='col-11 col-md-5 text-center'>
          <figure>
            <img
              src='./assets/Images/kelas2/jam.webp'
              alt='Images'
              style={{
                border: 7 + 'px solid var(--red)',
                width: 450 + 'px',
                maxWidth: 80 + '%',
                maxHeight: 450 + 'px',
              }}
            />
          </figure>
        </div>
        <div className='col'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
          <div style={{ justifyContent: 'space-evenly' }} className='d-flex'>
            {prevBtn} {nextBtn}
          </div>
        </div>
      </>
    )
  }
}

export default Kelas2
