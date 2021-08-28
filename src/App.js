import logo from './logo.svg';
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
          <p>
          <code>{NavBar}</code>
          </p>

          <div class="navbar">


        <a href="#" class="navbar.active">Home</a>
        <a href="#">Link</a>
        <a href="#">Link</a>
        <a href="#" class="navbar.right">Link</a>
          <a>Hello Wardu</a>
        </div>
  
          
        </a>
        <ToogleButton onChangeToActive={() => setDarkMode(true)} onChangeToInactive={() => setDarkMode(false)}></ToogleButton>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
