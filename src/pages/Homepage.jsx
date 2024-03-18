import Navbar from '../components/home/Navbar.jsx';
import RealtimePlaceSearch from '../components/home/PlaceSearch.jsx';
import MyFilePond from '../components/home/UploadImage.jsx';

const HomePage = () => {
  return (
    <div className="bg-slate-500">
      <Navbar />
      <MyFilePond />
      <RealtimePlaceSearch />
    </div>
  );
};

export default HomePage;
