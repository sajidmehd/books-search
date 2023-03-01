import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {actions} from '../store/bookSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import imgNotFound from '../images/not_found.jpg'
import axios from 'axios';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../components/loader';


function BookDetail() {
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const handleSingleBookSearch = async () => {
    setIsLoading(true);
  await axios.get(`https://openlibrary.org/works/${id}.json`)
    .then((response) => {
      dispatch(actions.setBook(response.data))
      setIsLoading(false)
    })
    .catch((error) => {
      toast.error(error + ' something went wrong')
    })
  }

  useEffect(() => {
    handleSingleBookSearch()
  },[])


  const {title, description,covers,first_publish_date} = useSelector((state) => state.singleBook)

  let desc = ''
  if(typeof description  === 'string'){
    desc = description
  }
  if(typeof description === 'object') {
    desc = description.value
  }

  return (
    
    <div className="container mx-20 mt-10">
      <ToastContainer />
      {isLoading ? <Loader/> : ''}
      
      <Link to="/" className={"mb-10 rounded-md bg-indigo-500 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"}>Go to Search Resuts</Link>

      <div className="single_book grid grid-cols-3 gap-4 mt-10 mb-52">
        <div className="cover_img col-span-1">
          <img src={covers ? `https://covers.openlibrary.org/b/id/${covers[0]}.jpg` : imgNotFound} 
          className="shadow-lg rounded-xl"
          alt="Cover" />
        </div>
        <div className="book_details col-span-1">
          <h1>Title: {title ? title : 'Title not Found'}</h1>
          <h3>Publish date: {first_publish_date ? first_publish_date : 'Published date not Found'} </h3>
          <p>{desc ? desc : 'description not found'}</p>
        </div>
      </div>
    </div>
  )
}

export default BookDetail