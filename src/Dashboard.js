import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosinstance from './client'; 
import logo from './4MichBlack.png';
import './SignIn.css'; 

function Dashboard() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [givenRegion, setGivenRegion] = useState(''); 
  const [givenTitle, setGivenTitle] = useState(''); 
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
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else if (error.request) {
        setErrors('Network error. Please check your internet connection.');
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosinstance.get('/api/region', {
        params: {
          region: givenRegion,
        },
      });
      const data = response.data; // Assuming response.data is the array of staff profiles
      const region = givenRegion; 
      console.log(region); 
      console.log(givenRegion); 
      navigate('/region-information', { state: { data, region} }); // Navigate to '/regionprofile' with data as state
      console.log("success");  
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrors('Region not found. Please check the first and last name.');
        } else if (error.response.status === 500) {
          setErrors('Internal server error. Please try again later.');
        } else {
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else if (error.request) {
        setErrors('Network error. Please check your internet connection.');
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosinstance.get('/api/job', {
        params: {
          job: givenTitle,
        },
      });
      const data = response.data; // Assuming response.data is the array of staff profiles
      const job = givenTitle; 
      navigate('/roles-information', { state: { data, job} }); // Navigate to '/regionprofile' with data as state
      console.log("success");  
    } catch (error) {
      if (error.response) {
        if (error.response.status === 404) {
          setErrors('Job not found. Please check the first and last name.');
        } else if (error.response.status === 500) {
          setErrors('Internal server error. Please try again later.');
        } else {
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else if (error.request) {
        setErrors('Job not found. Please check the first and last name.');
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };

  return (
    <div className='bg-beige-light dark:bg-maple-dark md:h-screen w-screen flex flex-col items-center justify-center'>
        <div className="flex flex-col justify-center items-center">
        <img
              src={logo}
              className='w-1/3 md:w-1/4 mt-20 lg:w-1/5 mt-10'
              alt="Logo"
            />
        <h1 className="text-center text-5xl font-extrabold  text-maple-dark dark:text-beige"> Welcome </h1>
        </div>
        <div className="w-full flex flex-col md:flex-row md:mb-40 lg:mb-20 items-center justify-center h-full">
      <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light rounded w-3/4 mt-5 h-[25vh] px-2 md:w-[27vw] lg:w-1/4 h-2/5 mx-4 flex flex-col justify-center items-center '>
      <h3 className="dark:text-slate-900 text-center text-semibold mb-3 text-base md:mb-7 text-xl lg:mb-12">Enter Employee's First and Last Name</h3>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <div className="flex-col flex items-center mb-2 md:mb-7">
            <input
              type="text"
              placeholder='First Name'
              className='px-1 mb-1 text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Last Name'
              className='px-1 mb-1 text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark"
          >
            Search
          </button>
        </form>
      </div>
      <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light rounded w-3/4 mt-5 h-[25vh] px-2 md:w-[27vw] lg:w-1/4 h-2/5 mx-4 flex flex-col justify-center items-center '>
      <h3 className="dark:text-slate-900 text-semibold mb-5 md:mb-12 text-base md:mb-7 text-xl lg:mb-12">Enter Region </h3>
        <form onSubmit={handleSubmit2} className="flex flex-col justify-center items-center">
          <div className="flex-row mb-3 md:mb-7">
            <input
              type="text"
              placeholder='Region'
              className='px-1 mb-1 text-sm md:text-lg mx-2 mb-2 lg:w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'
              value={givenRegion}
              onChange={(e) => setGivenRegion(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark"
          >
            Search
          </button>
        </form>
      </div>
      <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light rounded w-3/4 mt-5 h-[25vh] px-2 md:w-[27vw] lg:w-1/4 h-2/5 mx-4 flex flex-col justify-center items-center '>
      <h3 className="dark:text-slate-900 mb-5 md:mb-12 text-semibold text-base md:mb-7 text-xl lg:mb-12">Enter Job Title </h3>
        <form onSubmit={handleSubmit3} className="flex flex-col justify-center items-center">
          <div className="flex-row mb-3 md:mb-7">
            <input
              type="text"
              placeholder='Job Title'
              className='px-1 mb-1 text-sm md:text-lg mx-2 mb-2 lg:w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'
              value={givenTitle}
              onChange={(e) => setGivenTitle(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark"
          >
            Search
          </button>
        </form>
      </div>
      </div>

      {errors && <div className="ttext-red-800 dark:text-red-200 pb-10 text-center"> <p className="text-xl">{errors}</p></div>}
    </div>
  );
}

export default Dashboard;