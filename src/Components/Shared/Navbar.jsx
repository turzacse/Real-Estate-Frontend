import React from 'react';
import logo from '../../assets/icon/tinLogo-l.png'

const Navbar = () => {
    return (
        <div className='mt-4 flex justify-between'>
            <p></p>
            <img className='w-[96px] h-[60px]' src={logo} alt="" />
        </div>
    );
};

export default Navbar;