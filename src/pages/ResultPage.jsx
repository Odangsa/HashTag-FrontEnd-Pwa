// ResultPage.js
import logo from '../assets/icon-256x256.png';
import '../components/result/App.css';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getHashtagList } from '../services/resultApi';
import HashtagBox from '../components/result/HashtagBox';
import Group from '../components/result/Group';
import useCopyStore from '../store/useCopyStore';

const ResultPage = () => {
  const userId = useParams().userId;
  const { hashtagList, setHashtagList } = useCopyStore();

  const { isLoading, error } = useQuery({
    queryKey: ['result', userId],
    queryFn: async () => {
      const data = await getHashtagList(userId);
      setHashtagList(data.results);
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error...</div>;
  }

  return (
    <div className="App">
      <div className="navbar">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <Group />
      <div className="h-[calc(100dvh-350px)] overflow-y-scroll">
        {hashtagList.map((hashtag, index) => (
          <HashtagBox key={index} hashtag={hashtag} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
