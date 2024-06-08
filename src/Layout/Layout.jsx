import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
import Sidebar from '../Components/Shared/Sidebar';
import Navbar from '../Components/Shared/Navbar';
import "../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { setProperties } from '../Redux/Actions/propertyActions';

const Layout = () => {
    const [selectedView, setSelectedView] = useState('grid'); // Default view
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [selectedMarketer, setSelectedMarketer] = useState('');
    const [priceRange, setPriceRange] = useState([0, 10000000]);
    const [allProperties, setAllProperties] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        fetch('demoData.json')
          .then(res => res.json())
          .then(data => dispatch(setProperties(data)))
      }, [dispatch]);
      const properties = useSelector(state => state.property.properties);
      console.log(properties);

    const allSpaces = allProperties.map(property => property.area[0] * property.area[1]);
    const highestSpace = Math.max(...allSpaces);
    const [spaceRange, setSpaceRange] = useState([0, 1000000]);
 
    return (

        <div className=''>
            <div className='flex gap-5'>
                <div className='w-full'>
                    <Navbar />
                    <div className="md:outlet-container small">
                        <Outlet context={
                            { 
                                allProperties, setAllProperties,
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
                </div>
                <div className='md:w-[297px] w-[150px] md:h-[1280px] '>
                    <Sidebar 
                        allProperties={allProperties}
                        setAllProperties={setAllProperties}
                        selectedView={selectedView} 
                        setSelectedView={setSelectedView} 
                        selectedRegion={selectedRegion}
                        setSelectedRegion={setSelectedRegion}
                        selectedCity={selectedCity}
                        setSelectedCity={setSelectedCity}
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
