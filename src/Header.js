import React from 'react';
// import Link from './Link';
import { Link } from 'react-router-dom';


const Header = () => (
    <header className="row space-around">
        <h1>My page</h1>
        <nav>
            <ul className="row space-around no-disc">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </nav>
  </header>
);

export default Header;
