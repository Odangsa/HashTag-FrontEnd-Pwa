import React, { useCallback, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import InputStore from '../../store/InputStore';

export default function ImageUploader() {
  const { imageData, setImageData } = InputStore();

  const onDrop = useCallback(
    (file) => {
      console.log('file: ', file);
      const filesWithPreview = {
        file,
        preview: URL.createObjectURL(file[0]),
        id: file[0].name,
      };
      setImageData([filesWithPreview]);
    },
    [setImageData],
  );

  const onDelete = (id) => {
    setImageData(imageData.filter((file) => file.id !== id));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
    multiple: false,
  });

  useEffect(() => {
    console.log('imageData', imageData);
  }, [imageData]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h4 className="my-4 w-full px-14 text-left text-2xl font-bold">Image</h4>
      <div
        {...getRootProps()}
        className="relative flex h-[40vh] w-[80vw] cursor-pointer flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-[#EEE4D2] p-4"
      >
        <input {...getInputProps()} />
        {imageData.length === 0 ? (
          <p>사진을 업로드해주세요</p>
        ) : (
          imageData.map((file) => (
            <div key={file.id} className="relative size-full">
              <img
                src={file.preview}
                alt={file.name}
                className="size-full object-cover"
                onLoad={() => URL.revokeObjectURL(file.preview)}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(file.id);
                }}
                className="absolute right-2 top-2 rounded bg-red-500 p-1 text-white"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
