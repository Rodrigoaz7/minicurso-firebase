import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import AppBar from 'material-ui/AppBar'

// import { db } from '../firebase'

export default class Titulo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      titulo: ''
    }
  }

  // componentDidMount = () => {
  //   db.collection('Titulo').doc('principal').get()
  //     .then(this.setTitulo)
  //     .catch((e) => console.log(e.message))
  // }

  // setTitulo = (snap) => {
  //   this.setState({ titulo: snap.data().conteudo })
  // }

  render () {
    return (
      <AppBar
        title={this.state.titulo}
      />
    )
  }
}

// Titulo.propTypes = {
// }
