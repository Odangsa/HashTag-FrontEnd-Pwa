import Navbar from '../components/home/Navbar.jsx';
import RealtimePlaceSearch from '../components/home/PlaceSearch.jsx';
import ImageUploader from '../components/home/UploadImage.jsx';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <ImageUploader />
      <RealtimePlaceSearch />
    </div>
  );
};

export default HomePage;
