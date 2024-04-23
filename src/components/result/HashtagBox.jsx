// HashtagBox.js
import './App.css';
import useCopyStore from '../../store/useCopyStore';

const HashtagBox = ({ hashtag }) => {
  const { setCopyList, deleteHashtag, addAllHashtags } = useCopyStore();
  const title = hashtag.title;
  const hashtagList = hashtag.hashtagList;

  const handleMoveToCopyList = (hashtag) => {
    setCopyList([title, hashtag]);
    deleteHashtag(title, hashtag);
  };

  const handleMoveAllToCopyList = () => {
    console.log('handleMoveAllToCopyList');
    addAllHashtags(title);
  };

  return (
    <div className="flex flex-col">
      <div className="my-4 flex items-center">
        <div className="w-1/3"></div>
        <h2 className="w-full text-center text-xl font-extrabold">🚩{title}</h2>
        <div className="mr-6 flex w-1/3 justify-end">
          <button className="CopyButton" onClick={handleMoveAllToCopyList}>
            전부 넣기
          </button>
        </div>
      </div>
      <div className="inner-background">
        <div className="min-h-40 py-4">
          {hashtagList.map((hashtag, index) => (
            <button
              key={index}
              className="m-1 mx-2 h-fit rounded-lg bg-[#2f2924] p-2 text-white"
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
