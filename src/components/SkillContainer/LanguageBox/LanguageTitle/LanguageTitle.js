import React from 'react';
import '../../../../Standard.scss';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
` 

class LanguageTitle extends React.Component {
  constructor() {
    super()
  }
  
  render() {
    return (
      <Wrapper>
        <h3 className='font-md'>{this.props.title}</h3>
      </Wrapper>
    )
  }
}

export default LanguageTitle;