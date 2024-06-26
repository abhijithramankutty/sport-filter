import React from "react";
import ProductCategoryRow from "./ProductCategoryRow";
import ProductRow from "./ProductRow";

const ProductTable = ({product, filterText, inStockOnly}) => {
    const rows = [];
    let lastCategory = null;

    product.forEach(product => {
       if (product.name.indexOf(filterText) === -1) return;
       if (inStockOnly && !product.stocked) return;
       if(lastCategory !== product.category){
          rows.push(
              <ProductCategoryRow category={product.category} key={product.category}/>
          );
       }
       rows.push(
           <ProductRow product={product} key={product.name}/>
       );
       lastCategory = product.category;
    });
    return(
        <table>
           <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
           </thead>
           <tbody>
             {rows}
           </tbody>
        </table>
    )
}
export default ProductTable;