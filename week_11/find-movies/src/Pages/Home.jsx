import React from 'react'
import { Movies } from '../components/Movies';

export const Home = ({query}) => {
    
    
  return (
    <div className='w-screen'>
        <Movies query={query} />
    </div>
  )
}
