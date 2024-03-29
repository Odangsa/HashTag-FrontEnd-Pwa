import { Dropzone, FileMosaic } from '@files-ui/react';
import * as React from 'react';

const BASE_URL = 'https://www.myserver.com';

export default function ImageUploader() {
  const [extFiles, setExtFiles] = React.useState([]);

  const updateFiles = (incommingFiles) => {
    console.log('incomming files', incommingFiles);
    setExtFiles(incommingFiles);
  };
  const onDelete = (id) => {
    setExtFiles(extFiles.filter((x) => x.id !== id));
  };
  const handleStart = (filesToUpload) => {
    console.log('advanced demo start upload', filesToUpload);
  };
  const handleFinish = (uploadedFiles) => {
    console.log('advanced demo finish upload', uploadedFiles);
  };
  const handleAbort = (id) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: 'aborted' };
        } else return { ...ef };
      }),
    );
  };
  const handleCancel = (id) => {
    setExtFiles(
      extFiles.map((ef) => {
        if (ef.id === id) {
          return { ...ef, uploadStatus: undefined };
        } else return { ...ef };
      }),
    );
  };
  return (
    <>
      <h4 className="my-4 ml-[10.3vw] text-2xl font-bold">Image</h4>
      <div className="flex flex-col items-center justify-center">
        <Dropzone
          onChange={updateFiles}
          minHeight="30vh"
          value={extFiles}
          footer={false}
          header={false}
          accept="image/*, video/*"
          maxFiles={1}
          label="사진을 업로드해주세요"
          uploadConfig={{
            // autoUpload: true
            url: BASE_URL + '/file',
            cleanOnUpload: true,
          }}
          onUploadStart={handleStart}
          onUploadFinish={handleFinish}
          fakeUpload
          style={{
            width: '80vw',
            backgroundColor: '#EEE4D2',
            border: 'solid 2px #e0e0e0',
          }}
        >
          {extFiles.map((file) => (
            <FileMosaic
              {...file}
              key={file.id}
              onDelete={onDelete}
              onAbort={handleAbort}
              onCancel={handleCancel}
              backgroundBlurImage={false}
              alwaysActive
              preview
              style={{
                width: '80dvw',
                height: '400px',
                backgroundImage: 'none',
                backgroundColor: 'transparent',
              }}
            />
          ))}
        </Dropzone>
      </div>
    </>
  );
}
