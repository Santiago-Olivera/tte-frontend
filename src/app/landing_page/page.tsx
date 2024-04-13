"use client";

import Carousel from '@/components/ui/Carousel';
import Categories from '@/components/ui/Categories';
import LatestArrivals from '@/components/ui/LatestArrivals';
import OurProducts from '@/components/ui/OurProducts';
import React from 'react';


function LandingPage(): JSX.Element {
    

    return (
        <div className="bg-gray-200 p-4">
            <Carousel />
            <Categories />
            <LatestArrivals />
            <OurProducts />
        </div>
    );
}

export default LandingPage;
