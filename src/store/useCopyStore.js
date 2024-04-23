import { create } from 'zustand';

const useCopyStore = create((set) => ({
  copyList: [],
  hashtagList: [],
  setHashtagList: (newHashtagList) => set({ hashtagList: newHashtagList }),
  setCopyList: (newHashtag) =>
    set((state) => ({ copyList: [...state.copyList, newHashtag] })),
  resetCopyList: () => set({ copyList: [] }),
  deleteCopyList: (hashtag) =>
    set((state) => ({
      copyList: state.copyList.filter((item) => item !== hashtag),
    })),
  addHashtag: (title, hashtag) =>
    set((state) => ({
      hashtagList: state.hashtagList.map((item) =>
        item.title === title
          ? { ...item, hashtagList: [...item.hashtagList, hashtag] }
          : item,
      ),
    })),
  addAllHashtags: (title) =>
    set((state) => {
      console.log('addAllHashtags');
    }),
  deleteHashtag: (title, hashtag) =>
    set((state) => ({
      hashtagList: state.hashtagList.map((item) =>
        item.title === title
          ? {
              ...item,
              hashtagList: item.hashtagList.filter((tag) => tag !== hashtag),
            }
          : item,
      ),
    })),
}));

export default useCopyStore;
