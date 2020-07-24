import React, { Component } from 'react'
import { DataKelas } from '../../Data'
import { route } from '../../Functions'
import bg from '../../Images/bg2.webp'
import NavButton from '../NavButton'
import Materi from './Materi'

type Props = {
  kelas: number
}
type State = {
  dataKelas: object
}

export class Kelas extends Component<Props, State> {
  constructor(props: Props) {
    super(props)

    document.title = `Kelas ${this.props.kelas} - Belajar Bahasa Inggris`
    this.state = {
      dataKelas: null,
    }
    if (!this.props.kelas) {
      window.location.hash = '/pilih'
    } else {
      this.getData()
    }
  }

  getData() {
    return DataKelas.ambil('classList').then((data: { data: object[] }) => {
      data.data.forEach((item: { kelas: number }) => {
        if (item.kelas === this.props.kelas) {
          this.setState({ dataKelas: data.data[item.kelas - 1] })
        }
      })
    })
  }
  componentDidUpdate(prevProps: Props) {
    if (prevProps.kelas !== this.props.kelas) {
      this.getData()
    }
  }

  kontenKelas() {
    const { kelas } = this.props
    const { dataKelas }: any = this.state
    let kontenKelas: any = []

    if (dataKelas && dataKelas.kelas === kelas) {
      const { isSemester, items } = dataKelas
      if (!isSemester) {
        items.forEach((item: { id: number; title: string; pic: string }) => {
          const { id, pic } = item
          const href = `#/grade/${kelas}/1/${id}`
          const itemContent = (
            <div className='itemKelas col-sm-6 col-md-4' key={id}>
              <a href={href}>
                <figure>
                  <img
                    src={'./assets/Images/' + pic}
                    alt='Kelas'
                    className='rounded w-100'
                  />
                </figure>
              </a>
            </div>
          )
          kontenKelas.push(itemContent)
        })
      } else {
        for (let i: number = 1; i < 3; i++) {
          const href = `#/grade/${kelas}/${i}`
          const itemContent = (
            <div className='itemKelas col-sm-6 col-md-4' key={'sem' + i}>
              <a href={href}>
                <figure>
                  <img
                    src={'./assets/Images/smt' + i + '.webp'}
                    alt='Kelas'
                    className='rounded w-100'
                  />
                </figure>
              </a>
            </div>
          )
          kontenKelas.push(itemContent)
        }
      }
    } else if (!kelas || kelas > 6) {
      kontenKelas = <h3>Tidak Ada Kelas</h3>
    } else {
      kontenKelas = <>Loading...</>
    }

    return (
      <div className='row justify-content-center col-md-11 col-lg-9'>
        {kontenKelas}
      </div>
    )
  }

  render() {
    const { kelas } = this.props
    const { semester } = route()
    let page, materiTitle

    if (semester) {
      page = <Materi />
    } else {
      page = this.kontenKelas()
    }
    return (
      <div
        className='main-kelas pt-5 pb-3 content-page'
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='page-title text-center'>
          <h1 className='bg-danger rounded-radius text-white d-inline pl-5 pr-5 pt-2 pb-2'>
            KELAS {kelas}
          </h1>
        </div>
        <div className='ml-1 mr-1'>
          {materiTitle}
          <div className='container konten rounded mt-5 mb-3 p-4 d-flex justify-content-center position-relative'>
            <div className='row justify-content-center w-100'>{page}</div>
          </div>
        </div>
        <NavButton />
      </div>
    )
  }
}
