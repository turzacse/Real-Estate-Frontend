import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#a87d2e] mt-10 h-[86px] flex justify-between text-white'>
            <div className='flex gap-5 items-center ml-10'>
                <p>سياسة  الاستخدام  والخصوصية</p>
                <p>|</p>
                <p>اتصل بنا</p>
                <p>|</p>
                <p>عن الحي المثالي</p>
            </div>
            <div className='flex gap-5 items-center mr-10 '>
                <p>تنزيل التطبيق</p>
            </div>
        </div>
    );
};

export default Footer;