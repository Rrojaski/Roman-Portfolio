import React from 'react';
import '../../Standard.scss';


class Space extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="space flex-container">
        <div className="spacer">
          <p className="dots"></p>
        </div>
      </div>
    )
  }
}

export default Space;