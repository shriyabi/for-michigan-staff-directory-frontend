import { useNavigate } from 'react-router-dom';
import logo from './4MichBlack.png';
import React, { useEffect } from 'react';
import './SignIn.css';

function SignIn() {
    const navigate = useNavigate();
    function renderGoogleButton() {
        const width = window.innerWidth;
        let size = 'large';
        if (width < 768) {
            size = 'small';
        } else if (width < 1024) {
            size = 'medium';
        }
        document.getElementById('signInDiv').innerHTML = '';
        window.google.accounts.id.renderButton(
            document.getElementById('signInDiv'),
            { theme: 'outline', size: size }
        );
    }

    useEffect(() => {
        window.google.accounts.id.initialize({
            client_id: '794592945955-l8bl1vel00cbo9g4j0pj24fentervtop.apps.googleusercontent.com',
            callback: handleCredentialResponse
        });
        renderGoogleButton();
    }, []);




    // Add an event listener for window resize
    window.addEventListener('resize', renderGoogleButton);


    //success so navigate to dashbaord
    const handleCredentialResponse = (response) => {
        console.log("Encoded JWT ID token: " + response.credential);
        navigate('/dashboard')
    }
    return (
        <div className='bg-beige-light dark:bg-maple-dark h-screen w-screen flex items-center justify-center'>
            <div className='bg-beige-dark dark:bg-maple w-3/4 h-1/2 md:w-3/5 md:h-2/5 lg:h-1/2 lg:w-2/5 flex items-center rounded justify-center shadow-box dark:shadow-box-light'>
                <div className='bg-beige dark:bg-maple-light flex flex-col rounded justify-center items-center w-3/5 h-3/4 py-12 md:w-3/4 h-3/4 lg:w-3/4 h-3/4'>
                    <div className='h-1/3 w-full flex items-center justify-center'>
                        <img
                            src={logo}
                            className='w-1/2 h-auto md:w-1/3'
                            alt="Logo"
                        />
                    </div>
                    <div className='flex-col justify-center items-center text-center px-5'>
                        <h2 className="mt-3 text-sm md:text-xl md:mt-8 mb-8 lg:text-lg lg:mb-5"> Please use your For Michigan Google Account to Proceed </h2>
                        <div id="signInDiv" className="flex justify-center"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
