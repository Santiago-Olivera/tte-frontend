"use client";

import React from 'react';
import Carousel from '../../../components/carousel';
import Categories from '../../../components/categories';
import LatestArrivals from '../../../components/latestArrivals';
import OurProducts from '../../../components/ourProducts';



function LandingPage(): JSX.Element {
    return (
        <div>
            <Carousel />
            <Categories />
            <LatestArrivals />
            <OurProducts />
        </div>
    );
}

export default LandingPage;
