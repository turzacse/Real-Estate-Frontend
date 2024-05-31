import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';
import Navbar from '../Components/Shared/Navbar';

const Layout = () => {
    const [selectedView, setSelectedView] = useState('grid'); // Default view

    return (
        <div className=''>
            <div className='flex gap-5'>
                <div className='w-full'>
                    <Navbar />
                    <Outlet context={{ selectedView, setSelectedView }} />
                </div>
                <div className='w-[297px]'>
                    <Sidebar selectedView={selectedView} setSelectedView={setSelectedView} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
