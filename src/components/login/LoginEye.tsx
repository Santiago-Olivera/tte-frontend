import React from 'react';
import { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

/* Passing password and HandlePasswordChange function from LoginForm component */
interface LoginEyeProps {
    password: string;
    onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    id : string;
}

function LoginEye({ password, onPasswordChange , label, id}: LoginEyeProps): JSX.Element {
    
    const [showPassword, setShowPassword] = useState(false);
    

    const handleMouseDown = () => {
        setShowPassword(true);
    };

    const handleMouseUp = () => {
        setShowPassword(false);
    };



    return (
        <div className="mt-8">
            <label htmlFor="password" className="block text-base mb-2">{label}</label>
            <div className="relative">
                <input 
                    type={showPassword ? 'text' : 'password'} 
                    id={id} 
                    className="border w-full text-base px-5 py-3 focus:outline-none focus:ring-0 focus:border-gray-600" 
                    placeholder="Enter your password" 
                    value={password} onChange={onPasswordChange}
                />
                <div 
                    className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer" 
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp} // handle case when mouse leaves the element before releasing the button
                    onTouchStart={handleMouseDown} // handle touch events for mobile devices
                    onTouchEnd={handleMouseUp} // handle touch events for mobile devices
                >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
            </div>
        </div>
    );
}

export default LoginEye;