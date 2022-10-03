import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className='bg-lightModeBg dark:bg-darkModeElements py-5 px-4 shadow-md'>
      <div className='container mx-auto flex items-center'>
        <h1
          onClick={() => navigate("/")}
          className='text-xl sm:text-2xl md:text-3xl font-extrabold mr-auto cursor-pointer'
        >
          Where in the world?
        </h1>

        <button
          type='button'
          className='flex gap-4 items-center'
          onClick={() => document.body.classList.toggle("dark")}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z'
            />
          </svg>

          <span className='sm:text-lg'>Dark mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
