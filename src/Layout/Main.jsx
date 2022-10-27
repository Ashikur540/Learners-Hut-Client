import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../Components/Pages/Shared/Footer/Footer';
import Navbar from '../Components/Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </Navbar>
        </div>
    );
};

export default Main;