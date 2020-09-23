import React, { Component } from 'react';

class Header extends Component {

    handleInput = (event) => {
        this.props.message(event.target.value)
    }

    render() {
        return (
            <div className="header">
                <h2>{this.props.text}</h2>
                <input type="text" placeholder="Search by title..." className="search-input" onChange={this.handleInput}></input>
            </div>
        );
    }
}

export default Header;