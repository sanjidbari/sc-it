import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;