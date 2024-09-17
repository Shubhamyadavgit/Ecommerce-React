import React from 'react'
import logo from '../../assets/images/logo.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Navbar = () => {
  return (
    <>
    <div className='bg-black p-2 w-full'>
        <h3 className='text-white font-sans text-2xl tracking-normal leading-none text-center'>Welcome All</h3>
    </div>
    <div className='flex justify-around items-center'>
        <div>
            <img className='h-28 w-full' src={logo} alt="store" />
        </div>
        <div className='flex flex-row items-center'>
            <button className='font-sans text-base font-medium tracking-normal leading-none text-center mr-4'>Logout</button>
            <div className='flex flex-row items-center'>
            <FavoriteBorderIcon className=' text-2xl mr-2'/>
            <p className='font-sans text-base font-medium tracking-normal leading-none text-center mr-4'>Whish List</p>
            </div>
            <div className='flex flex-row items-center cursor-pointer'>
                <ShoppingCartIcon />Shopping Bag
            </div>
        </div>
    </div>
    <div className='bg-black p-4 w-full flex justify-around'>
        <div className='text-white font-sans text-base font-medium tracking-normal leading-none text-center'>
            50% OFF
        </div>
        <div className='text-white font-sans text-base font-medium tracking-normal leading-none text-center'>
            Free shipping and returns
        </div>
        <div className='text-white font-sans text-base font-medium tracking-normal leading-none text-center'>
            Different payment methods
        </div>
    </div>
    </>
  )
}

export default Navbar