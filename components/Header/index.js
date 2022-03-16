
import React, { useState, useEffect } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState();
  
  const modeChange = () => {
    if(isDarkMode === false){
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
      localStorage.theme = "dark"
    }
    else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
      localStorage.theme = "light"
    }
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme")
    if(userTheme === 'dark'){
      setIsDarkMode(true)
      document.documentElement.classList.add('dark')
    }
    else {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    }
  }, [])
  
  
  return (
    <header className="static rounded-2xl shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl m-3 md:m-6 px-4 py-2 md:px-8 md:py-4">
        <nav className="flex w-full items-center justify-between">
            <p className="text-lg md:text-2xl font-extrabold">Where In The World?</p>
            <button className="w-12 h-12 shadow-light-neumorphism-xl dark:shadow-dark-neumorphism-xl rounded-lg flex justify-center items-center hover:shadow-light-neumorphism-l active:shadow-light-inner-neumorphism-l dark:hover:shadow-dark-neumorphism-l dark:active:shadow-dark-inner-neumorphism-l" onClick={modeChange}>
              {isDarkMode ? <HiMoon role={"article"} size={'2rem'} className="fill-current"/> : <HiSun role={"article"} size={'2rem'} className="fill-current"/>}
            </button>
        </nav>
    </header>
  )
}
export default Header