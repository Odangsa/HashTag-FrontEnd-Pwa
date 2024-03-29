import { useState } from 'react';
import './App.css';

export default function Group(){

    const [GroupHashtags, setGroupHashtags] = useState(['#인기해시태그1', '#인기2', '#해시태그3', '#인기해시태그4', '#인기해시태그5', '#인기해시태그6','#인기해시태그7']);
  
    return (
      <div className='inner-background'>
        <div className='item-container'>
          {GroupHashtags.map((hashtag, index) => (
            <div key={index} className='above-item'>
              {hashtag}
            </div>
          ))}
        </div>
      </div>
    );
  }