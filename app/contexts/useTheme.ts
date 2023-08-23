import {create} from 'zustand'

type themeState = {
  darkMode : boolean 
  changeMode:() => void
}

const useTheme = create<themeState>((set) => ({
  darkMode:localStorage.getItem('darkMode') === 'true',
  changeMode:()=>{
    set((state) => {
      const newDarkMode = !state.darkMode
      localStorage.setItem('darkMode',newDarkMode.toString())
      return {
        darkMode: newDarkMode
      }
    })
  }
}))

export default useTheme