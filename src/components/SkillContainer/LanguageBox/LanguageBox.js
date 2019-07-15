import React from 'react';
import './LanguageBox.scss';
import '../../../Standard.scss';
import LanguageTitle from './LanguageTitle/LanguageTitle';
import IconBox from './IconBox';
import Icon from '../../Icon/Icon.js';
import ReactLogo from '../../../Images/React-Logo.png';
import BootStrapLogo from '../../../Images/Bootstrap-Logo.png';
import HtmlLogo from '../../../Images/HTML5-Logo.png';
import Css3Logo from '../../../Images/CSS3-Logo.jpg';
import JSLogo from '../../../Images/JavaScript-Logo.png';
import SupermanLogo from '../../../Images/Superman-Logo.png';

class LanguageBox extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='language-box'>
        <LanguageTitle title='FRAMEWORKS' />
        <IconBox>
        <Icon src={ReactLogo}/><Icon src={BootStrapLogo}/>
        </IconBox>
        <LanguageTitle title='LANGUAGES' />
        <IconBox>
        <Icon src={HtmlLogo}/><Icon src={Css3Logo}/><Icon src={JSLogo}/>
        </IconBox>
        <LanguageTitle title= 'SUPER POWERS' />
        <IconBox>
        <Icon src={SupermanLogo}/>
        </IconBox>
      </div>
    )
  }
}

export default LanguageBox;