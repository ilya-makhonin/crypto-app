import React from 'react';

function Header({ children }) {
    return (
        <header className="header">
            <div className="header_layout">
                <h1 className="header_title">
                    { children }
                </h1>
            </div>
        </header>
    );
}

export default Header;