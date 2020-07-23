import React, { Component } from 'react'

type Props = { idMateri: number; title: any }
type State = { idMateri: number }
class Kelas2 extends Component<Props, State> {
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
    let jdl,
      set = true
    const { title, idMateri } = this.props
    switch (idMateri) {
      case 4:
        jdl = 'Time'
        break

      case 5:
        jdl = 'Foods & Drinks'
        break

      case 6:
        jdl = 'Hobby'
        break

      default:
        jdl = 'No Data'
        set = false
        break
    }
    if (set) {
      this.setState({ idMateri: idMateri })
    }
    title(jdl)
    document.title = jdl + ' - Kelas 2'
  }

  render() {
    return (
      <>
        <div className='col-11 col-sm-5 col-lg-4'>
          <figure>
            <img
              src='./assets/Images/'
              alt='Images'
              style={{
                border: 7 + 'px solid var(--red)',
                maxWidth: 450 + 'px',
                maxHeight: 450 + 'px',
              }}
            />
          </figure>
        </div>
        <div className='col'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          officia cum doloremque deleniti ad unde optio earum commodi adipisci!
          Magni laudantium, atque enim vel ex debitis est recusandae similique
          sunt vero alias pariatur, ad iusto perferendis id, in ab! Facilis unde
          ex soluta dolores quaerat magnam, dolore ratione ad libero?
        </div>
      </>
    )
  }
}

export default Kelas2
