import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosinstance from './client';
import logo from './4MichBlack.png';
import './SignIn.css';
import { staffProfile } from './sql.js';
import { regionProfile } from './sql.js';
import { jobProfile } from './sql.js';

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
      const data = staffProfile(firstName, lastName); // Assuming response.data is the array of staff profiles
      navigate('/staff-information', { state: { data } }); // Navigate to '/staffprofile' with data as state
      console.log("success");
    } catch (error) {
      console.log(error);
      if (error.code) {
        if (error.code === 404) {
          setErrors('Staff not found. Please check the first and last name.');
        } else {
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    try {
      const data = regionProfile(givenRegion)
      const region = givenRegion;
      console.log(region);
      console.log(givenRegion);
      navigate('/region-information', { state: { data, region } }); // Navigate to '/regionprofile' with data as state
      console.log("success");
    } catch (error) {
      console.log(error);
      if (error.code) {
        if (error.code === 404) {
          setErrors('Region not found. Please verify the region code and/or name.');
        } else {
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };
  const handleSubmit3 = async (e) => {
    e.preventDefault();
    try {
      const data = jobProfile(givenTitle); // Assuming response.data is the array of staff profiles
      const job = givenTitle;
      navigate('/roles-information', { state: { data, job } }); // Navigate to '/regionprofile' with data as state
      console.log("success");
    } catch (error) {
      console.log(error);
      if (error.code) {
        if (error.code === 404) {
          setErrors('Job not found. Please verify the region code and/or name.');
        } else {
          setErrors('An error occurred. Contact Shriya for support.');
        }
      } else {
        setErrors('Error fetching data. Please try again later.');
      }
    }
  };

  //dropdown
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ['Region 1 - Lansing', 'Region 2 - Northern', 'Region 3 - Detroit', 'Region 4 - Ann Arbor', 'Region 5 - Western'];
  const options2 = ['Senior Leadership', 'Regional Organizing Director', 'Campus Organizer', 'Fellow'];
  
  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setGivenRegion(option); // Set the selected option as the input value
    setIsOpen(false); // Close the dropdown
  };
  const handleOptionClick2 = (option2) => {
    setGivenRegion(option2); // Set the selected option as the input value
    setIsOpen(false); // Close the dropdown
  };
  
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='bg-beige-light dark:bg-maple-dark md:min-h-screen w-screen flex flex-col items-center justify-center'>
      <div className="flex flex-col justify-center items-center">
        <img
          src={logo}
          className='w-1/3 md:w-1/4 mt-20 lg:w-1/5 mt-10'
          alt="Logo"
        />
        <h1 className="text-center text-5xl font-extrabold  text-maple-dark dark:text-beige mb-10"> Welcome </h1>
      </div>
      <div className="w-full flex flex-col lg:flex-row md:mb-40 lg:mb-20 items-center justify-center h-full">
        <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light rounded w-3/4 mt-5 h-[25vh] px-2 py-4 md:w-1/2 md:mb-5 lg:w-1/4 md:h-3/4 mx-4 flex flex-col justify-center items-center '>
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
        <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light py-4 rounded w-3/4 mt-5 h-[25vh] px-2 md:w-1/2 md:mb-5 lg:w-1/4 md:h-3/4 mx-4 flex flex-col justify-center items-center '>
          <h3 className="dark:text-slate-900 text-semibold mb-5 md:mb-12 text-base md:mb-7 text-xl lg:mb-12">Enter Region </h3>
          <form onSubmit={handleSubmit2} className="flex flex-col justify-center items-center">
            <div className="flex-col flex items-center justify-center items-center mb-3">
              <select
                type="dropdown"
                name="Region"
                className="px-1 py-1 mb-1 text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300"
                value={givenRegion}
                onChange={(e) => setGivenRegion(e.target.value)}>
                  <option value="Select Region" className='px-1 mb-1 italic text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'> Select Region</option>
                  <option value="Senior Leadership">Senior Leadership</option>
                  <option value="Region 1 - Lansing">Region 1 - Lansing</option>
    <option value="Region 2 - Northern">Region 2 - Northern</option>
    <option value="Region 3 - Detroit">Region 3 - Detroit</option>
    <option value="Region 4 - Ann Arbor">Region 4 - Ann Arbor</option>
    <option value="Region 5 - Western">Region 5 - Western</option>
                </select>
                <button
                type="submit"
                className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark mt-2"
              >
                Search
              </button>
              {/*{isOpen && (
                <div className=" w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1">
                    {options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="w-full flex flex-col text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )}*/}
            </div>
            {/*{!isOpen && (  //show the submit button only if dropdown is not open
              <button
                type="submit"
                className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark mt-2"
              >
                Search
              </button>
            )} */}
          </form>
        </div>
        <div className='bg-beige-dark shadow-sm-box dark:bg-maple-light dark:shadow-sm-box-light py-4 rounded w-3/4 mt-5 h-[25vh] px-2 md:w-1/2 md:h-3/4 lg:w-1/4 mx-4 flex flex-col justify-center items-center '>
          <h3 className="dark:text-slate-900 mb-5 md:mb-12 text-semibold text-base md:mb-7 text-xl lg:mb-12">Enter Job Title </h3>
          <form onSubmit={handleSubmit3} className="flex flex-col justify-center items-center">
          <div className="flex-col flex items-center justify-center mb-3 md:mb-3">
          <select
                type="dropdown"
                name="Region"
                className="px-1 py-1 mb-1 text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300"
                value={givenTitle}
                onChange={(e) => setGivenTitle(e.target.value)}>
                  <option value="Select Job Title" className='px-1 mb-1 italic text-sm md:text-lg mx-2 mb-2 w-full border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'> Select Job Title</option>
                  <option value="Senior Leadership">Senior Leadership</option>
    <option value="Regional Organizing Director">Regional Organizing Director</option>
    <option value="Campus Organizer">Campus Organizer</option>
    <option value="Fellow">Fellow</option>
                </select>
                <button
                type="submit"
                className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark mt-2"
              >
                Search
              </button>
              {/*{isOpen && (
                <div className=" w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1">
                    {options2.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick2(options2)}
                        className="w-full flex flex-col text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              )} */}
            </div>
            {/*{!isOpen && (  //show the submit button only if dropdown is not open
              <button
                type="submit"
                className="bg-beige dark:bg-maple text-sm md:text-base rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark mt-2"
              >
                Search
              </button>
            )}*/}
          </form>
        </div>
      </div>

      {errors && <div className="ttext-red-800 dark:text-red-200 pb-10 text-center"> <p className="text-xl">{errors}</p></div>}
    </div>
  );
}

export default Dashboard;