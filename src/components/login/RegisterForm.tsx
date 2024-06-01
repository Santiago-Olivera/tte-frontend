import LoginEye from '@/components/login/LoginEye';
import React, { useContext, useEffect, useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { IsLoggedInContext } from './isLoggedInContext';

function RegisterForm(): JSX.Element {
    // Get the setIsLoggedIn function from the context
    const { setIsLoggedIn } = useContext(IsLoggedInContext);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    /* To Handle username and password as mandatory fields */
    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };
    const handlePasswordChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword2(event.target.value);
    };

    /* Handle the validation of a standar email structure */
    useEffect(() => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsEmailValid(emailRegex.test(email));
    }, [email]);

     // Get the router instance:
     const router = useRouter();

     const goLogin = (event: React.MouseEvent) => {
        event.preventDefault();
        router.push('/login');
    }


    /* Handle validation of credentials from the backed */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        
       fetch('http://localhost:8080/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, username : username ,password : password}),
        })
        .then(response => {
            if (response.status === 201) {
                window.alert('Created successfully');
                router.push('/login');
            } else if (response.status === 400) {
                window.alert('Username or email already exists');
                throw new Error('Username or email already exists');
            } else {
                throw new Error('Network response was not ok');
            }
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
                    <div className="flex items-center justify-start gap-4 mb-4">
                        
                        <h1 className="text-3xl block text-center font-semibold">
                            Sign up
                        </h1>
                        <FaUser size={20}/>
                    </div>
                    <div className='mb-8'>
                        <h3 className="text-sm ">
                            Register to add items to your wishlist and make purchases
                        </h3>
                    </div>
                    <hr className="mt-3"></hr>
                    <div className="mt-8">
                        <label htmlFor="username" className="block text-base mb-2">
                            Username
                        </label>
                        <input type="text" id="username" className="border w-full text-base px-5 py-3 
                        focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter username" 
                        value={username} onChange={handleUsernameChange}/>
                    </div>
                    <div className="mt-8">
                        <label htmlFor="email" className="block text-base mb-2">
                            Email
                        </label>
                        <input type="text" id="email" className="border w-full text-base px-5 py-3 
                        focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter your Email" 
                        value={email} onChange={handleEmailChange} />
                    </div>
                    {/* Login Eye and password field */}
                    <LoginEye password={password} onPasswordChange={handlePasswordChange} label = "Password" id="password"/>

                    <LoginEye password={password2} onPasswordChange={handlePasswordChange2} label="Repeat Password" id="password2"/>
                    {/* Sign up button */}
                    <div className="mt-8">
                        <button type="submit" className=" border-2 border-black bg-black
                        text-white py-3 w-full rounded-md hover:bg-gray-200 hover:text-black 
                        font-semibold text-sm"disabled={!username || !email || !password || !isEmailValid || password !== password2}>
                            Sign up
                        </button>
                    </div>
                    <div className="mt-10 flex justify-center items-center gap-2">
                        <p className=" text-sm">
                            Do you have an account? 
                        </p>
                        <button className="text-black font-semibold " onClick={goLogin}>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterForm;