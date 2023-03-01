import React from 'react'
import { Link } from 'react-router-dom';
import imgNotFound from '../images/not_found.jpg'

function SingleBook(props) {
  const {title, author_name, cover_i,key} = props.data;
  
  //get the book id from the key
  const book_id = key.replace("/works/","");

  return (
    <div>
      <Link to={`/bookdetail/${book_id}`}>
        <div className="bg-white mb-4 rounded-lg shadow-xl hover:shadow-lg overflow-hidden min-h-64">
          <div className="cover_img">
            <img src={cover_i ? `https://covers.openlibrary.org/b/id/${cover_i}.jpg` : imgNotFound} 
            alt="Cover" className="w-full h-60" />
          </div>
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-1">Title: {title.substring(0, 30) + '...'}</h2>
            <h3 className="text-gray-500 text-sm mb-2">Author: {author_name}</h3>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SingleBook