import React from "react";
import { useLocation } from 'react-router-dom'; //retrieving data from app
import { useNavigate } from 'react-router-dom';

//function StaffProfile({data}){
const RegionProfile = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { data = [], region = '' } = location.state || {};
    console.log('Data:', data); // Check if data is correctly passed
    console.log('Data:', region);
    if (!data || data.length === 0) {
        return <div>No data available</div>;
    }
    const handleSubmit = (e) => {
        navigate('/dashboard');
    };

    console.log(data);
    const parsedData = JSON.parse(data);

    return (
        <div className='bg-beige-light dark:bg-maple-dark min-h-screen  w-screen flex flex-col overflow-wrap-normal'>
            <h1 className="text-5xl font-extrabold text-maple-dark dark:text-amber-100 text-left ml-10 pt-12">
                {region}
            </h1>
            <div>
                <div className="mx-10 mt-12 flex w-[90vw] overflow-wrap-normal items-center justify-start">
                    <ul className="flex-col flex">
                        {parsedData.map((val, index) => (
                            <li key={val.ID}>
                                <div className="flex flex-col pb-5">
                                    <h1 className="text-xl overline font-bold text-maple dark:text-beige">
                                        {val.name}
                                    </h1>
                                    <div className="flex flex-row items-center text-beige-dark dark:text-maple-light">
                                        <p className="text-lg font-semibold"> {val.region}, </p>
                                        <p className="text-base italic px-2 font-semibold"> {val.job_title}</p>
                                    </div>
                                    <p className="dark:text-stone-300"> {val.phone_number}</p>
                                    <div className="flex flex-row items-center">
                                        <p className="text-base dark:text-stone-300"> {val.personal_email} </p>
                                        <p className="text-sm italic px-2 dark:text-stone-300"> (Personal) </p>
                                        <p className="text-base dark:text-stone-300"> | {val.for_mich_email} </p>
                                        <p className="text-sm italic px-2 dark:text-stone-300"> (4Mich) </p>
                                        <p className="text-base dark:text-stone-300"> | {val.school_email} </p>
                                        <p className="text-sm italic px-2 dark:text-stone-300"> (School) </p>
                                    </div>
                                    <p className="dark:text-stone-300"> {val.job_title} </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="w-full flex justify-center mt-10 pt-10">
                <button
                    className="bottom-0 border w-1/5 bg-maple text-beige-light dark:text-maple-dark rounded hover:bg-beige hover:text-maple-dark dark:bg-beige dark:hover:bg-amber-100 dark:hover:text-maple-dark"
                    onClick={handleSubmit}>
                    Return Back to Search </button>
            </div>
        </div>
    )
}
export default RegionProfile; 