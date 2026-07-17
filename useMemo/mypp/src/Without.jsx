import {useState} from 'react'

function without() {
  
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    function square(){
        
        console.log("Calculating square...")
        return count * count;
    }
  
    return (
    <div>
        <h1>Without UseMemo</h1>
        <p> <strong>Count:</strong> {count} </p>
        <p> <strong>Theme:</strong> {theme} </p>
        <p> <strong>Square</strong> {square()}</p>

        <button onClick={ () => setCount(count+1) } > Increment </button>

        <button onClick={ () => setTheme(theme === "light" ? "dark" : "light" ) } > Change Theme </button>

    </div>
  )
}

export default without;