import React from 'react';
import sqr from '../assets/icon/sqr.png';
import bath from '../assets/icon/bath.png';
import park from '../assets/icon/park.png';
import room from '../assets/icon/room.png';
import condition from '../assets/icon/condition.png';
import { IoLocationOutline } from 'react-icons/io5';
import { CiDollar } from 'react-icons/ci';
import { useOutletContext } from 'react-router-dom';
import { useSelector } from 'react-redux';

const GridView = () => {
    const { selectedRegion, selectedCity, selectedDistrict, propertyType, selectedMarketer, priceRange,spaceRange, } = useOutletContext();
    // console.log(selectedRegion, selectedCity, selectedDistrict, propertyType, selectedMarketer, priceRange,spaceRange);
    
    const properties = useSelector(state => state.property.properties);
    // Filter the properties based on the selected criteria
    const filteredProperties = properties?.filter(property => {
        const matchRegion = selectedRegion ? property.address.includes(selectedRegion) : true;
        const matchCity = selectedCity ? property.address.includes(selectedCity) : true;
        const matchDistrict = selectedDistrict ? property.address.includes(selectedDistrict) : true;
        const matchPropertyType = propertyType ? property.propertyType === propertyType : true;
        const matchMarketer = selectedMarketer ? property.userRef === selectedMarketer : true;
    
        const propertyPrice = property.offer ? property.discountPrice : property.regularPrice;
        const matchPrice = propertyPrice >= priceRange[0] && propertyPrice <= priceRange[1];
    
        const propertySpace = property.area[0] * property.area[1];
        const matchSpace = propertySpace >= spaceRange[0] && propertySpace <= spaceRange[1];
    
        return matchRegion && matchCity && matchDistrict && matchPropertyType && matchMarketer && matchPrice && matchSpace;
    });
    
    if (filteredProperties.length === 0) {
        return (
            <div
            className='bg-[#A87D2E] text-white w-1/3 text-center p-4 rounded-xl mx-auto  h-[200px] my-auto flex justify-center items-center'
            >
                <div>
                    <h2 className='text-lg font-bold'>No properties match your criteria.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 '>
            {
                filteredProperties?.length > 0
                    ? filteredProperties?.map((item) => (
                        <div key={item.id}>
                            <div className='my-5 w-[200px] h-[215px]'>
                                <img className='flex items-center justify-center' src={item.imageUrls} alt="" />
                                <h2 className='text-right mr-20'>{item.title}</h2>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.area[0] * item.area[1]}</p>
                                        <img className='w-[15px] h-[15px]' src={sqr} alt="" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.bathrooms}</p>
                                        <img className='w-[15px] h-[15px]' src={bath} alt="" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.parking}</p>
                                        <img className='w-[15px] h-[15px]' src={park} alt="" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.bedrooms}</p>
                                        <img className='w-[15px] h-[15px]' src={room} alt="" />
                                    </div>
                                </div>
                                {/* 2nd line  */}
                                <div className='flex gap-10 mt-2'>
                                    <IoLocationOutline className='text-2xl' />
                                    <div className='relative'>
                                        <img src={condition} alt="" />
                                        <p className='absolute top-1 left-1 text-[10px]'>بيع</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='text-[12px]'>
                                            {item.offer ? item.discountPrice : item.regularPrice}
                                        </div>
                                        <CiDollar className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                    : properties?.map((item) => (
                        <div key={item.id}>
                            <div className='my-5 w-[200px] h-[215px]'>
                                <img className='flex items-center justify-center' src={item.imageUrls} alt="" />
                                <h2 className='text-right mr-20'>{item.title}</h2>
                                <div className='flex gap-2'>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.area[0] * item.area[1]}</p>
                                        <img className='w-[15px] h-[15px]' src={sqr} alt="" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.bathrooms}</p>
                                        <img className='w-[15px] h-[15px]' src={bath} alt="" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.parking}</p>
                                        <img className='w-[15px] h-[15px]' src={park} alt="" />
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <p>{item.bedrooms}</p>
                                        <img className='w-[15px] h-[15px]' src={room} alt="" />
                                    </div>
                                </div>
                                {/* 2nd line  */}
                                <div className='flex gap-10 mt-2'>
                                    <IoLocationOutline className='text-2xl' />
                                    <div className='relative'>
                                        <img src={condition} alt="" />
                                        <p className='absolute top-1 left-1 text-[10px]'>بيع</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <div className='text-[12px]'>
                                            {item.offer ? item.discountPrice : item.regularPrice}
                                        </div>
                                        <CiDollar className='text-2xl' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
            }
        </div>
    );
};
export default GridView;