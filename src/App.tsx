import React, { Component } from 'react'
import './Styles/Index.css'
import { route } from './Functions'
import { PilihKelas, Start } from './Components/Start'
import { Kelas } from './Components/Kelas'

type State = {
  page: string
  kelas: number
}
class App extends Component<{}, State> {
  constructor(props: any) {
    super(props)

    const rute = route()
    this.state = {
      page: rute.page,
      kelas: rute.kelas,
    }
  }

  componentDidMount() {
    const loader = document.querySelector('#loader')
    if (loader) loader.remove()

    window.addEventListener('popstate', () => {
      const rute = route()
      this.setState({ page: rute.page, kelas: rute.kelas })
    })
  }

  render() {
    let page: any
    switch (this.state.page) {
      case 'start':
        page = <Start />
        break

      case 'pilih':
        document.title = 'Pilih Kelas'
        page = <PilihKelas />
        break

      case 'grade':
        page = <Kelas kelas={this.state.kelas} />
        break

      default:
        page = <Start />
        break
    }

    return page
  }
}

export default App
