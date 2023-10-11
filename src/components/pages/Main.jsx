// import React from 'react'
import { Link } from 'react-router-dom'
import Item from './Item'

function index() {
  return (
    <>
      <div className='bg-gray-900 w-full h-[850px] py-8'>
        <Link className=''>
          <Item />
        </Link>
      </div>
    </>
  )
}

export default index