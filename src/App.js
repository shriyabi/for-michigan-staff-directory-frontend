import './App.css';
import logo from './4MichBlack.png';


function App() {
  return (
    <div className='bg-beige-light h-screen w-screen flex items-center justify-center'>
        <div className='bg-beige-dark h-3/5 w-1/2 flex items-center justify-center'>
          <div className='w-3/4 h-4/5 bg-beige flex-col justify-center'>
            <div className='px-5 h-1/3 w-full flex items-center justify-center'>
              <img 
              src={logo}
              className='w-1/3 h-auto'
              alt="Logo" 
            />
            </div>
            <div className='flex-col'>
              <input
                className='text-left px-1 py-2 rounded-md'
                name='email'
              />
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
