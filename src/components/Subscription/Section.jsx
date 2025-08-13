import React from 'react'
import subscription from '/image/subscription.png'
 const Section = () => {
    return (
        <div className='md:mt-[83px] mt-[62px]' >
            <div className='container'>
                <div className='grid lg:grid-cols-2 border-x border-black-black_header ' >
                    <div className=' border-r  border-black-black_header'><img className='sticky top-[83px] w-full' src={subscription} alt="" /></div>
                    <div>
                        <div className='xl:p-20 sm:p-10 px-4 mt-10 '>
                            
                            <h1 className='font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%]'>Flower Subscription</h1>
                            <div className='mt-6'>
                                <h1 className='font-medium text-base text-black-black_header leading-[120%]'>For Yourself</h1>
                                <li className='mt-2 ml-[10px] font-normal text-base text-black-black_header leading-[140%]'>The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li>
                            </div>
                            <div className='mt-6'>
                                <h1 className='font-medium text-base text-black-black_header leading-[120%]'>As a Gift</h1>
                                <li className='mt-2 ml-[10px] font-normal text-base text-black-black_header leading-[140%]' >Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li>
                            </div>
                            <div className='mt-6'>
                                <h1 className='font-medium text-base text-black-black_header leading-[120%]'>For Business</h1>
                                <li className='mt-2 ml-[10px] font-normal text-base text-black-black_header leading-[140%]' >Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li>
                            </div>
                            <div className='sm:mt-[70px] mb-10 sm-mb-0 mt-[48px]' >
                                <button className='border border-black-black_header px-6 py-[18px] lg:w-[171px] w-full font-medium sm:text-base text-sm text-black-black_header leading-[120%]'>Explore Plans</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    )
}
export default Section
