import React, { useState } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
// import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MyFilePond() {
  const [files, setFiles] = useState([]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleProcessFile = (error, file) => {
    if (error) {
      console.error(error);
      return;
    }
    // 파일 미리보기 URL 추가
    setFiles((prevFiles) => [...prevFiles, file.file]);
  };

  return (
    <div>
      <FilePond
        allowMultiple={true}
        onprocessfile={handleProcessFile}
        server="/api/upload"
        name="files"
      />
      <Slider {...settings}>
        {files.map((file, index) => (
          <div key={index}>
            <img src={URL.createObjectURL(file)} style={{ width: '100%' }} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MyFilePond;
