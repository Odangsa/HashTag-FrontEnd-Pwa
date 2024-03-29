import logo from '../assets/icon-256x256.png';
import '../components/result/App.css';
import Group from '../components/result/Group';
import CopyButton from '../components/result/CopyButton';
import Popular from '../components/result/Popular';
import Place from '../components/result/Place';
import AI from '../components/result/AI';
import { api } from '../lib/api';
import { useEffect } from 'react';

const ResultPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/1/hashtag');
      console.log('response', response.data);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src={logo}></img>
      </div>
      <Group />
      <CopyButton />
      <hr />
      <Popular />
      <br style={{ marginTop: '50px' }} />
      <Place />
      <br style={{ marginTop: '50px' }} />
      <AI />
      <br />
      <br />
    </div>
  );
};

export default ResultPage;
