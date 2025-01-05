import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex  bg-violet-600 fixed text-white w-full p-5'>
        <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-truck-fast"></i> E cart</Link>
        <ul className='flex-1 text-right'>
            <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-2' type='text' placeholder='Search Products...'></input> </li>
            <li className='list-none inline-block px-5'> <Link to ={'/wishlist'}><i className="fa-solid fa-heart text-red-600"></i> Wishlist <span className='bg-black text-white rounded p-1'>0</span> </Link> </li> 

            <li className='list-none inline-block px-5'> <Link to ={'/cart'}> <i class="fa-solid fa-cart-plus text-green-600"></i> Cart <span className='bg-black text-white rounded p-1'>0</span> </Link> </li>
        </ul>

    </nav>
  )
}

export default Header
