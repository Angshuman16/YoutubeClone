import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.navbar.isMenuOpen);

  if(!isMenuOpen) return null;

  return (
    <div className='w-52 p-8  shadow-lg  dark:bg-black dark:text-white'>
       <h1 className='p-2 block px-3 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500' ><Link to="/">Home</Link></h1>
       <h1 className='p-2 block hover:bg-slate-300 rounded-lg dark:hover:bg-slate-500' ><Link to="">Shorts</Link></h1>
       <h1   className='p-2 block hover:bg-slate-300 rounded-lg dark:hover:bg-slate-500'><Link to="">Subscriptions</Link></h1>

      <h1 className='  font-bold pt-5  pb-3'>Library</h1>
      <h1 className='  px-3 py-2 w-full rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500'  ><Link to="">History</Link></h1>
      <h1 className='  px-3  py-2  w-full rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500' ><Link to="">Your Videos</Link></h1>
      <h1  className='  px-3   py-2  w-full rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Watch Later</Link></h1>
      <h1  className='  px-3  py-2  w-full rounded-lg hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">All Videos</Link></h1>

      <h1 className='font-bold pt-5'>Explore</h1>
      <ul>
        <li  className='px-5  w-full rounded-lg py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Trending</Link></li>
        <li className='px-5   w-full rounded-lg py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Shopping</Link></li>
        <li className='px-5  w-full rounded-lg  py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Music</Link></li>
        <li  className='px-5  w-full rounded-lg  py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Movies</Link></li>
        <li  className='px-5  w-full rounded-lg  py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Live</Link></li>
        <li  className='px-5  w-full rounded-lg  py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">Gaming</Link></li>
        <li  className='px-5   w-full rounded-lg py-2 hover:bg-slate-300 dark:hover:bg-slate-500'><Link to="">News</Link></li>

      </ul>

      
    </div>
  )
}

export default Sidebar