import React from 'react';
import { Link } from 'react-router-dom';
import './Notfound.css'

const Notfound = () => {
    return (
        <div>
            <h1 className='notfoundheading'>404</h1>
            <h1 className='notfoundheading'>Oppps Data Not Found !!!</h1>
            <img src="images/404.png" alt="" />

        </div>
    );
};

export default Notfound;