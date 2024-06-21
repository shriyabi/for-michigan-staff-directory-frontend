import React from "react";
import { useLocation } from 'react-router-dom'; //retrieving data from app
import { useNavigate } from 'react-router-dom';


//function StaffProfile({data}){
const StaffProfile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state || {};
  console.log('Data:', data); // Check if data is correctly passed
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }
  const handleSubmit = (e) => {
    navigate('/dashboard');
  };

  console.log(data);
  const  parsedData = JSON.parse(data);
  console.log("parsedData" + parsedData);
  console.log("Name" + parsedData[0].name);
  return (
    <div className='bg-beige-light dark:bg-maple-dark h-screen overflow-hidden overflow-x-hidden w-screen flex flex-col justify-center'>
        <h1 className="text-3xl md:text-5xl font-extrabold text-maple-dark dark:text-amber-100 text-left ml-5 md:ml-10 md:pt-12">
          { parsedData[0].name}
        </h1>
      <div className="ml-5 md:ml-10 mr-5 mt-12 flex flex-col md:flex-row w-full">
        <div className="w-screen md:w-1/2">
          <h1 className="text-lg md:text-2xl overline font-bold text-maple dark:text-beige text-left"> Contact Information </h1>
          <div className="flex-col flex text-left text-stone-400">
            <div className="flex flex-row items-center">
              <div className="text-sm text-stone-400 dark:text-beige-dark md:text-lg font-semibold pt-2"> Phone Number: </div>
                <h1 className="text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2 pt-2"  >
                  { parsedData[0].phone_number}
                </h1>
            </div>
            <br></br>
            <div className="text-sm text-stone-400 underline dark:text-beige-dark font-semibold md:text-lg "> Emails </div>
            <div className="flex-row flex items-center">
              <div className="text-xs text-stone-600 dark:text-stone-300 md:text-base italic"> Personal Email: </div>
              
                <h1 className="text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2"  >
                  { parsedData[0].personal_email}
                </h1>
            </div>
            <div className="flex-row flex items-center">
              <div className="text-xs text-stone-600 dark:text-stone-300 md:text-base italic"> 4Mich Email: </div>
              
                <h1 className="text-base md:text-xl text-maple-dark font-bold dark:text-amber-100 text-left px-2"  >
                  { parsedData[0].for_mich_email}
                </h1>
            </div>
            <div className="flex-row flex items-center">
              <div className="text-xs text-stone-600 dark:text-stone-300 md:text-base italic"> School Email: </div>
              
                <h1 className="text-base md:text-xl text-maple-dark font-bold dark:text-amber-100 text-left px-2"  >
                  { parsedData[0].school_email}
                </h1>
            </div>
            <br></br>
            <div className="text-sm text-stone-400 dark:text-beige-dark md:text-lg font-semibold mb-5"> Address </div>
              <h1 className="text-base md:text-xl text-maple-dark dark:text-amber-100 font-bold text-left"  >
              { parsedData[0].staff_address }
              </h1>
          </div>
        </div>
        <div className="w-screen md:w-1/2">
          <h1 className="text-lg md:text-2xl overline font-bold text-maple dark:text-beige text-left"> Job Information </h1>
          <div className="flex-row text-left text-slate-800">
            <div className="flex-row flex items-center">
              <div className="text-sm md:text-lg text-stone-400 dark:text-beige-dark  font-semibold"> Job Title:  </div>
              
                <h1 className="text-base md:text-xl text-maple-dark font-bold text-left dark:text-amber-100  px-2"  >
                { parsedData[0].job_title}
                </h1>
            </div>
            <div className="flex-row flex items-center">
              <div className="text-sm text-stone-400 md:text-lg dark:text-beige-dark  font-semibold"> Date Joined:  </div>
              
                <h1 className="text-base md:text-xl text-maple-dark font-bold text-left dark:text-amber-100  px-2"  >
                { parsedData[0].start_date}
                </h1>
            </div>
            <div className="flex-row flex items-center">
              <div className="text-sm text-stone-400 md:text-lg dark:text-beige-dark font-semibold"> Region:  </div>
              
                <h1 className={`text-base md:text-xl text-maple-dark font-bold text-left mx-2 px-2
                ${ parsedData[0].region === 'Region 1 - Lansing' ? 'bg-red-200' : 'bg-gray-300'}
                ${ parsedData[0].region === 'Region 2 - Northern' ? 'bg-yellow-200' : 'bg-gray-300'}
                ${ parsedData[0].region === 'Region 3 - Detriot' ? 'bg-purple-200' : 'bg-gray-300'}
                ${ parsedData[0].region === 'Region 4 - Ann Arbor' ? 'bg-orange-200' : 'bg-gray-300'}
                ${ parsedData[0].region === 'Region 5 - Western' ? 'bg-blue-200' : 'bg-gray-300'}
              `}>
                  { parsedData[0].region}
                </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center mt-20 pt-20">
        <button
          className="bottom-0 border w-1/2 md:w-1/5 bg-maple text-beige-light rounded hover:bg-beige hover:text-maple-dark dark:bg-beige dark:text-maple-dark dark:hover:bg-amber-100 dark:hover:text-maple-dark"
          onClick={handleSubmit}>
          Return Back to Search </button>
      </div>
    </div>
  )
}
export default StaffProfile; 