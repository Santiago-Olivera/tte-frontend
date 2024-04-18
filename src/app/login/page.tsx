"use client";


import LoginEye from '@/components/login/LoginEye';
import React from 'react';
import { FaUser } from 'react-icons/fa';
import Image from 'next/image';
import LoginForm from '@/components/login/LoginForm';
import LoginLogo from '@/components/login/LoginLogo';


function Login(): JSX.Element {
    

    return (
        <div className=" p-4 grid grid-cols-2 gap-12 mt-12">
            <LoginForm />
            <LoginLogo />
        </div>
    );
}

export default Login;