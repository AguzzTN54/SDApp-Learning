import React, { Component } from 'react'
import '../../Styles/Materi.css'
import { route } from '../../Functions'
import Kelas1 from './Materi/Kelas1'
import Kelas2 from './Materi/Kelas2'

type State = {
  title: string
  semester: number
}
class Materi extends Component<{}, State> {
  constructor(props: any) {
    super(props)
    this.state = {
      title: 'Materi',
      semester: null,
    }
  }

  setTitle(title: string) {
    this.setState({ title: title })
  }

  content() {
    return <>Huhyahaa</>
  }

  render() {
    let content
    const rute = route()
    switch (rute.kelas) {
      case 1:
        content = (
          <Kelas1 title={this.setTitle.bind(this)} idMateri={rute.idMateri} />
        )
        break

      case 2:
        content = (
          <Kelas2 title={this.setTitle.bind(this)} idMateri={rute.idMateri} />
        )
        break

      default:
        content = this.content()
        break
    }

    let { semester, title } = this.state,
      smt: string = '___'
    if (semester) smt = 'Semester ' + semester
    return (
      <>
        <div className='w-100 position-absolute row materi-title'>
          <div className='col-8 p-0'>
            <div className='btn btn-danger rounded-radius pl-5 pr-5 materiTitle'>
              {title}
            </div>
          </div>
          <div className='col-4 p-0 text-right'>
            <div className='btn btn-danger rounded-radius pl-4 pr-4 semester'>
              {smt}
            </div>
          </div>
        </div>
        {content}
      </>
    )
  }
}

export default Materi
