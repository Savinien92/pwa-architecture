import React from 'react'
import CircularProgress from 'material-ui/Progress/CircularProgress';

import './styles.scss'

export class Loader extends React.PureComponent {
    
  render() {
    return (
      <div className="circular-loader">
        <CircularProgress />
      </div>
    )
  }
}

export default Loader