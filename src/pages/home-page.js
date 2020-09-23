import React, { Component } from 'react';
import Header from '../components/header';
import Content from '../components/content';


class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Welcome, Kumar',
            info: 'Home Page!',
            keyword: ''
        }
    }
    receiveMessage = (text) => {
        console.log(text)
        this.setState({
            keyword: text
        })
    }

    render() {
        return (
            <div>
                <Header {...this.state} welcomeNote={this.state.text}
                    message={this.receiveMessage}></Header>
                <Content keyword={this.state.keyword}></Content>
            </div>
        );
    }
}

export default HomePage;