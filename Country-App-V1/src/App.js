import React, { useState, useEffect } from 'react'
//components
import Countries from './Components/Countries'
import Search from './Components/Search'
//css file
import './App.css'
//main data url
const url = 'https://restcountries.com/v3.1/all'

const App = () => {
  //useStates
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState(countries);
  //data fetching
  const fetchData = async (url) => {
    setIsLoading(true);
    //try-catch statements
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFilteredCountries(data);
      setIsLoading(false);
      setError(null);
    } catch (error) {
      setIsLoading(false);
      setError(error);
    }
  }
  //use effect
  useEffect(() => {
    fetchData(url);
  }, [])
  //country remove handler
  const handleRemoveCountry = (name) => {
    setFilteredCountries(filteredCountries.filter((country) =>
      country.name.common !== name))
  }
  //return function
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Country App</h1>
      <Search />
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Fething failed!</h2>}
      {countries && <Countries countries={filteredCountries} onRemoveCountry={handleRemoveCountry} />}
    </>
  )
}

export default App