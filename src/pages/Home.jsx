import { useCountryContext } from "../context/CountryContext";
import Search from "../components/Search";
import Countries from "./Countries";

const AllCountries = () => {
  const { countries, loading, error, search, filtered } = useCountryContext();

  return (
    <>
      <Search />
      {loading && (
        <div className='flex justify-center items-center h-screen bg-green-300'>
          <div className='grid gap-2'>
            <div className='flex items-center justify-center '>
              <div className='w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin'></div>
            </div>
          </div>
        </div>
      )}
      {error && <h1>{error}</h1>}
      <div className='container w-11/12 grid md:grid-cols-2 xl:grid-cols-4 gap-16 mx-auto'>
        {search.length > 1
          ? filtered.map((country) => {
              return <Countries key={country.cca3} country={country} />;
            })
          : countries.map((country) => {
              return <Countries key={country.cca3} country={country} />;
            })}
      </div>
    </>
  );
};

export default AllCountries;

//
