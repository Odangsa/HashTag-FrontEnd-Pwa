import GoogleMapComponent from '../components/home/GoogleMapComp.jsx';
import Navbar from '../components/home/Navbar.jsx';
import { SubmitBtn } from '../components/home/Submit.jsx';
import ImageUploader from '../components/home/UploadImage.jsx';

const HomePage = () => {
  return (
    <div className="flex h-screen flex-col">
      <div className="h-dvh">
        <Navbar />
        <ImageUploader />
        {/* <RealtimePlaceSearch /> */}
        <GoogleMapComponent />
      </div>
      <SubmitBtn />
    </div>
  );
};

export default HomePage;
