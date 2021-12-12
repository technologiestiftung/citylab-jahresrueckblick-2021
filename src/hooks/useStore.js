import create from 'zustand'

const useStore = create((set, get) => ({
  lang: 'de'
}))

export const useImageGroupStore = create((set, get) => ({
  active: 'assets/images/20210922_CityLAB_1533.jpg',
  setActive: (active) => {
    set(() => ({active}))
  }  
}))


export default useStore;