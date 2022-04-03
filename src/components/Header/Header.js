import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Link className='nav-item' to='/'>Home</Link>
            <Link className='nav-item' to='/reviews'>Reviews</Link>
            <Link className='nav-item' to='/dashbord'>Dashbord</Link>
            <Link className='nav-item' to='/blogs'>Blogs</Link>
            <Link className='nav-item' to='/about'>About</Link>
        </div>
    );
};

export default Header;