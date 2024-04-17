import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
//import { useRouter } from 'next/router';

function HeaderLoginLogout() : JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [rol, setRol] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    //const router = useRouter();

    // Check if user data is in local storage to keep user logged in across sessions
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            setIsLoggedIn(true);
            setUsername(user.username);
        }
    }, []);

    const mockLogin = () => {
        const mockResponse = {
            token: "eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiRU1QTE9ZRUUiLCJzdWIiOiJlbXBsb3llZWp1YW5AbWFpbC5jb20iLCJpYXQiOjE3MTMyODgwMTMsImV4cCI6MTcxMzI4OTUxM30.SZadVzE-JHX68dsqxi59s2c8TnDI6oqPcuIsKH7Aw68",
            email: "employeeSantiago@mail.com",
            username: "Santiago",
            rol: "employee"
        };
        localStorage.setItem('user', JSON.stringify(mockResponse));
        setIsLoggedIn(true);
        setUsername(mockResponse.username);
        setRol(mockResponse.rol);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('user');
        //  redirect to home page
        //router.push('/');

    };

    return (
        <div >
            {isLoggedIn ? (
                <div>
                    <div className="sm:grid grid-flow-col gap-4 items-center hidden">
                        <span>{username}</span>
                        <FaShoppingCart />
                        <span className='hidden sm:block'>{rol}</span>
                        <button className="text-black text-sm py-3" onClick={handleLogout}>
                            Logout
                        </button>
                        <button className="bg-black text-white text-sm p-1 rounded">
                            Employee Portal
                        </button>
                    </div> 
                    {/* For small screens  */}
                    <div className='sm:hidden group flex flex-col relative '>
                    <div 
                            className='flex gap-2 items-center cursor-pointer' 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span>{username}</span>
                            <FaShoppingCart />
                        </div>
                        <nav className={`flex-col gap-4 ${isOpen ? 'block' : 'hidden'} absolute bg-white z-10 top-full`}>
                            <span>{rol}</span>
                            <div className="flex flex-col gap-1">
                                <button className="bg-black text-white text-sm p-1 rounded" onClick={handleLogout}>
                                    Logout
                                </button>
                                <button className="bg-black text-white text-sm p-1 rounded">
                                    Employee Portal
                                </button>
                            </div>
                        </nav>
                    </div>         
                </div>

                
            ) : (
                <button className="text-black text-sm py-3" onClick={mockLogin}>
                    Login
                </button>
            )}
        </div>
    );
}

export default HeaderLoginLogout;