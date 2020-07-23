import React, { Component } from 'react'
import { route } from '../../../Functions'

type Props = { detailItem: string }
type State = { type: string }
class Kelas1Item extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { detailItem } = this.props
    let folder: string = 'Alphabets',
      error: boolean = false
    if (parseInt(detailItem) > -1 && route().idMateri === 2) {
      folder = 'Numbers'
    } else if (route().idMateri === 1) {
      error = false
    } else {
      error = true
    }

    let konten = (
      <>
        <div className='col-10 row justify-content-center align-items-center'>
          <div className='col-sm-9 col-md-7 m-0 p-0 text-center'>
            <figure
              className='rounded p-2 m-0 col-md-6 d-flex justify-content-center align-items-center float-right'
              style={{
                border: 7 + 'px solid var(--red)',
                maxWidth: 300 + 'px',
                maxHeight: 300 + 'px',
              }}>
              <img
                src={`./assets/Images/kelas1/${folder}/${detailItem}.webp`}
                style={{ maxHeight: 270 + 'px', maxWidth: 80 + '%' }}
                alt={folder}
              />
            </figure>
          </div>
          <div className='col-sm-3 col-md-5 d-flex'>
            <button
              className='btn btn-link btn-play'
              onClick={() =>
                document.querySelector('#audio_' + detailItem).play()
              }>
              <img
                src='./assets/Images/kelas1/play.webp'
                alt='Play'
                className='w-100'
              />
            </button>
            <audio
              src={'./assets/Audio/Materi/' + detailItem + '.mp3'}
              hidden
              id={'audio_' + detailItem}></audio>
          </div>
        </div>
      </>
    )

    if (error) {
      konten = <h3>No Data Found</h3>
    }
    return konten
  }
}

export default Kelas1Item
