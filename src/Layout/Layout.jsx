import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';

const Layout = () => {
    return (
        <div>
            <div className='flex gap-5'>
                <div className='w-full'>
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