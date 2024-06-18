import './App.css';
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
        const response = await axios.get('/api/search', {
          params: {
            first: 'Shriya',
            last: 'Biddala'
          }
        }); 
        setData(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    };
    fetchingData();
  } , []); //[] ensures run only once

  return (
    <div className="w-screen">
            <h1>Data from Backend:</h1>
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

    </div> */}
    </div>
  )
}

export default App;
