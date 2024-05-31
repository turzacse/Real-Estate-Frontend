import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';
import Navbar from '../Components/Shared/Navbar';

const Layout = () => {
    const [selectedView, setSelectedView] = useState('grid'); // Default view
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [selectedMarketer, setSelectedMarketer] = useState('');
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [spaceRange, setSpaceRange] = useState([0, 1000000]);

    return (
        <div className=''>
            <div className='flex gap-5'>
                <div className='w-full'>
                    <Navbar />
                    <Outlet context={
                        { 
                            selectedView, setSelectedView ,
                            selectedRegion, setSelectedRegion,
                            selectedCity, setSelectedCity,
                            selectedDistrict, setSelectedDistrict,
                            propertyType, setPropertyType,
                            selectedMarketer, setSelectedMarketer,
                            priceRange, setPriceRange,
                            spaceRange, setSpaceRange,
                        }
                        
                        } />
                </div>
                <div className='w-[297px]'>
                    <Sidebar 
                    selectedView={selectedView} 
                    setSelectedView={setSelectedView} 
                    selectedRegion= {selectedRegion}
                    setSelectedRegion ={setSelectedRegion}
                    selectedCity = {selectedCity}
                    setSelectedCity ={setSelectedCity}
                    selectedDistrict={selectedDistrict}
                    setSelectedDistrict={setSelectedDistrict}
                    propertyType={propertyType}
                    setPropertyType={setPropertyType}
                    selectedMarketer={selectedMarketer}
                    setSelectedMarketer={setSelectedMarketer}
                    priceRange={priceRange}
                    setPriceRange={setPriceRange}
                    spaceRange={spaceRange}
                    setSpaceRange={setSpaceRange}
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
