"use client";

import React from 'react';
import Image from 'next/image';



const latestArrivals: React.FC = () => {
    const latest = [
        {
          url: 'https://images.unsplash.com/photo-1565714138558-4d2eaa7cea34?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
          url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
       
        },
        {
          url: 'https://images.unsplash.com/photo-1566977744263-79e677f4e7cf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    ];
    return (
        <div>
            {/* Latest Arrivals*/}
            <div className='text-center mt-8'>
                <h1 className='text-4xl font-bold mb-4'>Latest Arrivals</h1>
                <p className='text-sm mx-auto max-w-lg py-4 px-8 mb-2 border-0'>
                The latest arrivals to the store include a wide range of products that are sure 
                to catch your attention. From trendy clothing options to cutting-edge electronics and 
                exquisite jewelry, we have it all. Explore our latest arrivals and discover the perfect 
                items to enhance your style and elevate your lifestyle. Hurry up and shop now to stay ahead of the 
                fashion curve and enjoy the latest trends.
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
                    <div className='h-[20px] bg-white' ></div>
                    <div className='w-full  rounded-2xl bg-center bg-cover duration-500 relative mb-4 '>
                    <Image
                        src={latest[0].url}
                        layout='responsive'
                        width={9} // replace with your value
                        height={16} // replace with your value
                        objectFit='contain' // fit will occupy the entire space of the container
                        className='rounded-2xl' 
                        alt={'Iphone-15'}         
                    />
                    </div>
                    <p className="text-center font-bold">Iphone</p>
                </div>

                {/* <!-- Box 2 --> */}
                <div className="col-span-4 rounded-lg p-4 max-w-[350px] mx-auto ">
                    <div className='w-full rounded-2xl bg-center bg-cover duration-500 relative mb-4'>
                        <Image
                            src={latest[1].url}
                            layout='responsive'
                            width={9} // replace with your value
                            height={16} // replace with your value
                            objectFit='contain' 
                            className='rounded-2xl' 
                            alt={'earrings'}         
                        />
                    </div>
                    <p className="text-center font-bold">Silver Earrings</p>
                </div>

                {/* <!-- Box 3 --> */}
                <div className="col-span-4  rounded-lg p-4 max-w-[350px] mx-auto">
                    <div className='w-full rounded-2xl bg-center bg-cover duration-500 relative mb-4'>
                        <Image
                            src={latest[2].url}
                            layout='responsive'
                            width={9} // replace with your value
                            height={16} // replace with your value
                            objectFit='contain' 
                            className='rounded-2xl' 
                            alt={'gold-ring'}         
                        />
                    </div>
                    <p className="text-center font-bold">Gold-ring</p>
                </div>
            </div>

        </div>
    );
};

export default latestArrivals;