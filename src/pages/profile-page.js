import React, { Component } from 'react';

class ProfilePage extends Component {
    render() {
        let response = this.props.history.location.state;
        console.log(response)
        return (
            <div>
                <h2>Profile Page!</h2>
                <h3>{response.name}</h3>
            </div>
        );
    }
}

export default ProfilePage;