import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Content extends Component {
    navigate() {
        let response = {
            name: 'Mr.John',
            age: 24,
            designation: 'UI developer'
        }
        this.props.history.push('/profile', response)
    }

    render() {
        return (
            <div className="content">
                <h2>{this.props.keyword}</h2>
                <button onClick={() => this.navigate()}>Go To Profile Page</button>
            </div>
        );
    }
}

export default withRouter(Content);