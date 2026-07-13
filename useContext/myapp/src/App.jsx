import './App.css';
import UserProvider from './context/UserContext';
import ThemeProvider from './context/ThemeContext';
import Home from './Home';

function App() {


  return (
    <>
      <UserProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </UserProvider>
    </>
  )
}

export default App;
