import create from 'zustand'

const useStore = create((set, get) => ({
  lang: 'de'
}))

export const useImageGroupStore = create((set, get) => ({
  active: '1.1',
  setActive: (active) => {
    set(() => ({active}))
  }
}))


export default useStore;