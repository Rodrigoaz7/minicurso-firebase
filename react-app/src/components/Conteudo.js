import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import RaisedButton from 'material-ui/RaisedButton'
// import Paper from './Paper'

// import { db } from '../firebase'
import { style } from './style'

export default class Conteudo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      conteudo: <div />
    }
  }

  // componentDidMount = () => {
  //   this.getConteudo()
  // }

  // getConteudo = () => {
  //   console.log('getConteudo')
  //   const iterarQuery = (query) => {
  //     const conteudo = []
  //     query.forEach(
  //       (docSnap) => {
  //         const dado = JSON.stringify(docSnap.data(), null, 4)
  //         conteudo.push(
  //           <Paper
  //             conteudo={dado}
  //             key={conteudo.length}
  //           />
  //         )
  //       }
  //     )
  //     this.setState({conteudo})
  //   }
  //   db.collection('Dado').get()
  //     .then(iterarQuery)
  //     .catch((e) => console.log(e.message))
  // }

  // addDoc = () => {
  //   const novoDado = {
  //     1: 2,
  //     outro: 4
  //   }
  //   db.collection('Dado').add(novoDado)
  //     .then(this.getConteudo)
  //     .catch((e) => console.log(e.message))
  // }

  // setDoc = () => {
  //   const dado = {
  //     outro: 6,
  //     7: 8
  //   }
  //   db.collection('Dado').doc('meudado').set(dado)
  //     .then(this.getConteudo)
  //     .catch((e) => console.log(e.message))
  // }

  // updateDoc = () => {
  //   const alteracao = {
  //     outro: 555
  //   }
  //   db.collection('Dado').doc('meudado').update(alteracao)
  //     .then(this.getConteudo)
  //     .catch((e) => console.log(e.message))
  // }

  // deleteDoc = () => {
  //   db.collection('Dado').doc('meudado').delete()
  //     .then(this.getConteudo)
  //     .catch((e) => console.log(e.message))
  // }

  render () {
    return (
      <div style={style.main}>
        <div>
          {/* <RaisedButton
            secondary
            style={style.button}
            label='Add'
            onClick={this.addDoc}
          /> */}
          {/* <RaisedButton
            secondary
            style={style.button}
            label='Set'
            onClick={this.setDoc}
          /> */}
          {/* <RaisedButton
            secondary
            style={style.button}
            label='Update'
            onClick={this.updateDoc}
          /> */}
          {/* <RaisedButton
            secondary
            style={style.button}
            label='Delete'
            onClick={this.deleteDoc}
          /> */}
        </div>
        {this.state.conteudo}
      </div>
    )
  }
}

// Conteudo.propTypes = {
// }
