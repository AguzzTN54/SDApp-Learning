import React, { Component } from 'react'
import bg from '../../Images/bg2.webp'
import NavButton from '../NavButton'

type State = {
  classes: any[]
}
export class PilihKelas extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      classes: null,
    }
  }

  componentWillMount() {
    const classes = []

    for (let i: number = 1; i < 7; i++) {
      const href = `#/grade/${i}`,
        id = `kelas${i}`,
        pic = `assets/Images/PilihKelas/kls${i}.png`

      const classe = (
        <div className='col-6 col-md-4 p-1' key={id}>
          <figure>
            <a href={href}>
              <img
                src={pic}
                alt='Kelas'
                style={{ width: 150 + 'px', maxWidth: 90 + '%' }}
              />
            </a>
          </figure>
        </div>
      )
      classes.push(classe)
    }
    this.setState({ classes: classes })
  }

  render() {
    return (
      <div
        className='pilih-kelas pt-5 pb-3 content-page'
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='page-title text-center'>
          <h1 className='bg-danger rounded-radius text-white d-inline pl-5 pr-5 pt-2 pb-2'>
            PILIH KELAS
          </h1>
        </div>
        <div className='ml-1 mr-1'>
          <div className='container konten rounded mt-5 mb-3 p-4 d-flex justify-content-center position-relative'>
            <div className='row justify-content-center text-center w-100'>
              {this.state.classes}
            </div>
          </div>
        </div>
        <NavButton />
      </div>
    )
  }
}
