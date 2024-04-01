const SearchBar = ({filterText, inStockOnly, handleFilterTextChange, handleCheckBoxChange}) => {
    return(
        <>
            <input type="text"
                   placeholder="Search..."
                   value={filterText}
                   onChange={handleFilterTextChange}/>
            <p>
                <input type="checkbox"
                       checked={inStockOnly}
                       onChange={handleCheckBoxChange}/>
                {' '}
                Only show products in stock
            </p>
        </>
    )
}
export default SearchBar;