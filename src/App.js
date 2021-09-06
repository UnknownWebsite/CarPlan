import './App.css';
import './Global.css';
import ToggleButton from './components/base/ToggleButton';
import  {ThemeProvider} from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import { useStickyState } from './hooks/StickyState';
import NavBar from './components/navbar/NavBar';
import NavBarItem from './components/navbar/NavBarItem';





function App() {
  
  const [darkMode, setDarkMode]  = useStickyState(true);

  return (
    <ThemeProvider theme={darkMode === false ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
        <NavBar>
          <NavBarItem target="#">Home</NavBarItem>
          <NavBarItem target="/settings" right>Settings</NavBarItem>
        </NavBar>
        <ToggleButton onChangeToActive={() => setDarkMode(false)} onChangeToInactive={() => setDarkMode(true)} startState={darkMode} round/>
    </div>
    </ThemeProvider>
  );
}

export default App;
