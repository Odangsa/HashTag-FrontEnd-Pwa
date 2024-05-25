import { create } from 'zustand';

const InputStore = create((set) => ({
  imageData: [],
  setImageData: (imageData) => set(() => ({ imageData })),
}));

export default InputStore;
