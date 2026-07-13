import {useState, createContext} from 'react'

export const UserContext = createContext();

export default function UserProvider( {children} ) {
  
    const [user, setUser] = useState("Iqrah");
  
    return (
    <UserContext.Provider  value={{ user, setUser }}>
        {children}
    </UserContext.Provider>
  )
}
