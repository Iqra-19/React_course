import { useState } from 'react'

import './App.css'
import Without from './without'
import With from './With'
import Search from './Search'
import Parent_App from './React.memo/Parent_App'

function App() {
  return (
    <>

      <Without />
      <hr />
      <With />
      <hr />
      <Search />
      <hr />
      {console.log("===============")}
      <Parent_App />

    </>
  )
}

export default App


/* 

Mini Challenge (Highly Recommended)

Build this yourself without looking at the solution.

Requirements

Create a Product Store.

State
const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 30000 },
    { id: 3, name: "Keyboard", price: 1200 },
    { id: 4, name: "Mouse", price: 500 }
]);

const [search, setSearch] = useState("");
const [theme, setTheme] = useState("light");
Features

✅ Search products

Laptop
Phone
Keyboard
Mouse

✅ Toggle theme

Light ↔ Dark

✅ Delete product

Rules
ProductList must use React.memo.
Search filtering must use useMemo.
Delete function must use useCallback.
Changing theme must not re-render ProductList.
Typing in search should re-render ProductList.
Deleting a product should re-render ProductList.

If you can build this from scratch without help, you've genuinely understood the concepts—not just memorized them.

*/
