import React from 'react'
import Header from '../components/header/Header'
import List from '../components/List'



function Home() {
  return (
     <>
     <div className="container mx-auto px-5 sm:px-10">
        <Header />
        <List />
      </div>
     </>
  )
}

export default Home