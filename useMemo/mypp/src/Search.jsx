import {useState, useMemo} from 'react'


export default function Search() {
  
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState('light');
    const [sortOrder, setSortOrder] = useState("lowToHigh");
    
    const [products, setProducts] = useState( [
        { id: 1, name: "iPhone", price: 150000 },
        { id: 2, name: "Samsung", price: 100000 },
        { id: 3, name: "Laptop", price: 55000 },
        { id: 4, name: "Mouse", price: 1500 },
        { id: 5, name: "Keyboard", price: 500 }
    ] )
   
    const filterProducts = useMemo( ()=> {
        console.log("Filtering Products...");
        return products.filter( (product) => 
            product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        );
    }, [products, search])

    const sortProducts = useMemo( () => {
        console.log("Sorting....");

        const copiedProducts = [...filterProducts];

        sortOrder === "lowToHigh" 
            ? copiedProducts.sort( (a,b) => a.price - b.price )
            : copiedProducts.sort( (a,b) => b.price - a.price )

        return copiedProducts;

    }, [filterProducts, sortOrder] ) 
  
    return (
    <div>
         <p> <strong>Theme:</strong> {theme} </p>
         <button onClick={ () => setTheme( theme === "light" ? "dark" : "light" ) }> 
            Change Theme 
        </button>

         <p> <strong>Sort Order:</strong> {sortOrder} </p>
         <button onClick={ () => setSortOrder( sortOrder === "lowToHigh" ? "highTolow" : "lowToHigh" ) }> 
            Change Order 
        </button>

        <input 
            type="text" 
            placeholder='Search Product'
            value={search}
            onChange={ (e) => setSearch(e.target.value) }
        />

        <h2> Filtering products </h2>
        <ul>
            {filterProducts.map(product => (
                <li key={product.id}> 
                    {product.name} 
                </li>
            ))}
        </ul>

        <h2> Sorting products </h2>
        <ul>
            {sortProducts.map(product => (
                <li key={product.id}>
                    {product.name}
                </li>
            ) )}
        </ul>

    </div>
  )
}
