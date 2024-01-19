import React, { Component, createRef } from 'react';

//ref directly dom ke manipulate korte sahajjo ko re

export default class UserForm extends Component {
    constructor(props) {
        super(props);
        this.userNameRef = createRef(); //just username er jonno ref create korchi
        this.state = {};
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.userNameRef.current.value);
        this.userNameRef.current.style.color = 'green';
    };
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-field">
                    <label htmlFor="userName">UserName : </label>
                    <input type="text" id="userName" ref={this.userNameRef} /> {/**ref ta link ko re dicchi */}
                </div>
                <div className="form-field">
                    <label htmlFor="password">Password : </label>
                    <input type="password" id="password" />
                </div>
                <button type="submit">Register</button>
            </form>
        );
    }
}
