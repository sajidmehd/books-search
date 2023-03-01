import React, {useState}  from 'react'
import {actions} from '../../store/bookSlice'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../../components/loader';

function Search() {

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch()
  const [textInput, setTextValue] = useState('');

  const handleSearch = async (e) => {
  e.preventDefault();
  setIsLoading(true)
  await axios.get(`https://openlibrary.org/search.json?title=${textInput}`)
    .then((response) => {
      dispatch(actions.getBooks(response.data.docs))
      setIsLoading(false)
    })
    .catch((error) => {
      toast.error(error + ' something went wrong')
    })
  }

  const handleSearchInput = (value) => {
    setTextValue(value)
  }
  

  return (
    <>
      <div className='flex justify-center mt-20'>
        <ToastContainer />
        <form onSubmit={handleSearch}>
          <input type="text"
          className="bg-gray-100 border border-gray-300 rounded-md py-2 mr-3 px-4 inline-block w-80 placeholder-gray-500 focus:outline-none focus:border-transparent"
          placeholder="Search for a book..." 
          onChange={(e)=> handleSearchInput(e.target.value)}/>

          <button className={"flex-none rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"} 
          onClick={handleSearch}>Search Books</button>
        </form>
      </div>
      {isLoading ? <Loader/> : ''}
    </>
    
  )
}

export default Search