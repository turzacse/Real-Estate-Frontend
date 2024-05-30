import React, { useState } from 'react';
import { IoGridSharp, IoLocationOutline } from 'react-icons/io5';
import user from '../../assets/image/user.png'
import group from '../../assets/icon/Group.png'

const Sidebar = () => {
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [selectedMarketer, setSelectedMarketer] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedView, setSelectedView] = useState('');


    const region = ['r1', 'r2', 'r3'];
    const cities = ['City 1', 'City 2', 'City 3'];
    const districts = ['District 1', 'District 2', 'District 3'];
    const types = ['t1', 't2', 't3'];
    const marketers = ['m1', 'm2', 'm3'];
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
                            {types.map((type, index) => (
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

                <div className='mt-4'>
                    {/* <label className='block mb-2 text-sm font-medium text-gray-900'>View</label> */}
                    <div className='flex border justify-between p-2'>

                        <label className='inline-flex flex-col gap-2 items-center'>
                            <IoLocationOutline className='text-4xl' />
                            <input
                                type='radio'
                                name='view'
                                value='خريطة'
                                checked={selectedView === 'خريطة'}
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
                                value='بطاقات'
                                checked={selectedView === 'بطاقات'}
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