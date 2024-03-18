import React, {Component} from "react";

class SearchBar extends Component{

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        return (
            <>
                <input type="text"
                       placeholder="Search..."
                       value={filterText}
                       onChange={(e => this.props.handleFilterTextChange(e.target.value))}/>
                <p>
                <input type="checkbox"
                       checked={inStockOnly}
                       onChange={(e => this.props.handleCheckBoxChange(e.target.checked))}/>
                {' '}
                Only show products in stock
                </p>
            </>
        );
    }
}

export default SearchBar;