import React from 'react'

function ProductList( { products, onDelete } ) {
  
    console.log("Product List Component Render")
        // console.log("products =", products);

    return (
    <div>
        <h2>Product List</h2>
        <table border = "1px solid">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                { products.map( (product) => (
                    <tr key={product.id}> 
                        <td> {product.id} </td>
                        <td> {product.name} </td>
                        <td>
                            <button onClick={ ()=> onDelete(product.id) }> Delete </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    </div>
  ) 
}

export default React.memo(ProductList)