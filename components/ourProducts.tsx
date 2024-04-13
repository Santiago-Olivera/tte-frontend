"use client";

import React from 'react';
import Image from "next/image";



function OurProducts(): JSX.Element {
    const products = [
        {
          url: 'https://images.unsplash.com/photo-1631155989897-961b8fe3aba4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          url: 'https://images.unsplash.com/photo-1654626935419-d5de88269ab3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       
        },
        {
          url: 'https://images.unsplash.com/photo-1685489802596-673d1b55bd38?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];
    return (
        <div>
            {/* Latest Arrivals*/}
            <div className='text-center mt-8'>
                <h1 className='text-4xl font-bold mb-4'>Our Products</h1>
                <p className='text-sm mx-auto max-w-lg py-4 px-8 mb-2 border-0'>
                Welcome to our collection of high-quality products. Browse through our latest arrivals 
                and find the perfect items for your needs. From stylish smartphones to elegant jewelry, 
                we have something for everyone. Start exploring now and shop with confidence.
                </p>
                <button className='border-black text-center px-8 py-3 rounded-md 
                bg-white text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg 
                transition duration-300 ease-in-out' 
                    style={{border: '1px solid black' }}>
                    Shop All
                </button>
            </div>
            <div className="sm:grid grid-cols-12 p-4 gap-4 my-8  h-auto  ">
                {/* <!-- Box 1 --> */}
                <div className="col-span-4  rounded-lg p-4 max-w-[350px] mx-auto " >
                    <div className='w-full  rounded-2xl bg-center bg-cover duration-500 relative mb-4 '>
                    <Image
                        src={products[0].url}
                        // replace with your value
                        width={9}
                        // replace with your value
                        height={16}
                        className='rounded-2xl'
                        alt={'Samsung Galaxy S21 Ultra'}
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto",
                            objectFit: "contain"
                        }} />
                    </div>
                    <p className="text-center font-bold">Samsung Galaxy S21 Ultra</p>
                    <p className="text-center font-semibold">$650</p>
                </div>

                {/* <!-- Box 2 --> */}
                <div className="col-span-4 rounded-lg p-4 max-w-[350px] mx-auto ">
                    <div className='w-full rounded-2xl bg-center bg-cover duration-500 relative mb-4'>
                        <Image
                            src={products[1].url}
                            // replace with your value
                            width={9}
                            // replace with your value
                            height={16}
                            className='rounded-2xl'
                            alt={'Sport nike shoes'}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <p className="text-center font-bold">Sport nike shoes</p>
                    <p className="text-center font-semibold">$125</p>
                </div>

                {/* <!-- Box 3 --> */}
                <div className="col-span-4  rounded-lg p-4 max-w-[350px] mx-auto">
                    <div className='w-full rounded-2xl bg-center bg-cover duration-500 relative mb-4'>
                        <Image
                            src={products[2].url}
                            // replace with your value
                            width={9}
                            // replace with your value
                            height={16}
                            className='rounded-2xl'
                            alt={'Diamont necklace'}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto",
                                objectFit: "contain"
                            }} />
                    </div>
                    <p className="text-center font-bold">Diamont necklace</p>
                    <p className="text-center font-semibold">$599</p>
                </div>
            </div>

        </div>
    );
};

export default OurProducts;