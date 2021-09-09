import './App.css';
import './Global.css';
import ToggleButton from './components/base/ToggleButton';
import  {ThemeProvider} from 'styled-components';
import { darkTheme, GlobalStyles, lightTheme } from './themes';
import { useStickyState } from './hooks/StickyState';
import NavBar from './components/navbar/NavBar';
import NavBarItem from './components/navbar/NavBarItem';
import TextField from './components/base/TextField';





function App() {
  
  const [darkMode, setDarkMode]  = useStickyState(true);

  function validate(text){
    if(text.trim() === "")
      return true;
    const regEx = new RegExp("^\\d+$");
    if(regEx.exec(text) != null)
      return true;
    else
      return false;
  }

  return (
    <ThemeProvider theme={darkMode === false ? lightTheme : darkTheme}>
      <GlobalStyles />
    <div className="App">
        <NavBar>
          <NavBarItem target="/">Home</NavBarItem>
          <NavBarItem target="/settings" right>Settings</NavBarItem>
        </NavBar>
        <ToggleButton onChangeToActive={() => setDarkMode(false)} onChangeToInactive={() => setDarkMode(true)} startState={darkMode} round/>
        <TextField onChange={(text) => {console.log(text);}} validate={validate}/>
    </div>
    </ThemeProvider>
  );
}

export default App;
