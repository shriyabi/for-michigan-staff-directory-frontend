import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosinstance from './client'; 

function Dashboard() {
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
      <div className='bg-beige-dark dark:bg-maple-light w-2/3 h-2/5 flex flex-col justify-center items-center'>
      <h3 className="dark:text-slate-900 mb-12 text-xl">Enter Staff First and Last Name</h3>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center">
          <div className="flex-row mb-7">
            <input
              type="text"
              placeholder='First Name'
              className='mx-2 px-1 text-lg border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder='Last Name'
              className='mx-2 px-1 border-2 text-lg border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300 dark:bg-gray-300'
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

      {errors && <p className="text-xl text-red-800">{errors}</p>}
    </div>
  );
}

export default Dashboard;