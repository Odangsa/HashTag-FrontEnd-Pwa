import InputStore from '../../store/InputStore';
import { api } from '../../lib/api';
import axios from 'axios';

export const SubmitBtn = () => {
  const { address, imageData, test } = InputStore();
  console.log('address, imageData: ', address, imageData);

  const handleSubmit = async () => {
    const formData = new FormData();
    const addressData = JSON.stringify({ test });
    formData.append(
      'place',
      // new Blob([addressData], { type: 'application/json' }),
      test,
    );
    console.log('address: ', test);
    formData.append('picture', imageData[0].file);

    for (const x of formData) {
      console.log(x);
    }

    try {
      const response = await api.post('/1/hashtag', formData);
      console.log('Server response:', response.data);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <button
      onClick={handleSubmit}
      className="rounded-md bg-primary px-4 py-2 font-bold text-black"
    >
      Submit
    </button>
  );
};
