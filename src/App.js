import logo from './logo.svg';
import './App.css';
import './Global.css';
import ToggleButton from './components/ToggleButton';
import  {ThemeProvider} from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import { useStickyState } from './hooks/StickyState';





function App() {
  
  const [darkMode, setDarkMode]  = useStickyState(true);

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
        <ToggleButton onChangeToActive={() => setDarkMode(false)} onChangeToInactive={() => setDarkMode(true)} startState={darkMode}></ToggleButton>
      </header>
    </div>
    </ThemeProvider>
  );
}

export default App;
