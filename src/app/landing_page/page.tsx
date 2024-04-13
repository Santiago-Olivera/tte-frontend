"use client";

import Categories from '@/components/ui/Categories';
import ComponentTest from '@/components/ui/compontentTest';
import React from 'react';
/* import Carousel from '../../../components/Carousel';
import Categories from '../../../components/Categories';
import LatestArrivals from '../../../components/LatestArrivals';
import OurProducts from '../../../components/OurProducts'; */




function LandingPage(): JSX.Element {
    

    return (
        <div className="bg-gray-200 p-4">
            <ComponentTest />
            {/* <Carousel /> */}
            <Categories />
            {/* <LatestArrivals />
            <OurProducts /> */}
        </div>
    );
}

export default LandingPage;
