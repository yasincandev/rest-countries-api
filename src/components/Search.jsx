import React from "react";
import { useCountryContext } from "../context/CountryContext";

const Search = () => {
  const { filterRegions, searchCountries } = useCountryContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className='px-4 text-lg my-16'>
      <div className='container mx-auto flex flex-col gap-4 md:flex-row justify-between md:items-center'>
        <div className='relative md:w-2/6'>
          <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
            <svg
              aria-hidden='true'
              className='w-5 h-5 text-gray-500 dark:text-gray-400'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
              ></path>
            </svg>
          </div>
          <input
            type='search'
            name='search'
            id='search'
            autoComplete='off'
            placeholder='Search for a country...'
            className='bg-lightModeBg dark:bg-darkModeElements block p-4 pl-10 border  text-sm w-full  rounded-lg'
            onChange={(e) => searchCountries(e.target.value)}
          />
        </div>

        <div className='relative w-fit'>
          <select
            className='bg-lightModeBg dark:bg-darkModeElements  rounded-md appearance-none py-4 outline-none pl-5 pr-20 shadow-md'
            title='region'
            aria-label='region'
            onChange={(region) => filterRegions(region.target.value)}
          >
            <option value=''>Filter By Region</option>
            <option value='africa'>Africa</option>
            <option value='americas'>America</option>
            <option value='asia'>Asia</option>
            <option value='europe'>Europe</option>
            <option value='oceania'>Oceania</option>
          </select>
          <span className='absolute right-0 top-0 h-full w-16 text-center dark:text-White pointer-events-none flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      </div>
    </form>
  );
};

export default Search;
