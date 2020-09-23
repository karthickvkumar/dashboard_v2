import React, { Component } from 'react';
import Header from '../components/header';
import Content from '../components/content';
// Passing Data from Child to Parent - Using Callback()

class HomePage extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}

export default HomePage;