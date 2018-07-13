import React from 'react'
import { connect } from 'react-redux'

export class Home extends React.PureComponent {
    
  render() {
    return (
      <div>
        <h1>Home Page</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch){
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);