import Image from 'next/image';

function LoginLogo(): JSX.Element {
    
    return (
        <div className='md:col-span-1 md:flex justify-center  col-span-0 hidden mt-12'>
                <div className="max-w-md w-3/4">
                    <Image
                        src="/images/tte-logo.svg"
                        alt="Logo"
                        width={9}
                        height={16}
                        className=' object-contain w-full'
                        priority
                        style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain"
                        }}
                    />
                </div>
            </div>
    );
}

export default LoginLogo;