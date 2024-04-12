"use client";

import React from 'react';
import Image from 'next/image';



const Categories: React.FC = () => {
    const categories = [
        {
          url: 'https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          url: 'https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       
        },
        {
          url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];
    return (
        <div>
            {/* Categories */}
            <div className='text-center mt-8'>
                <h1 className='text-4xl font-bold mb-4'>Categories</h1>
                <p className='text-sm mx-auto max-w-lg py-4 px-8 mb-2 border-0'>
                    Explore our exclusive collections of cutting-edge electronics, futuristic jewelry, 
                    and the latest fashion for all your style needs. Whether you&apos;re a tech enthusiast, 
                    a fashionista, or someone who loves unique accessories, we have something for everyone. 
                    Discover the latest trends and find the perfect items to express your personal style. 
                    Shop now and elevate your look with our curated selection of high-quality products.
                </p>
                <button className='border-black text-center px-8 py-3 rounded-md 
                bg-white text-black hover:bg-black hover:text-white hover:border-black hover:shadow-lg 
                transition duration-300 ease-in-out' 
                    style={{border: '1px solid black' }}>
                    Shop All
                </button>
            </div>
            <div className="sm:grid grid-cols-12 p-4 gap-4 my-8  h-auto ">
                {/* <!-- Box 1 --> */}
                <div className="col-span-4  rounded-lg p-4 max-w-[350px] mx-auto">
                    <div className='w-full  rounded-2xl bg-center bg-cover duration-500 relative mb-4 '>
                    <Image
                        src={categories[0].url}
                        layout='responsive'
                        width={9} // replace with your value
                        height={16} // replace with your value
                        objectFit='contain' // fit will occupy the entire space of the container
                        className='rounded-2xl' 
                        alt={'Food Category'}         
                    />
                    </div>
                    <p className="text-center font-bold">Men&apos;s Clothing</p>
                </div>

                {/* <!-- Box 2 --> */}
                <div className="col-span-4  rounded-lg p-4 max-w-[350px] mx-auto">
                    <div className='w-full  rounded-2xl bg-center bg-cover duration-500 relative mb-4'>
                        <Image
                            src={categories[1].url}
                            layout='responsive'
                            width={9} // replace with your value
                            height={16} // replace with your value
                            objectFit='contain' 
                            className='rounded-2xl' 
                            alt={'Food Category'}         
                        />
                    </div>
                    <p className="text-center font-bold">Electronics</p>
                </div>

                {/* <!-- Box 3 --> */}
                <div className="col-span-4  rounded-lg p-4 max-w-[350px] mx-auto">
                    <div className='w-full rounded-2xl bg-center bg-cover duration-500 relative mb-4'>
                        <Image
                            src={categories[2].url}
                            layout='responsive'
                            width={9} // replace with your value
                            height={16} // replace with your value
                            objectFit='contain' 
                            className='rounded-2xl' 
                            alt={'Food Category'}         
                        />
                    </div>
                    <p className="text-center font-bold">jewelery</p>
                </div>
            </div>

        </div>
    );
};

export default Categories;