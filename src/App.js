import logo from './logo.svg';
import './App.css';
import './Global.css';
import ToogleButton from './components/ToggleButton';
import  {ThemeProvider} from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import {useState} from "react"
import { useStickyState } from './hooks/StickyState';
import navbar from './components/CSS/navbar';





function App() {
  
  const [darkMode, setDarkMode]  = useStickyState(true);

  const darkToggler = () => {
    darkMode === true ? setDarkMode(false) : setDarkMode(true);
  };

  return (
    <ThemeProvider theme={darkMode === false ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
           
          
        </a>
        <ToogleButton onChangeToActive={() => setDarkMode(true)} onChangeToInactive={() => setDarkMode(false)}></ToogleButton>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
