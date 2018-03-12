import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'

export default class MeuPaper extends Component {
  render () {
    const style = {
      paper: {
        padding: '20px 20px 20px 20px',
        margin: '10px 10px 10px 10px',
        textAlign: 'left',
        display: 'inline-block'
      }
    }
    return (
      <div>
        <Paper style={style.paper} zDepth={2}>
          <pre>{this.props.conteudo}</pre>
        </Paper>
      </div>
    )
  }
}

MeuPaper.propTypes = {
  conteudo: PropTypes.string
}
