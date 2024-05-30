import React from 'react';
import demoProperties from '../demoData';
// import sqr from '../assets/sqr.png'
import sqr from '../assets/icon/sqr.png';
import bath from '../assets/icon/bath.png';
import park from '../assets/icon/park.png';
import room from '../assets/icon/room.png';
import condition from '../assets/icon/condition.png';
import { IoLocationOutline } from 'react-icons/io5';
import { CiDollar } from 'react-icons/ci';

const GridView = () => {
    return (
        <div className='grid grid-cols-4 ml-10 '>
            {
                demoProperties.map((item) => <div key={item.id}>
                    <div className='my-5'>
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
                                    {
                                        item.offer ? <>{item.discountPrice}</> : <>{item.regularPrice}</>
                                    }
                                </div>
                                <CiDollar className='text-2xl' />
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default GridView;