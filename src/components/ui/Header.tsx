"use client";

import React from 'react';
import Image from 'next/image';
import HeaderLoginLogout from './HeaderLoginLogout';



function Header(): JSX.Element {
    

    return (
      <div className="grid grid-cols-12  w-full">
  
        <div className="col-span-3 bg-black">
            <p className="text-white text-center text-sm py-2">
                USD
            </p>
        </div>
        

        <div className="col-span-6  bg-black">
            <p className="text-white text-center text-sm py-2">
              FREE SHIPPING ON ALL HERMAN MILLER! FEB. 25–28. 
            </p>
        </div>
        
  
        <div className="col-span-3 bg-black">
            <p className="text-white text-center text-sm py-2">
              Support 
            </p>
        </div>
        
        {/* For screens medium break point and above span 3, for screens less than the medium
        breakpoint span 6  */}
        <div className="md:col-span-3 col-span-4 bg-red-200 grid grid-cols-3 ">
        {/* TTE logo and name */}
            <div className="col-span-1 bg-white  flex justify-end items-center">
              <div className="p-2 relative flex justify-end ">
                <Image
                    src="/images/tte-logo.svg"
                    alt="Logo"
                    width={9}
                    height={16}
                    className='rounded-2xl'
                    priority
                    style={{
                      width: "1.8rem",
                      height: "fit-content",
                      objectFit: "contain"
                    }}
                />
              </div>
            </div>
         
            <div className="col-span-2 bg-white">
              <p className="text-black font-bold  text-sm py-3">
                Tech Trend Emporium
              </p>
            </div>
        </div>
        
        
        <div className="col-span-2 bg-white md:grid md:grid-cols-2  hidden items-center">
        {/* Shop list and wishList */}
            <div className="col-span-1 bg-white ">
                <p className="text-black text-sm py-3">
                    Shop List
                </p>
            </div>
         
            <div className="col-span-1 bg-white ">
                <p className="text-black text-sm py-3">
                    Wishlist
                </p>
            </div>
        </div>
        
       {/* Search bar */}
        <div className="md:col-span-3 col-span-2 bg-white grid grid-cols-3 items-center gap-2">
            <div className="md:p-2 md:col-span-1 md:justify-self-center col-span-2 justify-self-end">
                <span >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-500 ">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                </span>
            </div>
            <div className="p-2 md:col-span-2  rounded-md text-black grid-grow md:block hidden">
                <input 
                type="text" 
                placeholder="Search..." 
                />
            </div>
        </div>
        
       {/* Header LoginLogout Component */}
        <div className="md:col-span-4 col-span-6 bg-white grid grid-flow-col items-center justify-center">
            <HeaderLoginLogout />
        </div>
      </div>

    );
};

export default Header;