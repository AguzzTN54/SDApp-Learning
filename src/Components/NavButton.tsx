import React, { Component } from 'react'
import back from '../Images/Buttons/back.png'
import home from '../Images/Buttons/home.png'

export default class NavButton extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-end m-0 p-0 nav-button'>
        <a
          onClick={() => window.history.back()}
          className='btn navBtn'
          style={{ backgroundImage: `url(${back})` }}>
          Back
        </a>
        <a
          className='btn navBtn'
          href='#/pilih'
          style={{ backgroundImage: `url(${home})` }}>
          Home
        </a>
      </div>
    )
  }
}
