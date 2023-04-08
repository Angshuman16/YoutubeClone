import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.navbar.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-48 p-5 shadow-lg'>
       <h1><Link to="/">Home</Link></h1>
       <h1 >Shorts</h1>
       <h1 >Subscriptions</h1>

      <h1 className='  font-bold pt-5'>Library</h1>
      <h1 >History</h1>
      <h1 >Your Videos</h1>
      <h1 >Watch Later</h1>
      <h1 >Liked Videos</h1>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>

      </ul>

      
    </div>
  )
}

export default Sidebar