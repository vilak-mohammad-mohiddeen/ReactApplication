import React from 'react';
import Time from './TimeHeader';

function Header() {
    return (
        <header className="header">
            <h1>Keeper</h1>
            <Time />
        </header>
    );
}

export default Header;