import React from "react";
import { Link } from "react-router-dom";
import { useCountryContext } from "../context/CountryContext";
const Countries = ({ country }) => {
  const { loading, error } = useCountryContext();

  const { name, flags, population, region, capital, cca3 } = country;

  if (error) {
    return <h1>{error}</h1>;
  }

  const pathName = name.common.replace(/ /g, "-").toLowerCase();

  return (
    <>
      {loading && (
        <div className='flex justify-center items-center h-screen bg-green-300'>
          <div className='grid gap-2'>
            <div className='flex items-center justify-center '>
              <div className='w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin'></div>
            </div>
          </div>
        </div>
      )}
      <Link to={`/country/${pathName}`}>
        <div
          key={cca3}
          className='bg-lightModeElements dark:bg-darkModeElements rounded-lg shadow-lg'
        >
          <img
            src={flags.png}
            alt={name.common}
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <div className='p-4'>
            <h2 className='text-xl font-bold'>{name.common}</h2>
            <p className='text-sm text-gray-500'>
              Population: <span className='font-bold'>{population}</span>
            </p>
            <p className='text-sm text-gray-500'>
              Region: <span className='font-bold'>{region}</span>
            </p>
            <p className='text-sm text-gray-500'>
              Capital: <span className='font-bold'>{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Countries;
