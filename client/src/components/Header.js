﻿import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import linkedin-button from '../assets/logo.png';


class Header extends Component {

    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li><a href="/auth/linkedin"><img src={logo} className="App-logo" alt="linkedin" /></a></li>;
            default:
                return <li><a href="/api/logout">Logout</a></li>;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link
                        to={this.props.auth ? '/main' : '/'}
                        className="left brand-logo"
                    >Brand
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);