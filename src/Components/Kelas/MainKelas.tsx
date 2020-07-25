import React, { Component } from 'react'
import { DataKelas } from '../../Data'
import { route } from '../../Functions'
import bg from '../../Images/bg2.webp'
import NavButton from '../NavButton'
import Materi from './MateriContent'

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
    const { kelas } = this.props
    const D = new DataKelas()
    return D.getListBab(kelas).then((data: object[]) => {
      this.setState({ dataKelas: data[0] })
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
      const { isSemester, items, dir } = dataKelas
      if (!isSemester) {
        items.forEach((item: { id: number; title: string; name: string }) => {
          let col: string = 'col-lg-3'
          if (kelas > 2) col = 'col-lg-2'
          const { id, name, title } = item
          const href = `#/grade/${kelas}/1/${id}`
          const itemContent = (
            <div
              className={
                'itemKelas mb-4 text-center col-6 col-sm-6 col-md-4 ' + col
              }
              key={id}>
              <a href={href}>
                <figure>
                  <img
                    src={`./assets/Images/${dir}/${name}.webp`}
                    alt='Kelas'
                    className='rounded w-100'
                  />
                </figure>
                <h4 className='text-dark'>{title}</h4>
              </a>
            </div>
          )
          kontenKelas.push(itemContent)
        })
      } else {
        for (let i: number = 1; i < 3; i++) {
          const href = `#/grade/${kelas}/${i}`
          const itemContent = (
            <div
              className='itemKelas col-6 col-sm-6 col-md-4 col-lg-3 mb-4'
              key={'sem' + i}>
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
      kontenKelas = <span>Loading...</span>
    }

    return (
      <div className='row align-items-end justify-content-center col-md-11 col-lg'>
        {kontenKelas}
      </div>
    )
  }

  render() {
    const { kelas } = this.props
    const { semester } = route()
    let page

    if (semester) {
      page = <Materi semester={semester} />
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
          <div className='container konten rounded mt-5 mb-3 pl-4 pr-4 pt-4 pb-2 d-flex justify-content-center position-relative'>
            <div className='row justify-content-center w-100 align-items-center konten-item'>
              {page}
            </div>
          </div>
        </div>
        <NavButton />
      </div>
    )
  }
}
