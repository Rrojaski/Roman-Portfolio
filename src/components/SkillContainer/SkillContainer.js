import React from 'react';
import '../../Standard.scss';
import './SkillContainer.scss';
import MusicBox from './MusicBox/MusicBox';
import LanguageBox from './LanguageBox/LanguageBox';
import BoxContainer from './BoxContainer/BoxContainer';

class SkillContainer extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <div className="skill-container ">
        <h2 className='font-lg'>What I can do</h2>
        <div className='box-master-container flex-container'>
          <BoxContainer>
            <LanguageBox />
          </BoxContainer>
          <BoxContainer>
            <MusicBox />
          </BoxContainer>
        </div>
        
      </div>
    )
  }
}


export default SkillContainer;