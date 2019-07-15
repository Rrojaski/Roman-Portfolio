import React from 'react';
import { SourceMapConsumer } from '../../../../../AppData/Local/Microsoft/TypeScript/3.5/node_modules/source-map/source-map';
import '../Standard.scss';
import TitleContainer from '../components/TitleContainer/TitleContainer';
import DescriptionContainer from '../components/DescriptionContainer/DescriptionContainer';
import Space from '../components/Space/Space';
import SkillContainer from '../components/SkillContainer/SkillContainer';

const Home = (props) => {
  return (
    <main className='main'>
      <TitleContainer />
      <DescriptionContainer />
      <Space />
      <SkillContainer />      
    </main>
  );
};

export default Home;