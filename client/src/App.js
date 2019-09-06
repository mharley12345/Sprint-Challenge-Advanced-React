import React from 'react'
import Players from './Components/PlayerCards'
import useDarkMode from './Hooks/useDarkMode'
import './App.css'

const App = () =>{
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
return (
  <>
  <div className="dark-mode__toggle">
  <button
    onClick={toggleMode}
    className={darkMode ? 'toggle toggled' : 'toggle'}
  />
  
</div>
<Players />
</>
)
}

export default App