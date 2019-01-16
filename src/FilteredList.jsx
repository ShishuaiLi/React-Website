import React, { Component } from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    // The state is just a list of key/value pair (like a hashmap)
    this.state = {
      copyItems:this.props.items.slice(),
      search: "",
      type: [],
      btnTitle: "Type",
      org: [],
      btnTitle2: "Organic",
      sortOrder: 0,
      btnTitle3: "Sort By"
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({search: event.target.value.toLowerCase()});
  }
  filterItem = (item) => {
    // Checks if the current search term is contained in this item
    if (this.state.type.length==0 && this.state.type.length==0) {
      return item.name.toLowerCase().search(this.state.search) !== -1;}
    else if (this.state.type.length==0) {
      return (item.name.toLowerCase().search(this.state.search) !== -1 &&
        this.state.org==item.org);
    }
    else if (this.state.org.length==0) {
      return (item.name.toLowerCase().search(this.state.search) !== -1 &&
        this.state.type==item.type);}
    else {
      return (item.name.toLowerCase().search(this.state.search) !== -1 &&
        this.state.type==item.type && this.state.org==item.org);}
  }
  dropdownSelect= (eventKey,event)=>{
    if (eventKey!="All") {
      this.setState({
        type: [eventKey],
        btnTitle: eventKey
      });
    } else {
      this.setState({
        type: [],
        btnTitle: eventKey
      });
    }
  }

  dropdownSelect2= (eventKey,event)=>{
    if (eventKey!="All") {
      this.setState({
        org: [eventKey],
        btnTitle2: eventKey
      });
    } else {
      this.setState({
        org: [],
        btnTitle2: eventKey
      });
    }
  }

  dropdownSelect3= (eventKey,event)=>{
    if (eventKey==="Price Ascending") {
      this.setState({
        sortOrder: 1,
        btnTitle3: eventKey
      });
      this.state.copyItems.sort((a,b)=>(a.price - b.price));
    } else if (eventKey==="Price Descending") {
      this.setState({
        sortOrder: -1,
        btnTitle3: eventKey
      });
      this.state.copyItems.sort((a,b)=>(b.price - a.price));
    }

  }
  onClear = (event) => {
    this.setState({
      copyItems: this.props.items.slice(),
      search: "",
      type: [],
      btnTitle: "Type",
      org: [],
      btnTitle2: "Organic",
      sortOrder: 0,
      btnTitle3: "Sort By"
      });
      document.getElementById('search').value = "";;
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>

        <DropdownButton id="typeDropdown" title={this.state.btnTitle}>
          <MenuItem eventKey="All" onSelect={this.dropdownSelect}>All</MenuItem>
          <MenuItem eventKey="Fruit" onSelect={this.dropdownSelect}>Fruit</MenuItem>
          <MenuItem eventKey="Vegetable" onSelect={this.dropdownSelect}>Vegetable</MenuItem>
        </DropdownButton>

        <DropdownButton id="orgDropdown" title={this.state.btnTitle2}>
          <MenuItem eventKey="All" onSelect={this.dropdownSelect2}>All</MenuItem>
          <MenuItem eventKey="Yes" onSelect={this.dropdownSelect2}>Yes</MenuItem>
          <MenuItem eventKey="No" onSelect={this.dropdownSelect2}>No</MenuItem>
        </DropdownButton>

        <DropdownButton id="sortby" title={this.state.btnTitle3}>
          <MenuItem eventKey="Price Ascending" onSelect={this.dropdownSelect3}>Price Ascending</MenuItem>
          <MenuItem eventKey="Price Descending" onSelect={this.dropdownSelect3}>Price Descending</MenuItem>
        </DropdownButton>

        <input id='search' type="text" placeholder="Search" onChange={this.onSearch} />

        <button onClick={this.onClear}>Clear All Filters</button>
        <table id='products'>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Type</th>
            <th>Organic</th>
            <th>Price per lb.</th>
          </tr>
          <List className='mylist' items={this.state.copyItems.filter(this.filterItem)} />
        </table>
      </div>
    );
  }
}
export default FilteredList;
