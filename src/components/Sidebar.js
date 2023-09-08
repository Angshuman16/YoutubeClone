import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.navbar.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-48 p-5  shadow-lg  dark:bg-black dark:text-white'>
       <h1 className='p-2 block hover:bg-slate-300' ><Link to="/">Home</Link></h1>
       <h1 className='p-2 block hover:bg-slate-300' ><Link to="">Shorts</Link></h1>
       <h1   className='p-2 block hover:bg-slate-300'><Link to="">Subscriptions</Link></h1>

      <h1 className='  font-bold pt-5'>Library</h1>
      <h1 className='px-5 py-2 hover:bg-slate-300'  ><Link to="">History</Link></h1>
      <h1 className='py-2 block hover:bg-slate-300' ><Link to="">Your Videos</Link></h1>
      <h1  className='py-2 block hover:bg-slate-300'><Link to="">Watch Later</Link></h1>
      <h1  className='py-2 block hover:bg-slate-300'><Link to="">Liked Videos</Link></h1>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li  className='py-2'><Link to="">Trending</Link></li>
        <li className='py-2'><Link to="">Shopping</Link></li>
        <li className='py-2'><Link to="">Music</Link></li>
        <li  className='py-2'><Link to="">Movies</Link></li>
        <li  className='py-2'><Link to="">Live</Link></li>
        <li  className='py-2'><Link to="">Gaming</Link></li>
        <li  className='py-2'><Link to="">News</Link></li>

      </ul>

      
    </div>
  )
}

export default Sidebar