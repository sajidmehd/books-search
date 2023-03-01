import React from 'react'
import { InfinitySpin } from  'react-loader-spinner'

function loader() {
  return (
    <div className="flex justify-center mb-10">
      <InfinitySpin 
        width='300'
        color="#6366f1"
      />
    </div>
  )
}

export default loader