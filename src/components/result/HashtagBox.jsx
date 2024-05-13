// HashtagBox.js
import './App.css';
import useCopyStore from '../../store/useCopyStore';
import { useEffect } from 'react';

const HashtagBox = ({ hashtag }) => {
  const { setCopyList, copyList, deleteHashtag, addAllHashtags } =
    useCopyStore();
  const title = hashtag.title;
  const hashtagList = hashtag.hashtagList;

  useEffect(() => {
    console.log('copyList: ', copyList);
  }, [copyList]);

  const handleMoveToCopyList = (hashtag) => {
    setCopyList([title, hashtag]);
    deleteHashtag(title, hashtag);
  };

  const handleMoveAllToCopyList = () => {
    console.log('handleMoveAllToCopyList');
    addAllHashtags(title);
  };

  return (
    <div className="mt-5 flex flex-col">
      <div className="my-4 flex items-center">
        <div className="w-1/3"></div>
        <h2 className="w-full text-center text-xl font-extrabold">🚩{title}</h2>
        <div className="mr-6 flex w-1/3 justify-end">
          <button
            className="mr-[5%] mt-2 cursor-pointer rounded-md bg-[#2f2924] px-4 py-2 font-semibold text-white"
            onClick={handleMoveAllToCopyList}
          >
            전부 넣기
          </button>
        </div>
      </div>
      <div className="inner-background">
        <div className="min-h-40 py-4">
          {hashtagList.map((hashtag, index) => (
            <button
              key={index}
              className="m-1 mx-2 h-fit rounded-lg bg-[#2f2924] p-2 font-semibold text-white"
              onClick={() => handleMoveToCopyList(hashtag)}
            >
              #{hashtag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HashtagBox;
