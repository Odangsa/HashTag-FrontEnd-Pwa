import './App.css';
import useCopyStore from '../../store/useCopyStore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const CopyListLayout = () => {
  const { copyList, deleteCopyList, addHashtag } = useCopyStore();

  const handleCopy = async () => {
    const copyTarget = copyList.map((hashtag) => `#${hashtag[1]}`).join(' ');
    console.log('copyTarget: ', copyTarget);

    const fallbackCopyTextToClipboard = (text) => {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        toast('복사 성공!', { type: 'success' });
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
        toast('복사 실패', { type: 'error' });
      }
      document.body.removeChild(textArea);
    };

    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(copyTarget);
      return;
    }

    try {
      await navigator.clipboard.writeText(copyTarget);
      toast('복사 성공!', { type: 'success' });
    } catch (error) {
      console.error('Failed to copy: ', error);
      toast('복사 실패', { type: 'error' });
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
