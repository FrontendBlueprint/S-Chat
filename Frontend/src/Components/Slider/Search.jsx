import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Search() {
  return (
    <div className='flex items-center h-12 w-full max-w-md mx-auto'>
      <div className='relative flex-grow h-full'>
        <input 
          type="text" 
          placeholder='Search Chat' 
          className='w-full h-full px-5 rounded-lg border bg-gray-500 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition-all duration-300 ease-in-out'
        />
      </div>
      <button 
        className='ml-2 h-full px-4 bg-gray-500 rounded-lg hover:bg-gray-400 focus:outline-none flex items-center justify-center transition-all duration-300 ease-in-out'
      >
        <FiSearch className='text-2xl transition-transform duration-300 ease-in-out hover:scale-110' />
      </button>
    </div>
  );
}

export default Search;