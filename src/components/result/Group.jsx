// Group.js
import './App.css';
import useCopyStore from '../../store/useCopyStore';

const Group = () => {
  const { copyList, deleteCopyList, addHashtag } = useCopyStore();

  const handleCancelHashtag = (hashtag) => {
    deleteCopyList(hashtag);
    addHashtag(hashtag[0], hashtag[1]);
  };

  return (
    <div className="inner-background">
      <div className="min-h-48 w-full bg-primary">
        {copyList.length > 0 &&
          copyList.map((hashtag, index) => (
            <button
              key={index}
              className="above-item"
              onClick={() => handleCancelHashtag(hashtag)}
            >
              #{hashtag[1]}
            </button>
          ))}
      </div>
    </div>
  );
};

export default Group;
