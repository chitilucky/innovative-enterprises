import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

const SearchBar = ({onSearch}) => {
    const [search, setSearch] = useState("")
    const handleChange = (e) => {
        const term = e.target.value
        setSearch(term)
        onSearch(term)
    }
  return (
    <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
       <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
    </div>
        <input
         type="search"
         id="default-search"
          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
         placeholder="Search products..."
         value={search}
         onChange={handleChange}
         />
    </div>
  );
};

export default SearchBar;