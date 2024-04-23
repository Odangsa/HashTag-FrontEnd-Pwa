import { create } from 'zustand';

const InputStore = create((set) => ({
  imageData: [],
  address: {
    country: '',
    state: '',
    city: '',
    street: '',
    zipcode: '',
    details: '',
  },
  test: '',
  setTest: (test) => set((state) => ({ test })),
  setAddress: (address) => set((state) => ({ address })),
  setImageData: (imageData) => set((state) => ({ imageData })),
}));

export default InputStore;
