import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h2>News Portal</h2>
                <input type="text" placeholder="Search by title..." className="search-input"></input>
            </div>
        );
    }
}

export default Header;