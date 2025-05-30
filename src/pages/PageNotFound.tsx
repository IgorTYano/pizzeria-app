import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className='bg-[#333] text-white w-dvw h-dvh flex-col'>
      <div className='h-auto p-5 text-center'>
        <h1 className='text-2xl'>There doesn't seem to be anything here.</h1>
        <h2 className='text-zinc-500'>404 - Page Not Found</h2>
        <p className='mt-2'>It seems the page you're looking for doesn't exist.</p>
        <Link to = '/'>
          <button className='underline cursor-pointer hover:text-zinc-400'>Take me back</button>
        </Link>
      </div>
    </div>
  )
}

export default PageNotFound