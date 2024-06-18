
function Dashboard(){
    return (
        <div className='bg-beige-light dark:bg-maple-dark h-screen w-screen flex flex-col items-center justify-center'> 
          <h2> How to Use: </h2>
          <h3> Enter Staff First and Last Name </h3>
          <div className='bg-beige-dark dark:bg-maple-light w-4/5 h-2/5 flex flex-col justify-center items-center'>
            <div className="flex-row mb-7 ">
            <input
              type="firstname"
              placeholder='First Name'
              className='mx-2 px-1 border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300'
            />
            <input
              type="lastname"
              placeholder='Last Name'
              className='mx-2 px-1 border-2 border-slate-700 rounded border-lg focus:border-blue-300 invalid:border-red-300'
            />
            </div>
            <button 
            type="submit" className="bg-beige dark:bg-maple rounded-lg px-2 py-1 hover:bg-beige-light dark:hover:bg-maple-dark">
              Search
            </button>
          </div>
        </div>
      )
}

export default Dashboard; 