import React, { Component } from 'react'

import { MuiThemeProvider } from 'material-ui/styles'

import Titulo from './components/Titulo'
import Conteudo from './components/Conteudo'

export default class App extends Component {
  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Titulo />
          <Conteudo />
        </div>
      </MuiThemeProvider>
    )
  }
}
