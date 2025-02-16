import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from 'react-icons/fa';

const MobileNav = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <div className='sticky top-0 bg-white z-10 md:hidden relative'>
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <h1 className='text-2xl font-semibold'>ShopOnline</h1>

                {/* Search input (shown on icon click) */}
                <div className={`absolute top-20 left-0 w-full bg-white p-4 ${searchOpen ? 'block' : 'hidden'}`}>
                    <div className='relative w-full'>
                        <input
                            type="text"
                            className=' w-full border border-gray-300 outline-none px-6 py-2 rounded-full'
                            placeholder='Search here...'
                        />
                    </div>
                </div>

                {/* Icons & Menu Button */}
                <div className="flex items-center gap-4">
                    <div className="icon_wrapper cursor-pointer text-lg">
                        <FaSearch className='cursor-pointer' onClick={() => setSearchOpen(!searchOpen)} />
                    </div>
                    <div className="icon_wrapper cursor-pointer text-lg">
                        <FaUser />
                    </div>
                    <div className="cursor-pointer icon_wrapper relative  text-lg">
                        <FaShoppingBag />
                        <span
                            className='absolute flex items-center justify-center text-[14px]
                        w-[25px] h-[25px] text-white rounded-full bg-red-500 top-[-10px] right-[-5px]'
                        >0</span>
                    </div>
                    {/* Mobile Menu Toggle */}
                    <div className="cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />}
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`absolute top-[80px] w-[200px] text-center bg-gray-100 py-4  ${menuOpen ? 'block' : 'hidden'}`}>
                <ul className='space-y-4'>
                    <li className='cursor-pointer'  onClick={() => setMenuOpen(!menuOpen)}>Home</li>
                    <li className='cursor-pointer'  onClick={() => setMenuOpen(!menuOpen)}>Shop</li>
                    <li className='cursor-pointer'  onClick={() => setMenuOpen(!menuOpen)}>Contact</li>
                    <li className='cursor-pointer'  onClick={() => setMenuOpen(!menuOpen)}>About</li>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
