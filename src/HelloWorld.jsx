import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <h1>Hello, Welcome to {this.props.name}'s site !</h1>
        );
    }
}
export default HelloWorld;
