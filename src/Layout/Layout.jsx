import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';
import Navbar from '../Components/Shared/Navbar';

const Layout = () => {
    return (
        <div className=''>
            <div className='flex gap-5'>
                <div className='w-full'>
                    <Navbar/>
                <Outlet />
                </div>
                <div className='w-[297px]'>
                <Sidebar />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;