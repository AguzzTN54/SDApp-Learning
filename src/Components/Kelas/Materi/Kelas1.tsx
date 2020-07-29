import React, { Component } from 'react'
import { route } from '../../../Functions'
import Kelas1Item from './Kelas1Item'

type Props = { title: any; idMateri: number }
type State = { idMateri: number }
export class Kelas1 extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { idMateri: 0 }
  }
  componentDidMount() {
    this.setTitle()
  }
  componentDidUpdate(prevProps: Props) {
    if (this.props.idMateri) {
      if (this.props.idMateri !== prevProps.idMateri) {
        this.setTitle()
      }
    }
  }

  setTitle() {
    let title
    switch (this.props.idMateri) {
      case 1:
        title = 'Alphabets'
        this.setState({ idMateri: 1 })
        break

      case 2:
        title = 'Numbers'
        this.setState({ idMateri: 2 })
        break

      case 3:
        title = 'Colors'
        this.setState({ idMateri: 3 })
        break

      default:
        title = 'No Data'
        break
    }
    this.props.title(title)
    document.title = title + ' - Kelas 1'
  }

  content() {
    let content: any = [],
      items: string[],
      folder: string
    const numbers: string[] = '0123456789'.split('')
    const alpha: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const arrColors: string = 'red orange yellow green blue purple dark white',
      colors = arrColors.split(' ')

    switch (this.props.idMateri) {
      case 1:
        items = alpha
        folder = 'Alphabets'
        break

      case 2:
        items = numbers
        folder = 'Numbers'
        break

      case 3:
        items = colors
        folder = 'Colors'
        break

      default:
        break
    }

    if (items) {
      items.forEach((item: string) => {
        let linkclr: string = 'transparent'
        const { kelas, page, semester, idMateri } = route()

        let image = (
          <img
            src={`assets/Images/kelas1/${folder}/${item}.webp`}
            alt={item}
            style={{ maxWidth: 100 + '%', maxHeight: 100 + '%' }}
          />
        )

        if (folder === 'Colors') {
          linkclr = item
          image = <></>
        }
        const alphaItem = (
          <a
            href={`#/${page}/${kelas}/${semester}/${idMateri}/${item}`}
            className={'btn btn-outline-warning m-0'}
            style={{
              width: 80 + 'px',
              height: 80 + 'px',
              backgroundColor: 'var(--' + linkclr + ')',
            }}
            key={`item${item}`}>
            {image}
          </a>
        )
        content.push(alphaItem)
      })
    } else {
      content = <h3 className='text-danger'>Tidak Ada data</h3>
    }
    return content
  }

  render() {
    let konten = (
      <div className='col-md-11 text-center mt-3 mb-3 p-0'>
        {this.content()}
      </div>
    )

    const { detailMateri } = route()
    if (detailMateri) {
      konten = <Kelas1Item detailItem={detailMateri} />
    }

    return konten
  }
}
