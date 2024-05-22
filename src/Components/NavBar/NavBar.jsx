import React, { Component } from "react";
import './NavBar.css'

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <i >
                        <img src="/logo.svg" alt="logo" />
                    </i>
                </h1>
                <h1 className="text-center text-gray-700">Group SnapChat</h1>
            </nav>
        )
    }
}

export default Navbar