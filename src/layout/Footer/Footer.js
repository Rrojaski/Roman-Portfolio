import React from 'react';
import '../../Standard.scss';

class Footer extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <footer className="footer flex-container">
      <div className="container">
        <p className="copyright font-md">
          Made with by
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            color = 'red'
          >
            <path
              d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113z"
            ></path>
          </svg>
          Roman Rojas
        </p>
      </div>
    </footer>
    )
  }
}


export default Footer;