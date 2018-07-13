import React from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import * as firebase from 'firebase'

// import Loader from '../loader/Loader'

export class Teams extends React.PureComponent {
  
  static propTypes = {
  }

  componentWillMount() {
  }

  render() {
    return (
      <h1>Teams</h1>
    )
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)