import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const CountryDetail = () => {
  const [country, setCountry] = React.useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [borderNames, setBorderNames] = useState([]);
  const params = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchCountry = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/name/${params.name}`
        );
        const data = response.data[0];
        setCountry(data);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchCountry();
  }, [params.name]);

  useEffect(() => {
    const fetchCountryByBorder = async (border) => {
      setLoading(true);
      setBorderNames([]);
      try {
        const response = await axios.get(
          `https://restcountries.com/v3.1/alpha/${border}`
        );
        const data = response.data[0];
        setBorderNames((prev) => [...prev, data.name.common]);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    if (country?.borders.length > 0) {
      country?.borders.forEach((border) => {
        fetchCountryByBorder(border);
      });
    }
  }, [country?.borders]);

  if (!country && loading) {
    return (
      <div className='flex justify-center items-center h-screen bg-green-300'>
        <div className='grid gap-2'>
          <div className='flex items-center justify-center '>
            <div className='w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin'></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  const {
    flags,
    name,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
  } = country;

  const nativeName = Object.keys(country.name.nativeName).map(
    (name) => country.name.nativeName[name].official
  );

  return (
    <>
      <div className='container mx-auto mb-16'>
        <button
          className='px-8 py-2 bg-white text-gray-600 shadow-md 
        rounded-lg tracking-wide dark:bg-gray-700 dark:text-white mt-10'
          onClick={() => handleBack()}
        >
          <i className='fas fa-arrow-left text-gray fs-1 mr-2'></i>Back
        </button>
      </div>

      <div className='grid grid-cols-1 gap-11 md:grid-cols-2 mb-6 mx-auto w-11/12'>
        <img
          src={flags.png}
          alt={name.common}
          className='max-w-full w-full h-full max-h-72 object-contain'
        />

        <div className='flex flex-col items-center ml-10 px-3 py-0 gap-7'>
          <h2 className='font-bold text-2xl capitalize'>{name.common}</h2>
          <div className='flex flex-row text-left gap-20'>
            <ul className='p-0 leading-10 text-base -mt-4 list-none '>
              <li className='text-xl '>
                <span className='font-bold'>Native Name: </span>
                {nativeName[0]}
              </li>
              <li className='text-xl '>
                <span className='font-bold'>Population: </span>
                {population.toLocaleString()}
              </li>
              <li className='text-xl '>
                <span className='font-bold'>Region: </span>
                {region}
              </li>
              <li className='text-xl '>
                <span className='font-bold'>Sub Region: </span>
                {subregion}
              </li>
              <li className='text-xl '>
                <span className='font-bold'>Capital: </span>
                {capital}
              </li>
            </ul>
            <ul className='p-0 leading-10 text-base -mt-4 list-none '>
              <li>
                <span className='font-bold'>Top Level Domain: </span>
                {tld}
              </li>
              <li>
                <span className='font-bold'>Currencies: </span>
                {Object.values(currencies).map((currency) => currency.name)}
              </li>
              <li>
                <span className='font-bold'>Languages: </span>
                {Object.values(languages).map((language) => language)}
              </li>
            </ul>
          </div>
          <div className='flex flex-row  gap-7 mt-16  items-center flex-wrap'>
            <p className='mt-1 text-lg '>Border Countries: </p>
            {borderNames.length > 0
              ? borderNames.map((name) => {
                  return (
                    <Link
                      key={name}
                      to={`/country/${name}`}
                      className=' px-2 py-4 bg-white text-gray-600 shadow-md'
                    >
                      {name}
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryDetail;

/* <div className=' flex items-center justify-center mx-auto p-8 pl-0 pr-0'>
        <div
          className='flex items-center justify-center mx-auto p-8 pl-0 pr-0'
          key={cca3}
        >
          <img
            src={flags.png}
            className='rounded-md shadow-md shadow-gray-700 dark:shadow-black max-h-40 cursor-pointer'
            alt={"Flag of " + name.common}
          />

          <div className='p-8 pl-10 mt-3 ml-14'>
            <h2 className='font-bold text-2xl mb-8'>{name.common}</h2>
            <div className='flex'>
              <div className='space-y-2 text-base'>
                <p>
                  <b>Native Name: </b>
                  {Object.values(name.nativeName).map(
                    (nativeName) => nativeName.official
                  )}
                </p>
                <p>
                  <b>Population: </b>
                  {population}
                </p>
                <p>
                  <b>Region: </b> {region}
                </p>
                <p>
                  <b>Sub Region: </b>
                  {subregion}
                </p>
                <p>
                  <b>Capital: </b>
                  {capital[0]}
                </p>
              </div>
              <div className='space-y-2 text-base ml-28'>
                <p>
                  <b>Top Level Domain: </b>
                  {tld}
                </p>
                <p>
                  <b>Currencies: </b>
                  {Object.values(currencies).map((currency) => currency.name)}
                </p>
                <p>
                  <b>Languages: </b>
                  {Object.values(languages).map((language) => language)}
                </p>
              </div>
            </div>
            <div className='flex items-center mt-16 ml-0'>
              <p className=''>Border Countries: </p>{" "}
              <div className='flex  items-center'>
                {borderNames.length > 0
                  ? borderNames.map((name) => {
                      return (
                        <button key={name}>
                          <Link
                            to={`/country/${name}`}
                            className=' px-4 py-2 bg-white text-gray-600 shadow-md 
                                  rounded-lg tracking-wide dark:bg-gray-700 dark:text-white'
                          >
                            {name}
                          </Link>
                        </button>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div> */
