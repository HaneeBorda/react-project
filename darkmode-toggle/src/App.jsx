import { useEffect, useState } from 'react'
import './App.css'
import { Themprovider } from './contexts/Theme'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/Card'

function App() {
  const [themeMode ,setthememode] = useState("light")

  const lightTheme = () => {
    setthememode("light")
  }
  const darkTheme = () => {
    setthememode("dark")
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light" , "dark")
    document.querySelector('html').classList.add(themeMode)
    
  }, [themeMode]);

  return (
    <Themprovider value={{themeMode , lightTheme , darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </Themprovider> 
  )
}

export default App
