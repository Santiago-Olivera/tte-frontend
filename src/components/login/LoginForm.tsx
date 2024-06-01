


import LoginEye from '@/components/login/LoginEye';
import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { IsLoggedInContext } from './isLoggedInContext';

function LoginForm(): JSX.Element {
    // Get the setIsLoggedIn function from the context
    const { setIsLoggedIn } = useContext(IsLoggedInContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    /* To Handle username and password as mandatory fields */
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    /* Handle the validation of a standar email structure */
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(username));
    }, [username]);

     // Get the router instance:
     const router = useRouter();
    
     const goRegister = (event: React.MouseEvent) => {
        event.preventDefault();
        router.push('/register');
    }


    /* Handle validation of credentials from the backed */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        

       fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: username, password }),
        })
            .then(response => {
                if (response.status === 200) {
                    window.alert('Successfully logged in');
                    return response.json();
                } else if (response.status === 403) {
                    throw new Error('Invalid credentials');
                } else if (response.status === 400) {
                    window.alert('User is already logged in');
                    throw new Error('User is already logged in');
                } else {
                    throw new Error('Network response was not ok');
                }
            })
            .then(data => {
                const user = {
                    token: data.token,
                    username: data.username,
                  };
                if (rememberMe) {
                    localStorage.setItem('user', JSON.stringify(user));
                } else {
                    sessionStorage.setItem('user', JSON.stringify(user));
                }
                setIsLoggedIn(true);
                
                // handle successful login here, e.g. redirect to another page
                
                // Redirect to the landing page:
                router.push('/landing_page');
            })
            .catch(error => {
                setErrorMessage(error.message);
                console.error('There has been a problem with your fetch operation:', error);
                window.alert(errorMessage);
            });
    };

    return (
        <div className="md:col-span-1 col-span-2 flex justify-center ">
            <div className="md:w-1/2  sm:min-w-96  p-6 shadow-lg bg-white rounded-md mx-auto">
                <form onSubmit={handleSubmit} >
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
                    <LoginEye password={password} onPasswordChange={handlePasswordChange} label="password" id="password"/>
                    {/* Remember me part */}
                    <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <input type="checkbox" id="rememberMe" checked={rememberMe} 
                            onChange={e => setRememberMe(e.target.checked)} className="mr-2"></input>
                            <label className='text-sm'>Remember Me</label>
                        </div>
                        <div>
                            <a href="#" className="text-sm font-semibold">Forgot Password?</a>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button type="submit" className=" border-2 border-black bg-black
                        text-white py-3 w-full rounded-md hover:bg-gray-200 hover:text-black 
                        font-semibold text-sm"disabled={!username || !password || !isEmailValid}>
                            Login
                        </button>
                    </div>
                    <div className="mt-10 flex justify-center items-center gap-2">
                        <p className=" text-sm">
                            Don&apos;t have an account? 
                        </p>
                        <button className="text-black font-semibold" onClick={goRegister}>
                            Register
                        </button>
                       
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginForm;