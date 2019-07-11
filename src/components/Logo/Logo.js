import React from 'react';
import avatar from './../../logo.png'
import './../../Standard.scss'


class Logo extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='logo flex-container'>
        <img className='logo-img' src={avatar} alt='logo'/>
      </div>
    )
  }
}

export default Logo;