import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '.././assets/Job Koi.png'

const Header = () => {
    return (
        <nav className="navbar">
            <img src={logo} alt=""/>
            <div className='nav-items'>
                <Link to="">Statistics</Link>
                <Link to="/appliedjobs">Applied jobs</Link>
                <Link to="">Blog</Link>
            </div>
            <button className="apply-btn shadow-lg" >Start Appling</button>
        </nav>
    );
};

export default Header;