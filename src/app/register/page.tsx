"use client";

import React from 'react';
import Image from 'next/image';
import LoginForm from '@/components/login/LoginForm';
import LoginLogo from '@/components/login/LoginLogo';
import RegisterForm from '@/components/login/RegisterForm';


function Register(): JSX.Element {
    

    return (
        <div className=" p-4 grid grid-cols-2 gap-12 mt-12">
            <RegisterForm />
            <LoginLogo />
        </div>
    );
}

export default Register;