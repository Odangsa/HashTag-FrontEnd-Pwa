import { useState } from 'react';
import './App.css';

export default function Popular(){

    const [PopularHashtags, setPopularHashtags] = useState(['#성수동', '#성수동', '#성수동', '#성수동', '#성수동', '#성수동','#성수동','#성수동','#성수동','#성수동', '#성수동', '#성수동', '#성수동','#성수동', '#성수동', '#성수동', '#성수동', '#성수동']);
  
    return (
      <div>
        <h2 style={{marginLeft: '5%', textAlign: 'left'}}>⭐ 인기 해시태그</h2>
        <div className='CopyBtn-container'>
        <button className='CopyButton' style={{marginTop: 0, marginBottom: '10px'}}>복붙칸에 넣기</button>
        </div>
  
        <div className='inner-background'>
          <div className='item-container'>
            {PopularHashtags.map((hashtag, index) => (
              <div key={index} className='below-item'>
                {hashtag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }