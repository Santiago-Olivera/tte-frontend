
import LoginEye from '@/components/login/LoginEye';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

function LoginForm(): JSX.Element {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <div className="md:col-span-1 col-span-2 flex justify-center ">
            <div className="md:w-1/2  sm:min-w-96  p-6 shadow-lg bg-white rounded-md mx-auto">
                <div className='mb-8'>
                    <h3 className="text-xl  ">Welcome!</h3>
                </div>
                <div className="flex items-center justify-start gap-4 mb-2">
                    
                    <h1 className="text-3xl block text-center font-semibold">
                        Sign in 
                    </h1>
                    <FaUser size={20}/>
                </div>
                <div className='mb-8'>
                    <h3 className="text-sm ">
                        Please enter your credentials to sign in.
                    </h3>
                </div>
                <hr className="mt-3"></hr>
                <div className="mt-8">
                    <label htmlFor="username" className="block text-base mb-2">Username</label>
                    <input type="text" id="username" className="border w-full text-base px-5 py-3 
                    focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter your user name" 
                    value={username} onChange={handleUsernameChange} />
                </div>
            {/* Login Eye and password field */}
                <LoginEye password={password} onPasswordChange={handlePasswordChange} />
            {/* Remember me part */}
                <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <input type="checkbox" className="mr-2"></input>
                        <label className='text-sm'>Remember Me</label>
                    </div>
                    <div>
                        <a href="#" className="text-sm font-semibold">Forgot Password?</a>
                    </div>
                </div>

                <div className="mt-8">
                    <button type="submit" className=" border-2 border-black bg-black
                    text-white py-3 w-full rounded-md hover:bg-gray-200 hover:text-black 
                    font-semibold text-sm"disabled={!username || !password}>
                        Login
                    </button>
                </div>
                <div className="mt-10 flex justify-center items-center gap-2">
                    <p className=" text-sm">
                        Don't have an account? 
                    </p>
                    <a href="#" className="text-black font-semibold">Register</a>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;