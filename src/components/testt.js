import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="links">
                <Link to="/channels" className="link">Channels</Link>
                <Link to="/faq" className="link">FAQ</Link>
                <Link to="/blog" className="link">Blog</Link>
                <Link to="/contact" className="link">Contact</Link>
            </div>
        </div>
    );
}

export default Navbar;
