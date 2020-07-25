import React, { Component } from 'react'

export default class NavButton extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-end m-0 p-0 nav-button'>
        <a
          onClick={() => window.history.back()}
          className='btn navBtn'
          style={{ backgroundImage: `url(assets/Images/Buttons/back.png)` }}>
          Back
        </a>
        <a
          className='btn navBtn'
          href='#/pilih'
          style={{ backgroundImage: `url(assets/Images/Buttons/home.png)` }}>
          Home
        </a>
      </div>
    )
  }
}
