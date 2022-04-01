import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import allCountries from './countries.json';
import CountryDetail from './components/CountryDetail';
import {Route,Routes} from 'react-router-dom';
import FetchData from './components/FetchData';
import { useState, useEffect } from 'react'

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      const newCountries = await FetchData.getAllCountries()
      setCountries(newCountries)
    }

    fetchData();
  }, [])
  return (
    <div className="App">
       <Navbar/> 
       <div className="flex">
       
       <CountriesList allCountries={allCountries}/>
       
       <Routes>
         <Route path="/:id"
         element={<CountryDetail allCountries={allCountries}/>}>
</Route>
       </Routes>
       </div>
       
       

       
    </div>
  );
}

export default App;
