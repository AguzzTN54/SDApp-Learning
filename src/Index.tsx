import 'regenerator-runtime'
import ReactDOM from 'react-dom'
import React from 'react'
import App from './App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('root'))
  PWARegister()
})

const PWARegister = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('./sw.js')
        .then(() => {
          console.log('Pendaftaran ServiceWorker berhasil')
        })
        .catch(() => {
          console.log('Pendaftaran ServiceWorker gagal')
        })
    })
  } else {
    console.log('ServiceWorker belum didukung browser ini.')
  }
}
