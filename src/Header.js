import React from 'react';
import Link from './Link';


const Header = () => (
    <div className="header row space-around">
        <div className="extra-big-text">Rosabloggen 💖</div>
        <div className="row space-around no-disc">
            <li><Link to="/" linkName="Forsiden" /></li>
            <li><Link to="/about" linkName="Om meg" /></li>
        </div>
    </div>
);

export default Header;
