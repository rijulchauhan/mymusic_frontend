import React from 'react';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo hide-on-small-only">My Music</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/Songs">Songs</Link></li>
                    <li><Link to="/Artists">Artists</Link></li>
                    <li><Link to="/Albums">Albums</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;