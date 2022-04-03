import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'

const Notfound = () => {
    return (
        <div>
            <h1>404</h1>
            <h1>Oppps Data Not Found !!!</h1>
            <h3>Please go to Home page</h3>
            <Link className='homebtn' to='/'>Home</Link>
        </div>
    );
};

export default Notfound;