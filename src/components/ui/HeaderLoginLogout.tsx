import React, { useState, useEffect, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { decode } from 'jsonwebtoken'; // Import the decode function
import { JwtPayload } from 'jsonwebtoken';
import { IsLoggedInContext } from '../login/isLoggedInContext';

//import { useRouter } from 'next/router';

interface MyTokenPayload extends JwtPayload {
    role?: string;
}

function HeaderLoginLogout() : JSX.Element {
    // Get the router instance:
    const router = useRouter();

    const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext);
    const [username, setUsername] = useState('');
    const [rol, setRol] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    //const router = useRouter();

    // Check if user data is in local storage to keep user logged in across sessions
    useEffect(() => {
        const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            console.log(user);
            const decodedToken = decode(user.token) as MyTokenPayload | null;
            if (decodedToken) {
                setIsLoggedIn(true);
                setRol(decodedToken.role || '');
            }
            // Extract username directly from the stored user object
            setUsername(user.username || '');
        } else {
            setIsLoggedIn(false);
            setUsername('');
            setRol('');
        }
    }, [isLoggedIn, setIsLoggedIn]);



    const goLogin = () => {
        if (isLoggedIn) {
            alert('You are already logged in.');
        } else {
            router.push('/login');
        }
    }


    const handleLogout = () => {
        setIsLoggedIn(false);
        setUsername('');
        localStorage.removeItem('user');
        sessionStorage.removeItem('user');
        //  redirect to home page
        //router.push('/');

    };

    return (
        <div >
            {isLoggedIn ? (
                <div>
                    <div className=" 2xl:grid grid-flow-col gap-4 items-center hidden">
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
                    <div className='2xl:hidden group flex flex-col relative gap-1 '>
                        <div 
                            className='flex gap-2 items-center cursor-pointer flex-grow' 
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <div className='flex flex-grow'>{username}</div>
                            {/* <span>{username}</span> */}
                            <FaShoppingCart />
                        </div>
                        <div>
                            <nav className={`flex flex-col gap-1 ${isOpen ? 'block' : 'hidden'} gap-1 absolute bg-transparent z-10 top-full w-full`}>
                                <div className="bg-black text-white text-sm p-1 rounded flex items-center justify-center" >
                                    {rol}
                                </div>
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
                </div>

                
            ) : (
                <button className="text-black text-sm py-3" onClick={goLogin}>
                    Login
                </button>
            )}
        </div>
    );
}

export default HeaderLoginLogout;