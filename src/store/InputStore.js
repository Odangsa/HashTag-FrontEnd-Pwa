import { create } from 'zustand';

const InputStore = create((set) => ({
  imageData: null,
  address: {
    country: '',
    state: '',
    city: '',
    street: '',
    zipcode: '',
    details: '',
  },
  setAddress: (address) => set((state) => ({ address })),
  setImageData: (imageData) => set((state) => ({ imageData })),
}));

export default InputStore;
