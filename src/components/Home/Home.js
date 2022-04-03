import React from 'react';
import './Home.css'


const Home = () => {
    return (
        <div className='container'>
            <div className='banner-info'>
                <h1>Support of Practice</h1>
                <h2> Why buy a book <br />
                    Please Buy a future </h2>
            </div>
            <div className='banner-img'>
                <img src="images/book.jpg" alt="" />
            </div>
        </div>
    );
};

export default Home;