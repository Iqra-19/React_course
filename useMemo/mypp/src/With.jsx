import React from 'react'

import { useState, useMemo } from 'react'

export default function With() {
  
    const [count, setCount] = useState(0);
    const [theme, setTheme] = useState('light');

    const square = useMemo( () => {
        console.log("Calculating...")
        return count * count;

    }, [count] );  // execute only when count change
        
    
  
    return (
    <div>
        <h1>With UseMemo</h1>

        <p> <strong>Count:</strong> {count} </p>
        <p> <strong>Theme:</strong> {theme} </p>
        <p> <strong>Square</strong> {square}</p>

        <button onClick={ () => setCount(count+1) } > 
            Increment 
        </button>

        <button onClick={ () => setTheme( theme === "light" ? "dark" : "light" ) }> 
            Change Theme 
        </button>
    </div>
  )

}