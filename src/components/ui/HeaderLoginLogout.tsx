import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
//import { useRouter } from 'next/router';

interface User {
    username: string;
    role: string;
    // other properties...
}

function HeaderLoginLogout() : JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [rol, setRol] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);
    //const router = useRouter();

    // Check if user data is in local storage to keep user logged in across sessions
    useEffect(() => {
    const storedToken = localStorage.getItem('token') || sessionStorage.getItem('token');
        setToken(storedToken);
    }, []);

    useEffect(() => {
        const username = localStorage.getItem('username') || sessionStorage.getItem('username');
        if (token) {
            const userData = JSON.parse(atob(token.split('.')[1]));
            setUser({ ...userData, username });
        }
    }, [token]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setToken(null);
        setUser(null);
    };

    return (
        <div >
            {user ? (
                <div>
                    <div className="sm:grid grid-flow-col gap-4 items-center hidden">
                        <span>{user?.username}</span>
                        <FaShoppingCart />
                        <span className='hidden sm:block'>{user?.role}</span>
                        <button className="text-black text-sm py-3" onClick={handleLogout}>
                            Logout
                        </button>
                        {user?.role === 'EMPLOYEE' && (
                            <button className="bg-black text-white text-sm p-1 rounded">
                                Employee Portal
                            </button>
                        )}
                    </div> 
                    {/* For small screens  */}
                    <div className='sm:hidden group flex flex-col relative '>
                    <div 
                            className='flex gap-2 items-center cursor-pointer' 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>{user.username}</span>
                            <FaShoppingCart />
                        </div>
                        <nav className={`flex-col gap-4 ${isOpen ? 'block' : 'hidden'} absolute bg-white z-10 top-full`}>
                            <span>{user.role}</span>
                            <div className="flex flex-col gap-1">
                                <button className="bg-black text-white text-sm p-1 rounded" onClick={handleLogout}>
                                    Logout
                                </button>
                                {user?.role === 'EMPLOYEE' && (
                                    <button className="bg-black text-white text-sm p-1 rounded">
                                        Employee Portal
                                    </button>
                                )}
                            </div>
                        </nav>
                    </div>         
                </div>

                
            ) : (
                <button className="text-black text-sm py-3" onClick={() => window.location.href = '/login'}>
                    Login
                </button>
            )}
        </div>
    );
}

export default HeaderLoginLogout;