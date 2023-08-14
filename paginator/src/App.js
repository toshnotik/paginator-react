import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Countries from './components/Countries';
import Pagination from './components/Pagination';

function App() {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(10)

  useEffect(() => {
    const getCounries = async ()=> {
      setLoading(true)
      const res = await axios.get('https://restcountries.com/v3.1/all')
      console.log(res.data)
      setCountries(res.data)
      setLoading(false)
    }

    getCounries()
  }, [])

  const lastCountryIndex = currentPage * countriesPerPage
  const firstCoutryIndex = lastCountryIndex - countriesPerPage
  const currentCountry = countries.slice(firstCoutryIndex, lastCountryIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  const nextPage = () => setCurrentPage(prev => prev + 1)
  const prevPage = () => setCurrentPage(prev => prev - 1)

  return (
    <div className='conteiner mt-5'>
      <h1 className='text-primary text-center'><a href='/'>Страны</a></h1>
      <Countries countries={currentCountry} loading={loading} />
      <Pagination 
        countriesPerPage={countriesPerPage}
        totalCountries={countries.length}
        paginate={paginate}
      />

      <button className='btn btn-primary' onClick={prevPage}>Предыдущая</button>
      <button className='btn btn-primary ms-2' onClick={nextPage}>Следующая</button>
    </div>
  );
}

export default App;
