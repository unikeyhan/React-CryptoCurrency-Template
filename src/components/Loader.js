import React from 'react'

import spinner from "../gif/gif.gif"

const Loader = () => {
  return (
    <img className='loader-img' src={spinner} alt="spinner"/>
  )
}

export default Loader