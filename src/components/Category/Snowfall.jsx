import React from 'react'
import Product from "../json/category.json"

const Snowfall = () => {
  return (
    <>
      <div className='md:mt-[83px] mt-[62px] ' id="category">
        <div className='container'>
          <div className='border-y-0  border-l-0 md:border-l border border-black-black_header '>
            <div className='  grid md:grid-cols-2'>
              <div className='border-l md:border-l-0 border-black-black_header'>
              <div className={`bg-[url(../src/assets/image/Left_colum_catagory.png)]  bg-cover w-full h-[720px] bg-no-repeat  `}>
                <h1 className='text-white-white_color font-semibold text-[67px] leading-[80.4px] items-center justify-center text-center h-full flex'>Fresh Flowers</h1>
              </div>
              </div>
            

              <div className=''>
                <div className=' '>
                  <div className=" overflow-hidden grid sm:grid-cols-2   grid-cols-1 ">
                    {
                      Product.map((item, index) => (

                        <div key={index} className="group border-l md:border-l-0 border-black-black_header relative ">
                          <div className='justify-center flex text-center'>
                            <h1 className='absolute z-20 bottom-[45px] text-base font-medium leading-[120%] text-black-black_header '> {item.text}</h1>
                            <button className='absolute z-20 bottom-6 text-sm font-medium leading-[120%] text-gray-gray_color'>{item.button_text}</button>
                          </div>
                          <div className=' group  transform-all duration-500 overflow-hidden  z-50  md:border-l border-t  border-black-black_header '>
                            <img className={`transition-all group-hover:scale-110 duration-300  z-50    w-full`} src={`src/assets/image/${item.image}`} alt="" />

                          </div>

                        </div>
                      ))
                    }
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Snowfall