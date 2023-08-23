'use client'
import darkIcon from '@/public/svg/dark-mode.svg'
import lightIcon from '@/public/svg/light-mode.svg'
import useTheme from '../contexts/useTheme'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const ThemeSwitcherButton = () => {
  const darkMode = useTheme((state) => state.darkMode)
  const changeMode = useTheme((state) => state.changeMode)

  const getIcon = () => {
    return darkMode === true ? darkIcon : lightIcon
  }

  useEffect(() => {
    const htmlEl = document.getElementById('html')
    if (darkMode) {
      htmlEl?.classList.add('dark')
    } else {
      htmlEl?.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const preferedColorScheme = window.matchMedia('(prefers-color-scheme: dark)')
    const handleColorSchemeChange = () => {
      changeMode()
    }

    preferedColorScheme.addEventListener('change', handleColorSchemeChange)
    return () => {
      preferedColorScheme.removeEventListener('change', handleColorSchemeChange)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div className=''>
      <button onClick={changeMode}>
        <Image src={getIcon()} alt={darkMode === true ? "dark mode" : "light mode"} width={40} height={40} />
      </button>
    </div>
  )
}

export default ThemeSwitcherButton

