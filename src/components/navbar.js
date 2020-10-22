import React from 'react';

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <a href="/" className="brand-logo hide-on-small-only">My Music</a>
                <ul id="nav-mobile" className="right">
                    <li><a href="/Songs">Songs</a></li>
                    <li><a href="/Artists">Artists</a></li>
                    <li><a href="/Albums">Albums</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;