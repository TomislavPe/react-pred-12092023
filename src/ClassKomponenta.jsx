import { Component } from 'react'
import PropTypes from "prop-types"

class ClassKomponenta extends Component {

  render() {
    return (
      <>
        <h1>Komponenta</h1>
        <h2>{this.props.title}</h2>
      </>
    )
  }
}

ClassKomponenta.propTypes = {
  title: PropTypes.string
}

export default ClassKomponenta