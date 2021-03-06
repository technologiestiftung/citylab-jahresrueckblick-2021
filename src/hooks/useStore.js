import create from 'zustand'

const useStore = create((set, get) => ({
  lang: 'de',
  setLang: (lang) => {
    set(() => ({lang}))
  },
  activeTopic: '1.0',
  setActiveTopic: (activeTopic) => {
    set(() => ({activeTopic}))
  },
}))

export const useImageGroupStore = create((set, get) => ({
  active: '1.1',
  setActive: (active) => {
    set(() => ({active}))
  },
}))


export default useStore;