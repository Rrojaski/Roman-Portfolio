import React from 'react';
import '../../Standard.scss';

class NavBar extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav-list flex-container">
          <li className="nav-list-item font-md"><a class="nav-link">Home</a></li>
          <li className="nav-list-item font-md"><a class="nav-link">Work</a></li>
          <li className="nav-list-item font-md"><a class="nav-link">About</a></li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;