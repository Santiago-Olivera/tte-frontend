"use client";

import React from 'react';
import {useState} from 'react';
import Image from 'next/image';
import Carousel from '../../../components/carousel';
import Categories from '../../../components/categories';
import LatestArrivals from '../../../components/latestArrivals';
import OurProducts from '../../../components/ourProducts';



const landingPage: React.FC = () => {
    return (
        <div >
            <Carousel />
            <Categories />
            <LatestArrivals />
            <OurProducts />
        </div>
    );
};

export default landingPage;