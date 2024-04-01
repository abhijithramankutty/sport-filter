import React, {useState} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

const FilterableProductTable = ({product}) => {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    const handleFilterTextChange = (event) => {
        setFilterText(event.target.value);
    }
    const handleCheckBoxChange = (event) => {
        setInStockOnly(event.target.checked);
    }

    return(
        <>
            <SearchBar filterText={filterText}
                       inStockOnly={inStockOnly}
                       handleFilterTextChange={handleFilterTextChange}
                       handleCheckBoxChange={handleCheckBoxChange}/>
            <ProductTable product={product}
                          filterText={filterText}
                          inStockOnly={inStockOnly}/>
        </>
    )
}
export default FilterableProductTable;