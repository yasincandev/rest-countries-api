import { useContext, createContext, useState, useEffect } from "react";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [borderNames, setBorderNames] = useState(null);

  const fetchAllCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://restcountries.com/v3.1/all");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();

      setCountries(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCountries();
  }, []);

  const searchCountries = (e) => {
    setLoading(true);
    setSearch(e);
    if (search) {
      const filteredCountries = countries.filter((country) => {
        return Object.values(country.name.common)
          .join("")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setFiltered(filteredCountries);
      setLoading(false);
    } else {
      setFiltered(countries);
    }
  };

  const filterRegions = async (region) => {
    setLoading(true);

    const response = await fetch(
      `https://restcountries.com/v3.1/${region ? `/region/${region}` : "all"}`
    );
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const data = await response.json();
    setCountries(data);
    setLoading(false);
  };

  return (
    <CountryContext.Provider
      value={{
        countries,
        loading,
        error,
        search,
        setSearch,
        region,
        setRegion,
        filterRegions,
        searchCountries,
        filtered,
        borderNames,
        setBorderNames,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountryContext = () => {
  return useContext(CountryContext);
};
