

import logo from '../logo.svg';
import '../App.css';
import React from 'react';
import ReactDOM from 'react-dom';

// Slide 42, 50, and 51
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', inStockOnly: false};
        
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(filterText) {
        this.setState({filterText: filterText});
    }
    
    handleInStockChange(inStockOnly) {
        this.setState({inStockOnly: inStockOnly});
    }
    
    render () {
        return (
            <div>
              <SearchBar
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={this.handleFilterTextChange}
                onInStockChange={this.handleInStockChange}
              />
              <ProductTable
                products={this.props.products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}
              />
            </div>
        );
    }
}

// Slide 43, 52, and 53
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    
    render() {
        return (
            <form>
              <input
                type="text"
                placeholder="Search..."
                value={this.props.filterText}
                onChange={this.handleFilterTextChange}
              />
              <p>
                <input
                  type="checkbox"
                  checked={this.props.inStockOnly}
                  onChange={this.handleInStockChange}
                />
                {' '}Only show products in stock
              </p>
            </form>
        );
    }
}

// Slide 44, 45, and 55
class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows = [];
        let lastCategory = null;
        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                  <ProductCategoryRow
                    category={product.category}
                    key={product.category}
                  />
                );
            }
            rows.push(
              <ProductRow
                product={product}
                key={product.name}
              />
            );
            lastCategory = product.category;
        });
        return (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
        );
    }
}

// Slide 46
class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name :  <span style={{color: 'red'}}>{product.name}</span>;
        return (
            <tr>
              <td>{name}</td>
              <td>{product.price}</td>
            </tr>
        );
    }
}

// Slide 47
class ProductCategoryRow extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
              <th colSpan="2">{category}</th>
            </tr>
        );
    }
}

export default FilterableProductTable;