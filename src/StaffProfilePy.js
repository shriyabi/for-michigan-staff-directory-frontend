import React from "react";
import { useLocation } from 'react-router-dom'; //retrieving data from app
import { useNavigate } from 'react-router-dom';


//function StaffProfile({data}){
const StaffProfileCopy = () => {
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

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString().split('T')[0]; // Extracts 'YYYY-MM-DD' from ISO string
  }

    return (
        <div className='bg-beige-light dark:bg-maple-dark h-screen w-screen flex flex-col justify-center'>
          {/*//change the color depending on the region 
          // first name, last name, region, phone number, personal email
      school email**, 4mich email, address*, job title, start date */}
          {data.map(item => (
            <h1 className="text-5xl font-extrabold text-maple-dark dark:text-amber-100 text-left ml-10 pt-12" key={item.id}>
              {item['First Name']} {item['Last Name']}
            </h1>))}
          <div className="ml-10 mr-5 mt-12 flex flex-row w-full">
            <div className="w-1/2">
              <h1 className="text-2xl overline font-bold text-maple dark:text-beige text-left"> Contact Information </h1>
              <div className="flex-col flex text-left text-stone-400">
                <div className="flex flex-row items-center">
                  <div className="text-stone-400 dark:text-beige-dark  text-lg font-semibold pt-2"> Phone Number: </div>
                  {data.map(item => (
                    <h1 className="text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2 pt-2" key={item.id}>
                      {item['Phone Number']}
                    </h1>))}
                </div>
                <br></br>
                <div className="text-stone-400 underline dark:text-beige-dark font-semibold text-lg "> Emails </div>
                <div className="flex-row flex items-center">
                  <div className="text-stone-600 dark:text-stone-300 text-base italic"> Personal Email: </div>
                  {data.map(item => (
                    <h1 className="text-xl text-maple-dark dark:text-amber-100 font-bold text-left px-2" key={item.id}>
                      {item['Personal Email']}
                    </h1>))}
                </div>
                <div className="flex-row flex items-center">
                  <div className="text-stone-600 dark:text-stone-300 text-base italic"> 4Mich Email: </div>
                  {data.map(item => (
                    <h1 className="text-xl text-maple-dark font-bold dark:text-amber-100 text-left px-2" key={item.id}>
                      {item['4Mich Email']}
                    </h1>))}
                </div>
                <div className="flex-row flex items-center">
                  <div className="text-stone-600 dark:text-stone-300 text-base italic"> School Email: </div>
                  {data.map(item => (
                    <h1 className="text-xl text-maple-dark font-bold dark:text-amber-100 text-left px-2" key={item.id}>
                      {item['School Email']}
                    </h1>))}
                </div>
                <br></br>
                <div className="text-stone-400 dark:text-beige-dark text-lg font-semibold"> Address </div>
                {data.map(item => (
                    <h1 className="text-xl text-maple-dark dark:text-amber-100 font-bold text-left" key={item.id}>
                      {item['Address']}
                    </h1>))}
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-2xl overline font-bold text-maple dark:text-beige text-left"> Job Information </h1>
              <div className="flex-row text-left text-slate-800">
              <div className="flex-row flex items-center">
                <div className="text-stone-400 text-lg dark:text-beige-dark  font-semibold"> Job Title:  </div>
                {data.map(item => (
                    <h1 className="text-xl text-maple-dark font-bold text-left dark:text-amber-100  px-2" key={item.id}>
                      {item['Job Title']}
                    </h1>))}
                </div>
                <div className="flex-row flex items-center">
                <div className="text-stone-400 text-lg dark:text-beige-dark  font-semibold"> Date Joined:  </div>
                {data.map(item => (
                    <h1 className="text-xl text-maple-dark font-bold text-left dark:text-amber-100  px-2" key={item.id}>
                      {formatDate(item['Start Date'])}
                    </h1>))}
                </div>
                <div className="flex-row flex items-center">
                <div className="text-stone-400 text-lg dark:text-beige-dark font-semibold"> Region:  </div>
                {data.map(item => (
                    <h1 className={`text-xl text-maple-dark font-bold text-left mx-2 px-2
                      ${item['Region'] === 'Region 1 - Lansing' ? 'bg-red-200' : 'bg-gray-300'}
                      ${item['Region'] === 'Region 2 - Northern' ? 'bg-yellow-200' : 'bg-gray-300'}
                      ${item['Region'] === 'Region 3 - Detriot' ? 'bg-purple-200' : 'bg-gray-300'}
                      ${item['Region'] === 'Region 4 - Ann Arbor' ? 'bg-orange-200' : 'bg-gray-300'}
                      ${item['Region'] === 'Region 5 - Western' ? 'bg-blue-200' : 'bg-gray-300'}
                    `} key={item.id}>
                      {item['Region']}
                    </h1>))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center mt-20 pt-20">
            <button
                className="bottom-0 border w-1/5 bg-maple text-beige-light rounded hover:bg-beige hover:text-maple-dark dark:bg-beige dark:text-maple-dark dark:hover:bg-amber-100 dark:hover:text-maple-dark"
                onClick={handleSubmit}> 
                Return Back to Search </button>
            </div>
        </div>
    )
}
export default StaffProfileCopy; 