import { useNavigate } from 'react-router-dom';
import logo from './4MichBlack.png';
import React, {useEffect} from 'react';

function SignIn() {
    const navigate = useNavigate(); 
  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id: '794592945955-l8bl1vel00cbo9g4j0pj24fentervtop.apps.googleusercontent.com',
      callback: handleCredentialResponse
    });
    window.google.accounts.id.renderButton(
      document.getElementById('signInDiv'),
      { theme: 'outline', size: 'large' }  // customization attributes
    );
  }, []);

  //success so navigate to dashbaord
  const handleCredentialResponse = (response) => {
    console.log("Encoded JWT ID token: " + response.credential);
    navigate('/dashboard')
  }
  return (
    <div className='bg-beige-light dark:bg-maple-dark h-screen w-screen flex items-center justify-center'>
      <div className='bg-beige-dark dark:bg-maple h-2/3 w-2/5 flex items-center justify-center'>
        <div className='w-3/5 py-12 h-3/5 bg-beige dark:bg-maple-light flex-col justify-center items-center'>
          <div className='h-1/3 w-full flex items-center justify-center'>
            <img
              src={logo}
              className='w-1/2 h-auto'
              alt="Logo"
            />
          </div>
          <div className='flex-col justify-center items-center text-center px-5'>
            <h2 className="mt-8 mb-5 text-lg"> Please use your For Michigan Google Account to Proceed </h2>
            <div id="signInDiv" className="flex justify-center"></div> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
