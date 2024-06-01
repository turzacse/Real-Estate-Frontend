import React, { useState } from 'react';
import { IoGridSharp, IoLocationOutline } from 'react-icons/io5';
import user from '../../assets/image/user.png'
import group from '../../assets/icon/Group.png'
import { useSelector } from 'react-redux';

const Sidebar = ({ selectedView, setSelectedView, selectedRegion, setSelectedRegion, selectedCity, setSelectedCity, selectedDistrict, setSelectedDistrict, propertyType, setPropertyType, selectedMarketer, setSelectedMarketer, priceRange, setPriceRange, spaceRange, setSpaceRange, }) => {

    const [selectedOption, setSelectedOption] = useState('');
    const region = ["منطقة الرياض", "منطقة مكة المكرمة", "منطقة المدينة المنورة", "منطقة الشرقية", "منطقة عسير", "منطقة تبوك", "منطقة حائل", "منطقة الحدود الشمالية", "منطقة جازان", "منطقة نجران", "منطقة الباحة", "منطقة الجوف", "منطقة القصيم"];
    const cities = ["الرياض", "مكة المكرمة", "المدينة المنورة", "جدة", "الدمام", "بريدة", "تبوك", "خميس مشيط", "حائل", "الطائف", "القطيف", "الخبر", "الجبيل", "الاحساء", "نجران", "ينبع", "الباحة", "أبها", "الخرج", "عرعر"];
    const districts = ["حي السلام", "حي النزهة", "حي العليا", "حي الربوة", "حي العزيزية", "حي الوزيرية", "حي الشفا", "حي الفيحاء", "حي البديعة", "حي الحمراء", "حي الخليج", "حي الروضة", "حي الملز", "حي المروج", "حي النسيم", "حي الشرفية", "حي الفيصلية", "حي الملك فهد", "حي النخيل", "حي العارض", "حي البطحاء", "حي المنصورة", "حي الملقا", "حي العمران", "حي اليرموك", "حي العقيق", "حي الوادي", "حي السويدي", "حي المربع", "حي النهضة"];

    const properties = useSelector(state => state?.property?.properties);

    const marketers = ['m1', 'm2', 'm3'];
    const allPropertyTypes = [...new Set(properties?.map(property => property.propertyType))];

    // Calculate highest and lowest prices
    const allPrices = properties?.map(property => (property.offer ? property.discountPrice : property.regularPrice));
    const highestPrice = Math.max(...allPrices);
    const lowestPrice = Math.min(...allPrices);

    // Calculate highest and lowest spaces
    const allSpaces = properties?.map(property => property.area[0] * property.area[1]);
    const highestSpace = Math.max(...allSpaces);
    const lowestSpace = Math.min(...allSpaces);


    // console.log(selectedRegion, selectedCity, selectedDistrict, selectedMarketer);

    return (
        <div className='bg-[#A87D2E] text-white h-full rounded-l-xl text-right'>
            <div className='flex justify-between mx-4 pt-5'>
                <div className='mt-20'>
                    <img className='w-[64px] h-[64px] ' src={group} alt="" />
                    <p>دخول</p>
                </div>
                <div className=''>
                    <img className='rounded-full flex h-[144px] w-[105px] ' src={user} alt="" />
                    <p className='text-2xl'>غير مسجل</p>
                    <p>متسوق</p>
                </div>
            </div>

            <div className='my-10 mx-[14px] bg-white text-black px-[14px] rounded-t-lg py-4'>
                <h2 className=' font-medium text-[#A87D2E]'>خيارات البحث والعرض</h2>
                {/* region  */}
                <div className='mt-4'>
                    {/* region */}
                    <div className='relative'>
                        <select
                            id='region'
                            value={selectedRegion}
                            onChange={(e) => setSelectedRegion(e.target.value)}
                            className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 pr-10 text-right'
                        >
                            <option value='' disabled>المنطقة</option>
                            {region.map((r, index) => (
                                <option key={index} value={r} className="text-right">{r}</option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* city */}
                <div className='mt-4'>

                    <div className='relative'>
                        <select
                            id='city'
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value)}
                            className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 pr-10 text-right'
                        >
                            <option value='' disabled>المدينة</option>
                            {cities.map((city, index) => (
                                <option key={index} value={city} className="text-right">{city}</option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* district  */}
                <div className='mt-4'>
                    {/* <label htmlFor='district' className='block mb-2 text-sm font-medium text-gray-900'>district</label> */}
                    <div className='relative'>
                        <select
                            id='district'
                            value={selectedDistrict}
                            onChange={(e) => setSelectedDistrict(e.target.value)}
                            className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 pr-10 text-right'
                        >
                            <option value='' disabled>الحي</option>
                            {districts.map((district, index) => (
                                <option key={index} value={district} className="text-right">{district}</option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* type  */}
                <div className='mt-4'>
                    {/* <label htmlFor='district' className='block mb-2 text-sm font-medium text-gray-900'>Property type</label> */}
                    <div className='relative'>
                        <select
                            id='type'
                            value={propertyType}
                            onChange={(e) => setPropertyType(e.target.value)}
                            className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 pr-10 text-right'
                        >
                            <option value='' disabled>نوع العقار</option>
                            {allPropertyTypes.map((type, index) => (
                                <option key={index} value={type} className="text-right">{type}</option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                {/* marketer */}
                <div className='mt-4'>
                    {/* <label htmlFor='district' className='block mb-2 text-sm font-medium text-gray-900'>marketer</label> */}
                    <div className='relative'>
                        <select
                            id='marketer'
                            value={selectedMarketer}
                            onChange={(e) => setSelectedMarketer(e.target.value)}
                            className='block w-full p-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500 pr-10 text-right'
                        >
                            <option value='' disabled> المسوق</option>
                            {marketers.map((marketer, index) => (
                                <option key={index} value={marketer} className="text-right">{marketer}</option>
                            ))}
                        </select>
                        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center px-2 text-gray-700'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 9l-7 7-7-7'></path>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    {/* <label className='block mb-2 text-sm font-medium text-gray-900'>Options</label> */}
                    <div className='flex border justify-between p-2'>
                        <label className='inline-flex items-center'>
                            <input
                                type='radio'
                                name='option'
                                value='بيع'
                                checked={selectedOption === 'بيع'}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className='form-radio h-5 w-5 text-blue-600'
                            />
                            <span className='ml-2 text-gray-700'>بيع</span>
                        </label>
                        <label className='inline-flex items-center ml-6'>
                            <input
                                type='radio'
                                name='option'
                                value='آجار'
                                checked={selectedOption === 'آجار'}
                                onChange={(e) => setSelectedOption(e.target.value)}
                                className='form-radio h-5 w-5 text-blue-600'
                            />
                            <span className='ml-2 text-gray-700'>آجار</span>
                        </label>
                    </div>
                </div>

                {/* space  */}
                <div className='mt-5 text-black  rounded-t-lg '>
                    <h2 className='font-medium text-black mr-3'> المساحة</h2>
                    <div className=' relative'>
                        <input
                            type='range'
                            min='0'
                            max='1000000'
                            step='10000'
                            value={spaceRange[1]}
                            onChange={(e) => setSpaceRange([spaceRange[0], Number(e.target.value)])}
                            className='w-full h-2 bg-[#A87D2E] rounded-full appearance-none'
                            style={{
                                accentColor: '#A87D2E',
                                background: `linear-gradient(to right, #A87D2E ${(spaceRange[1] / 1000000) * 100}%, #e5e7eb 0%)`
                            }}
                        />
                        <div className='relative'>
                            <div
                                className='absolute -top-7 h-10 w-1 bg-[#A87D2E] cursor-pointer'
                                style={{ left: `calc(${(spaceRange[1] / 1000000) * 100}% - 2px)` }}
                                onMouseDown={(e) => {
                                    const onMouseMove = (e) => {
                                        const slider = e.target.closest('.relative').querySelector('input[type="range"]');
                                        const rect = slider.getBoundingClientRect();
                                        const newValue = Math.min(
                                            Math.max(0, ((e.clientX - rect.left) / rect.width) * 1000000),
                                            1000000
                                        );
                                        setSpaceRange([spaceRange[0], newValue]);
                                    };

                                    const onMouseUp = () => {
                                        document.removeEventListener('mousemove', onMouseMove);
                                        document.removeEventListener('mouseup', onMouseUp);
                                    };

                                    document.addEventListener('mousemove', onMouseMove);
                                    document.addEventListener('mouseup', onMouseUp);
                                }}
                            ></div>
                        </div>
                        <div className='flex justify-center text-sm mt-2'>
                            <span>{spaceRange[1]} </span>
                        </div>
                    </div>
                </div>

                {/* price range  */}
                <div className='mt-5 text-black  rounded-t-lg '>
                    <h2 className='font-medium text-black mr-3'> السعر</h2>
                    <div className=' relative'>
                        <input
                            type='range'
                            min={lowestPrice}
                            max={highestPrice}
                            step='10000'
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className='w-full h-2 bg-[#A87D2E] rounded-full appearance-none'
                            style={{
                                accentColor: '#A87D2E',
                                background: `linear-gradient(to right, #A87D2E ${(priceRange[1] / highestPrice) * 100}%, #e5e7eb 0%)`
                            }}
                        />
                        <div className='relative'>
                            <div
                                className='absolute -top-7 h-10 w-1 bg-[#A87D2E] cursor-pointer'
                                style={{ left: `calc(${(priceRange[1] / highestPrice) * 100}% - 2px)` }}
                                onMouseDown={(e) => {
                                    const onMouseMove = (e) => {
                                        const slider = e.target.closest('.relative').querySelector('input[type="range"]');
                                        const rect = slider.getBoundingClientRect();
                                        const newValue = Math.min(
                                            Math.max(0, ((e.clientX - rect.left) / rect.width) * priceRange[1]),
                                            highestPrice
                                        );
                                        setPriceRange([priceRange[0], newValue]);
                                    };

                                    const onMouseUp = () => {
                                        document.removeEventListener('mousemove', onMouseMove);
                                        document.removeEventListener('mouseup', onMouseUp);
                                    };

                                    document.addEventListener('mousemove', onMouseMove);
                                    document.addEventListener('mouseup', onMouseUp);
                                }}
                            ></div>
                        </div>
                        <div className='flex justify-center text-sm mt-2'>
                            <span>{priceRange[1]} </span>
                        </div>
                    </div>
                </div>

                <div className='mt-4'>
                    <div className='flex border justify-between p-2'>
                        <label className='inline-flex flex-col gap-2 items-center'>
                            <IoLocationOutline className='text-4xl' />
                            <input
                                type='radio'
                                name='view'
                                value='map'
                                checked={selectedView === 'map'}
                                onChange={(e) => setSelectedView(e.target.value)}
                                className='form-radio h-5 w-5 text-blue-600'
                            />
                            <span className='ml-2 text-gray-700'>خريطة</span>
                        </label>

                        <label className='inline-flex flex-col gap-2 items-center ml-6'>
                            <IoGridSharp className='text-4xl' />
                            <input
                                type='radio'
                                name='view'
                                value='grid'
                                checked={selectedView === 'grid'}
                                onChange={(e) => setSelectedView(e.target.value)}
                                className='form-radio h-5 w-5 text-blue-600'
                            />
                            <span className='ml-2 text-gray-700'>بطاقات</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;