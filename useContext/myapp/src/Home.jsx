import {useContext} from 'react'
import {UserContext} from './context/UserContext'
import { ThemeContext } from './context/ThemeContext';

export default function Home() {
  
  const {user } = useContext(UserContext);
  const {theme} = useContext(ThemeContext);
  const {toggleTheme} = useContext(ThemeContext);
    return (
    <div className= {theme}>
        <h2>User: {user}</h2>
        <h3>Theme: {theme}</h3>

        <button onClick={ toggleTheme }>  Toggle theme</button>
    </div>
  )
}
