import React from 'react'
import ProductData from '../json/story.json'
export const Story3 = () => {
  return (
    <div>
      <div className='container'>
        <div className='border border-b-0 border-black-black_header '>
          {
            ProductData.map((items, index) => {
              if (index % 2 === 0) {
                return (<>
                  <div className='grid lg:grid-cols-2'>
                    <div className='border-r border-black-black_header'>
                      <img className='w-full' src={`/public/image/${items.img}`} alt="" />
                    </div>
                    <div className=' sm:mx-20 mx-4 ms:my-20 my-10'>
                      <h1 className='font-medium sm:text-[38px] text-[26px] text-black-black_header leading-[120%]'>{items.text}</h1>
                      <p className='font-normal text-base text-black-black_header leading-[140%] mt-4 '>{items.line}</p>
                    </div>
                  </div>
                </>)
              } else {
                return (<>
                  <div className='lg:grid lg:grid-cols-2 lg:border-y border-0 flex flex-col-reverse border-black-black_header'>
                    <div className='sm:mx-20 mx-4 ms:my-20 my-10'  >
                      <h1  className='font-medium sm:text-[38px] text-[26px] text-black-black_header leading-[120%]'>{items.text}</h1>
                      <p className='font-normal text-base text-black-black_header leading-[140%] mt-4'>{items.line}</p>
                    </div>
                    <div className='border-l border-black-black_header'>
                      <img className='w-full' src={`/public/image/${items.img}`} alt="" />
                    </div>
                  </div>
                </>)
              }
            })
          }
        </div>
      </div>
    </div>
  )
}
