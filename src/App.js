import './App.css';
import './components/Kek/navbar.css'
import './Global.css';
import ToogleButton from './components/ToggleButton';
import  {ThemeProvider} from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import {useState} from "react"
import { useStickyState } from './hooks/StickyState';
import {NavBar} from './components/Kek/navbar.js';




function App() {
  
  const [darkMode, setDarkMode]  = useStickyState(true);

  const darkToggler = () => {
    darkMode === true ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    
    <ThemeProvider theme={darkMode === false ? lightTheme : darkTheme}>
      <GlobalStyles /> 
      
      <NavBar />
      
    <div className="App">
      <header className="App-header">
        
     
        
        <ToogleButton onChangeToActive={() => setDarkMode(true)} onChangeToInactive={() => setDarkMode(false)}></ToogleButton>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
