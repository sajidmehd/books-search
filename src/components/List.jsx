import React from 'react'
import { useSelector } from 'react-redux'
import SingleBook from './SingleBook'


function List() {
  const booksList = useSelector((state) => state.books)
  let books = '';
  books = booksList.length > 0 ? (
    booksList.map((book, index) => (
        <SingleBook key={index} data={book} />
      ))
    ) : (
      <div className="error">
        <h3>No books found Please search for a book</h3>
      </div>
    )
  
  return (
    <div className='mt-10 border-t-2 pt-5 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
      {books}
    </div>
  )
}

export default List