

import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className='sticky hidden lg:block top-0 bg-white z-10'>
            <div className="container">
                <div className="flex items-center justify-between p-8">
                    {/* logo */}
                    <h1 className='text-4xl font-medium'>ShopOnline</h1>
                    {/* search input */}
                    <div className='relative w-full max-w-[500px]'>
                        <input type="text"
                            className='w-full border-none outline-none bg-[#f2f3f5]
                             px-6 py-3 rounded-full'
                            placeholder='search here...'
                        />
                        <FaSearch className='absolute top-0 right-0 mt-4 mr-4' />
                    </div>
                    {/* icons */}
                    <div className="flex gap-4">
                        <div className="icon_wrapper">
                            <FaUser />
                        </div>
                        <div className="icon_wrapper relative">
                            <FaShoppingBag className='' />
                            <span
                                className='absolute flex items-center justify-center text-[14px]
                                 w-[25px] h-[25px] text-white rounded-full bg-red-500 top-[-10px] right-[-5px]'
                            >0</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
