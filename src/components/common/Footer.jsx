import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Footer = () => {



  return (
    < div className='container'>

      <div className=' grid-cols-1 grid border-b  md:grid-cols-2 lg:grid-cols-4 border border-l-0  border-t-0 border-black-black_header'>
        <div className=' border-l border-t border-black-black_header'>
          <div className='my-7 xl:mt-10 mx-7 xl:mx-10 '>
            <p className='mr-10 font-normal text-base leading-[140%] text-black-black_header'>Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day, Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing your address</p>
            <div className='mt-6'>
              <div className='border border-gray-gray_color '>
                <input className='outline-none  pl-4  py-[19.5px] text-gray-gray_color text-sm font-medium leading-[120%]' type="Your Email " placeholder='Your Email' id='Your Email ' />
              </div>
              <div className='text-center mt-4 '>
                <button className={`transition-all group-hover:scale-105 duration-300 w-full py-[18.5px] bg-black-black_header text-white-white_color text-sm sm:text-base font-medium leading-[120%] hover:bg-slate-200 hover:text-black-black_header `}>REMIND </button>
              </div>
            </div>
          </div>
        </div>
        <div className=' border-l border-t border-black-black_header '>
          <div className='my-7 xl:my-10 mx-7 xl:mx-10'>
            <h1 className='text-gray-gray_color  font-medium leading-[120%] text-lg sm:text-[21px] '>CONTACT US</h1>
            <div className='mt-6'>
              <h1 className='text-gray-gray_color font-normal text-sm leading-[16.8px]'>Address</h1>
              <h2 className='mt-2 font-medium text-base leading-[19.2px] text-black-black_header'>15/4 Khreshchatyk Street, Kyiv </h2>
            </div>
            <div className='mt-6'>
              <h1 className='text-gray-gray_color font-normal text-sm leading-[16.8px]'>Phone</h1>
              <h2 className='mt-2 font-medium text-base leading-[19.2px] text-black-black_header'>+380980099777</h2>
            </div>
            <div className='mt-6'>
              <h1 className='text-gray-gray_color font-normal text-sm leading-[16.8px]'>General Enquiry:</h1>
              <h2 className='mt-2 font-medium text-base leading-[19.2px] text-black-black_header'>Kiev.Florist.Studio@gmail.com</h2>
            </div>
            <div className='mt-6'>
              <h1 className='text-gray-gray_color  font-medium leading-[120%] text-lg sm:text-[21px]'>Follow Us</h1>
              <div className=' flex justify-between mt-6 max-w-[280px]'>
                <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
                  <img className='max-w-6 w-full' src={"/icons/Pinterest.svg"} alt="icon" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                  <img className='max-w-6 w-full' src={"/icons/Instagram.svg"} alt="icon" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <img className='max-w-6 w-full' src={"/icons/Facebook.svg"} alt="icon" />
                </a>
                <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <img className='max-w-6 w-full' src={"/icons/Twitter.svg"} alt="icon" />
                </a>
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                  <img className='max-w-6 w-full' src={"/icons/Telegram.svg"} alt="icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className=' border-l  border-t border-black-black_header '>
          <div className='mt-7 xl:mt-10 mx-7 xl:mx-10'>
            <h1 className='text-gray-gray_color  font-medium leading-[120%] text-lg sm:text-[21px]'>Shop</h1>
            <div className='mt-6'>
              <ul className=''>
                <Link to={"Category"}> <li className='font-medium text-[16px] leading-[19.2px] text-black-black_header'> <a href="#category">All Products</a></li></Link>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Fresh Flowers</li>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Dried Flowers</li>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Live Plants</li>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Designer Vases</li>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Aroma Candles</li>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Freshener Diffuser</li>
              </ul>
            </div>
            <div className='mt-6'>
              <h1 className='text-gray-gray_color font-medium leading-[120%] text-lg sm:text-[21px]'>Service</h1>
            </div>
            <div className='mt-6 mb-10'>
              <ul>
                <Link to={"Subscription"}> <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Flower Subcription</li></Link>
                <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Wedding & Event Decor</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='  border-l   border-t   border-black-black_header '>
          <div className='my-7 xl:mt-10 mx-7 xl:mx-10'>
            <div className=' grid'>
              <h1 className='text-gray-gray_color  font-medium leading-[120%] text-lg sm:text-[21px]'>About Us</h1>
              <div className='mt-6'>
                <ul>
                  <Link to={"Ourstory"}> <li className=' font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Our story</li></Link>
                  <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Blog</li>
                </ul>
              </div>
              <div className='mt-6'>
                <ul>
                  <li className=' font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Shipping & returns</li>
                  <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Terms & conditions</li>
                  <li className='mt-2 font-medium text-sm sm:text-base leading-[120%] text-black-black_header'>Privacy policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
