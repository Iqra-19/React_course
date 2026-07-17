import {useState, useMemo, useCallback} from 'react'

import ProductList from './ProductList';

export default function Parent_App() {
  
    const [theme, setTheme] = useState('light');
    const [products, setProducts] = useState([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" },
        { id: 3, name: "Keyboard" }
    ]);

    const memoProducts = useMemo(() => {

        console.log("Creating Products");

        return products;

    }, [products]);

    const handleDelete = useCallback( (id) => {
        setProducts(prev =>
            prev.filter(product => product.id !== id)
        );
    }, []);
  
    return (
    <div>
        <p> <strong>Theme:</strong> {theme} </p>

        <button onClick={ ()=> setTheme(theme === "light" ? "dark" : "light") } > Change Theme </button>

        <ProductList products={products} onDelete={handleDelete} />
    </div>
    
  )
}
