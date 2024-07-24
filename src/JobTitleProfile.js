import React from "react";
import { useLocation } from 'react-router-dom'; //retrieving data from app
import { useNavigate } from 'react-router-dom';

//function StaffProfile({data}){
const JobTitleProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data = [], job = '' } = location.state || {};
    console.log('Data:', data); // Check if data is correctly passed
    console.log('Data:', job);
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    const handleSubmit = (e) => {
        navigate('/dashboard');
    };

    const parsedData = JSON.parse(data).sort((a,b) => {
        return parseInt(a.ID) - parseInt(b.ID);
      }); //local compare w str

    return (
        <div className='bg-beige-light dark:bg-maple-dark min-h-screen w-screen flex flex-col overflow-y-scroll overflow-wrap-normal'>
            <h1 className="text-3xl md:text-5xl font-extrabold text-maple-dark dark:text-amber-100 text-left mx-5 md:mx-10 mt-5 lg:mx-12">
                { job }
            </h1>
            <div>
                <div className="ml-5 md:ml-10 mt-5 md:mt-10 lg:ml-12 mt-12 flex w-[90vw] overflow-wrap-normal items-center justify-start">
                    <ul className="flex-col flex">
                        {parsedData.map((val, index) => (
                            <li key={val.ID}>
                                <div className="flex flex-col pb-5">
                                    <h1 className="text-lg md:text-xl overline font-bold text-maple dark:text-beige">
                                        {val.name}
                                    </h1>
                                    <div className="flex flex-col md:flex-row md:items-center text-beige-dark dark:text-maple-light">
                                        <p className="text-base md:text-lg font-semibold"> {val.job_title}, </p>
                                        <p className="text-sm md:text-base italic md:px-2 font-semibold"> {val.region}</p>
                                    </div>
                                    <p className="text-sm md:text-base dark:text-stone-300"> {val.school}</p>
                                    <p className="text-sm md:text-base dark:text-stone-300"> {val.phone_number}</p>
                                    <div className="flex flex-col md:flex-row items-left md:items-center">
                                        <div className="flex flex-row">
                                        <p className="text-sm md:text-base dark:text-stone-300"> {val.personal_email} </p>
                                        <p className="text-xs md:text-sm italic pt-1 px-2 dark:text-stone-300"> (Personal) </p>
                                        <p className="text-sm md:text-base font-bold px-2 text-beige-light dark:text-maple-dark md:text-maple-dark md:dark:text-beige-light"> | </p>
                                        </div>
                                        <div className="flex flex-row">
                                        <p className="text-sm md:text-base dark:text-stone-300"> {val.for_mich_email} </p>
                                        <p className="text-xs md:text-sm italic pt-1 px-2 dark:text-stone-300"> (4Mich) </p>
                                        <p className="text-sm md:text-base font-bold px-2 text-beige-light dark:text-maple-dark md:text-maple-dark md:dark:text-beige-light"> | </p>
                                        </div>
                                        <div className="flex flex-row">
                                        <p className="text-sm md:text-base dark:text-stone-300"> {val.school_email} </p>
                                        <p className="text-xs md:text-sm italic px-2 dark:text-stone-300"> (School) </p>
                                        </div>
                                    </div>
                                    <p className="text-sm md:text-base dark:text-stone-300"> {val.staff_address} </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <button
                    className="bottom-0 mt-10 mb-5 px-2 border w-1/2 md:w-1/3 lg:w-1/5 bg-maple text-beige-light dark:text-maple-dark rounded hover:bg-beige hover:text-maple-dark dark:bg-beige dark:hover:bg-amber-100 dark:hover:text-maple-dark"
                    onClick={handleSubmit}>
                    Return Back to Search </button>
            </div>
        </div>
    )
}
export default JobTitleProfile; 