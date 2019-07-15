import React from 'react';
import './BoxContainer.scss';

class BoxContainer extends React.Component {
  render() {
    return (
      <div className='box-container'>
        {this.props.children}
      </div>
    )
  }
}

export default BoxContainer;