import logo from '../assets/icon-256x256.png';
import '../components/result/App.css';
import { useState } from 'react';
import Group from '../components/result/Group';
import CopyButton from '../components/result/CopyButton';
import Popular from '../components/result/Popular';
import Place from '../components/result/Place';
import AI from '../components/result/AI';

const ResultPage = () => {

  return (
    <div className="App">
      <div className="navbar">
        <img className='logo' src={logo}></img>
      </div>

      <Group/>
      <CopyButton/>
      <hr/>
      <Popular/>
      <br style={{marginTop: '50px'}}/>
      <Place/>
      <br style={{marginTop: '50px'}}/>
      <AI/>
      <br/>
      <br/>

    </div>
  );
}

export default ResultPage;