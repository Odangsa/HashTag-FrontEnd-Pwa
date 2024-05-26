// Group.js
import './App.css';
import useCopyStore from '../../store/useCopyStore';
import { toast } from 'react-toastify';

const CopyListLayout = () => {
  const { copyList, deleteCopyList, addHashtag } = useCopyStore();

  const handleCopy = async () => {
    const copyTarget = copyList.map((hashtag) => `#${hashtag[1]}`).join(' ');
    console.log('copyTarget: ', copyTarget);
    try {
      await navigator.clipboard.writeText(copyTarget);
      toast('복사 성공!', { type: 'success' });
    } catch (error) {
      console.error('Failed to copy: ', error);
    }
  };

  const handleCancelHashtag = (hashtag) => {
    deleteCopyList(hashtag);
    addHashtag(hashtag[0], hashtag[1]);
  };

  return (
    <div>
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
      <div className="flex justify-end">
        <button
          className="mr-[5%] mt-5 rounded-md bg-white px-3 py-2 font-semibold text-black"
          onClick={handleCopy}
        >
          COPY
        </button>
      </div>
    </div>
  );
};

export default CopyListLayout;
