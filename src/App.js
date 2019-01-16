import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from './HelloWorld';
import FilteredList from './FilteredList';

const produce = [
{name: "Apple", type: "Fruit", org: "Yes", price: 2.99, src: './imgs/img1.jpg'},
{name: "Pineapple", type: "Fruit", org: "No", price: 5.49, src: './imgs/img2.jpg'},
{name: "Banana", type: "Fruit", org: "Yes", price: 0.49, src: "./imgs/img3.jpg"},
{name: "Pear", type: "Fruit", org: "No", price: 1.99, src: "./imgs/img4.jpg"},
{name: "Strawberry", type: "Fruit", org: "Yes", price: 3.99, src: "./imgs/img5.jpg"},
{name: "Orange", type: "Fruit", org: "No", price: 1.99, src: "./imgs/img6.jpg"},
{name: "Lettuce", type: "Vegetable", org: "Yes", price: 0.99, src: "./imgs/img7.jpg"},
{name: "Cucumber", type: "Vegetable", org: "No", price: 1.29, src: "./imgs/img8.jpg"},
{name: "Eggplant", type: "Vegetable", org: "Yes", price: 1.59, src: "./imgs/img9.jpg"},
{name: "Squash", type: "Vegetable", org: "No", price: 1.59, src: "./imgs/img10.jpg"},
{name: "Bell pepper", type: "Vegetable", org: "Yes", price: 1.49, src: "./imgs/img11.jpg"},
{name: "Onion", type: "Vegetable", org: "No", price: 0.79, src: "./imgs/img12.jpg"},

];

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloWorld name={'Shishuai Li'}/>
        <FilteredList items={produce} />
      </div>
    );
  }
}

export default App;
