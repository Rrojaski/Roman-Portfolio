import React from 'react';
import Logo from '../../components/Logo/Logo';
import NavBar from '../../components/NavBar/NavBar';
import '../../Standard.scss';

class Header extends React.Component {
  constructor() {
    super()
  };
  render() {
    return (
      <div className="header flex-container">
        <Logo />
        <NavBar />
      </div>
    )
  }
}

export default Header;