import React from 'react';
import icon1 from '../../assets/icon/apple.png'
import icon2 from '../../assets/icon/playstore.png'
import icon3 from '../../assets/icon/huaw.png'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#a87d2e] mt-10 h-[86px] flex justify-between text-white'>
            <div className='flex gap-5 items-center ml-10'>
                <NavLink>سياسة  الاستخدام  والخصوصية</NavLink>
                <p>|</p>
                <NavLink>اتصل بنا</NavLink>
                <p>|</p>
                <NavLink>عن الحي المثالي</NavLink>
            </div>
            <div className='flex gap-5 items-center mr-10 '>
                <div className='flex gap-5'>
                    <NavLink><img src={icon1} alt="" /></NavLink>
                    <NavLink><img src={icon2} alt="" /></NavLink>
                    <NavLink><img src={icon3} alt="" /></NavLink>
                </div>
                <NavLink>تنزيل التطبيق</NavLink>
            </div>
        </div>
    );
};

export default Footer;