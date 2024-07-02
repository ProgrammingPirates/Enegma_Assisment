import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative">
      <input type="text" placeholder="Search" className="bg-white rounded-full pl-10 pr-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600" />
      <span className="absolute left-3 top-2 text-gray-400">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </span>
    </div>
  );
};

export default SearchBar;
