import React, { Component } from 'react'
import '../../Styles/Start.css'
import bg from '../../Images/bg1.webp'

export class Start extends Component {
  render() {
    return (
      <div
        className='start-page content-page'
        style={{ backgroundImage: `url(${bg})` }}>
        <div className='d-flex align-items-end justify-content-center w-100 start-page'>
          <a className='btn btn-lg pl-5 pr-5 start' href='#/pilih'>
            Mulai
          </a>
        </div>
      </div>
    )
  }
}
