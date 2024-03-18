import React, {Component} from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterableProductTable extends Component {

    state = {
        filterText: '',
        inStockOnly: false
    };

    handleFilterTextChange = (text) => {
        this.setState({
            filterText: text
        });
    };

    handleCheckBoxChange = (value) => {
        this.setState({
            inStockOnly: value
        })
    };

    render() {
        return (
            <>
                <SearchBar filterText={this.state.filterText}
                           inStockOnly={this.state.inStockOnly}
                           handleFilterTextChange={this.handleFilterTextChange}
                           handleCheckBoxChange={this.handleCheckBoxChange}/>
                <ProductTable product={this.props.product} filterText={this.state.filterText}
                              inStockOnly={this.state.inStockOnly}/>
            </>
        );
    }

}

export default FilterableProductTable;
