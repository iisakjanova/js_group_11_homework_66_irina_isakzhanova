import React from 'react';
import {NavLink} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="HeaderInner Container">
                <NavLink
                    to='/'
                    className="Logo"
                >
                    <b>Quotes Central</b>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;