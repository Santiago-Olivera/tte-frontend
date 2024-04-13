"use client";

import React from 'react';
import Carousel from '../../../components/Carousel';
import Categories from '../../../components/Categories';
import LatestArrivals from '../../../components/LatestArrivals';
import OurProducts from '../../../components/OurProducts';




function LandingPage(): JSX.Element {
    

    return (
        <div className="bg-gray-200 p-4">
            <h1 className="text-3xl font-bold mb-4 text-red-500">Welcome tech tren emporium</h1>
            <p className="text-gray-700">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, 
                magnam quae ut perferendis perspiciatis culpa nam placeat maxime libero, 
                ullam repellat saepe. Cum ullam, assumenda cupiditate temporibus fuga animi consectetur.
            </p>
            {/* <Carousel />
            <Categories />
            <LatestArrivals />
            <OurProducts /> */}
        </div>
    );
}

export default LandingPage;
