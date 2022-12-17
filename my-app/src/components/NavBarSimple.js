import React, { Component } from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimple extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            buttonText: "Log In",
        };
    }

    handleclick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log In" ? "Log out" : "Log In",
        }), () => console.log(this.state.message))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleclick()}>{this.state.buttonText}</button>
                </div>
            </div>
        )
    }
}

export default  NavBarSimple;