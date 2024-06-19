import React, { useState } from 'react';
import SignIn from './SignIn';

function App(){
  return (
    <>
      <SignIn/>
    </>
  )
}
export default App; 

/*function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errors, setErrors] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosinstance.get('/api/search', {
        params: {
          first: firstName,
          last: lastName,
        },
      });
      const data = response.data; // Assuming response.data is the array of staff profiles
      navigate('/staff-information', { state: { data } }); // Navigate to '/staffprofile' with data as state
      console.log("success");  
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrors('Staff not found. Please check the first and last name.');
        } else if (error.response.status === 500) {
          setErrors('Internal server error. Please try again later.');
        } else {
          setErrors('An error occurred. Please try again later.');
        }
      } else if (error.request) {
        setErrors('Network error. Please check your internet connection.');
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };

  return (
    <div className='bg-beige-light dark:bg-maple-dark h-screen w-screen flex flex-col items-center justify-center'>
      <h2>How to Use:</h2>
      <h3>Enter Staff First and Last Name</h3>
      <div className='bg-beige-dark dark:bg-maple-light w-4/5 h-2/5 flex flex-col justify-center items-center'>
        <form onSubmit={handleSubmit}>
          <div className="flex-row mb-7">
            <input
              type="text"
              placeholder='First Name'
              className='mx-2 px-1 border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Last Name'
              className='mx-2 px-1 border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-beige dark:bg-maple rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark"
          >
            Search
          </button>
        </form>
      </div>

      {errors && <p>{errors}</p>}
    </div>
  );
}

export default App; */

/*import './App.css';
import logo from './4MichBlack.png';
import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard.js';
import axios from './client'; 


function App() {
  //fetching data
  const [data, setData] = useState([]); 

  useEffect(() => {
    const fetchingData = async() => {
      try{
        const response = await axios.get('/search', {
          params: {
            first: 'Shriya',
            last: 'Biddala'
          }
        }); 
        console.log("success"); 
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchingData();
  } , []); //[] ensures run only once

  return (
    <div className="w-screen">
            <h1>Data from Backend: </h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>
                        {item['First Name']} {item['Last Name']}
                    </li>
                ))}
            </ul>
    
    {/*<div className='bg-beige-light dark:bg-maple-dark h-screen w-screen'> 
      //change the color depending on the region 
      // first name, last name, region, phone number, personal email
      school email**, 4mich email, address*, job title, start date 
      {/*<h1 className="text-3xl font-extrabold text-maple-dark text-left ml-5 pt-10"> Shriya Biddala </h1>
      <div className="ml-5 mr-5 mt-20 flex flex-row w-full">
        <div className="w-1/2">
          <h1 className="text-lg overline font-bold text-maple text-left"> Contact Information </h1>
          <div className="flex-row text-left text-stone-400">
            <div className="text-stone-400 underline"> Phone Numbers </div>
            <div className="text-stone-600"> Primary Phone Number </div>
            <div className="text-stone-600"> Secondary Phone Number </div>
            <br></br>
            <div className="text-stone-400 underline"> Emails </div>
            <div className="text-stone-600"> Personal Email </div>
            <div className="text-stone-600"> 4Mich Email </div>
            <div className="text-stone-600"> School Email </div>
            <br></br>
            <div className="text-stone-400"> Address </div>
            
          </div>
        </div>
        <div className="w-1/2">
        <h1 className="text-lg overline font-bold text-maple text-left"> Job Information </h1>
          <div className="flex-row text-left text-slate-800">
            <div className="text-stone-400"> Job Title </div>
            <div className="text-stone-400"> Region </div>
          </div>
        </div>
      </div>

    </div> 
    </div>
  )
}

export default App; */
