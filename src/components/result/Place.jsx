import { useState } from 'react';
import './App.css';

export default function Place(){

    const [PlaceHashtags, setPlaceHashtags] = useState(['#성수동', '#잠실롯데월드몰', '#해방촌','#역전할머니맥주', '#성수동', '#성수동','#이탈리아','#00팝업스토어','#성수동','리얼후라이', '숭실숭실대', '부산광역시', '서울','삿포로']);
  
    return (
      <div>
        <h2 style={{marginLeft: '5%', textAlign: 'left'}}>🚩 장소 해시태그</h2>
        <div className='CopyBtn-container'>
        <button className='CopyButton' style={{marginTop: 0, marginBottom: '10px'}}>복붙칸에 넣기</button>
        </div>
  
        <div className='inner-background'>
          <div className='item-container'>
            {PlaceHashtags.map((hashtag, index) => (
              <div key={index} className='below-item'>
                {hashtag}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }