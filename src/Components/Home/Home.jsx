import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';


const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;