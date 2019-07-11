import React from 'react';
import './DescriptionContainer.scss';
import '../../Standard.scss';
import avatar from '../../logo.png';


const avatarStyle = {
  paddingTop: '10px',
  width: '100%',
  borderRadius: '50%',
}

class DescriptionContainer extends React.Component {
  constructor() {
    super() 
  }
  
  render() {
    return (
      <div className="description flex-container container">
        <div className="logo flex-container">
          <img
            src={avatar}
            style={avatarStyle}
          />
        </div>
        <div className="desc-container flex-container">
          <h2 className="font-lg desc-h2">Hi.</h2>
          <p className="font-md desc-p">
            I'm a Junior Frontend Developer/Designer based in Plano, TX. I have
            a passion for web development and I love to create new things for
            the web and mobile devices.
          </p>
          <p className="font-md desc-p">
            I enjoy turning complex problems into simple, beautiful and
            intuitive interfaces with responsive design. When I'm not coding or
            pushing pixels, you'll find me in the gym
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path
                d="M434.3 315.5l29.7-29.7-29.7-29.8-74.3 74.3L181.7 152 256 77.7 226.3 48l-29.7 29.7L166.8 48l-44.5 44.5-29.8-29.7-29.7 29.7 29.7 29.7L48 166.8l29.7 29.7L48 226.3 77.7 256l74.3-74.3L330.3 360 256 434.3l29.7 29.7 29.7-29.7 29.7 29.7 44.5-44.5 29.7 29.7 29.7-29.7-29.7-29.7 44.5-44.5-29.5-29.8z"
              ></path>
            </svg>
            or playing some video games
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              height="1em"
              width="1em"
            >
              <path
                d="M135.1 204.6c-10.7 0-19.3 8.7-19.3 19.4s8.7 19.4 19.3 19.4c10.6 0 19.3-8.7 19.3-19.4s-8.6-19.4-19.3-19.4z"
              ></path>
              <path
                d="M466.3 248.9c-21.2-88.5-43.6-135.5-88.5-148.8-9.8-2.9-18.1-4-25.7-4-27.6 0-46.9 14.7-96.1 14.7-49.2 0-68.5-14.7-96.1-14.7-7.7 0-16 1.1-25.7 4-44.9 13.3-67.3 60.4-88.5 148.8-21.2 88.5-17.3 152.4 7.7 164.3 4.1 1.9 8.2 2.8 12.5 2.8 21.7 0 45.1-23.8 67.7-52 25.7-32.1 32.1-33 110.3-33h24.3c78.1 0 84.6.8 110.3 33 22.5 28.2 46 52 67.7 52 4.2 0 8.4-.9 12.5-2.8 24.9-12 28.7-75.9 7.6-164.3zm-331.1 14.7c-21.6 0-39.2-17.8-39.2-39.6s17.6-39.6 39.2-39.6c21.7 0 39.2 17.8 39.2 39.6.1 21.9-17.5 39.6-39.2 39.6zm172.9-19.5c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zM352 288c-11.1 0-20.1-9-20.1-20 0-11.2 9-20.1 20.1-20.1 11.1 0 20.1 8.9 20.1 20.1 0 11-9 20-20.1 20zm0-87.8c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1zm43.9 43.9c-11.1 0-20.1-9-20.1-20.1 0-11.1 9-20.1 20.1-20.1 11.1 0 20.1 9 20.1 20.1 0 11.1-9 20.1-20.1 20.1z"
              ></path></svg
            >.
          </p>
        </div>
      </div>
    )
  }
}


export default DescriptionContainer;