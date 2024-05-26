// ResultPage.js
import logo from '../assets/icon-256x256.png';
import '../components/result/App.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHashtagList } from '../services/resultApi';
import HashtagBox from '../components/result/HashtagBox';
import useCopyStore from '../store/useCopyStore';
import CopyListLayout from '../components/result/CopyListLayout';
import LoadingPage from './LoadingPage';
import ErrorPage from './ErrorPage';
import { useEffect } from 'react';

const ResultPage = () => {
  const userId = useParams().userId;
  const { hashtagList, setHashtagList } = useCopyStore();

  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem('hashtagList');
    if (data) {
      setHashtagList(JSON.parse(data));
    }
  }, [setHashtagList]);

  const { isLoading, error } = useQuery({
    queryKey: ['result', userId],
    queryFn: async () => {
      const data = await getHashtagList(userId);
      setHashtagList(data.results);
      localStorage.setItem('hashtagList', JSON.stringify(data.results));
      return data;
    },
  });

  console.log('hashtagList: ', hashtagList);

  if (isLoading && hashtagList.length === 0) {
    console.log('isLoading: ', isLoading);
    return <LoadingPage />;
  }

  if (error && hashtagList.length === 0) {
    return <ErrorPage />;
  }

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col">
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" onClick={handleClick} />
      </div>
      <CopyListLayout />
      <div className="h-[calc(100dvh-350px)] overflow-y-scroll">
        {hashtagList.map((hashtag, index) => (
          <HashtagBox key={index} hashtag={hashtag} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
