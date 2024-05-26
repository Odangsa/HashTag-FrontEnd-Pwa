import InputStore from '../../store/InputStore';
import { api } from '../../lib/api';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export const SubmitBtn = () => {
  const { imageData } = InputStore();
  console.log('imageData: ', imageData);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append('picture', imageData[0].file[0]);
    console.log('formData: ', formData);

    const newUUID = uuidv4().replace(/-/g, '');

    for (const x of formData) {
      console.log(x);
    }

    try {
      navigate(`/result/${newUUID}`);
      console.log('보내는 중');
      const response = await api.post(`/${newUUID}/hashtag`, formData);
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
