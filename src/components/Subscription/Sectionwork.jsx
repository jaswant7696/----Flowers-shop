import React from 'react'

 const Sectionwork = () => {
    return (
        <div>
            <div className='container'>
                <div className='grid lg:grid-cols-2 border-x border-t border-black-black_header'>
                    <div className='lg:border-0 border-b border-black-black_header'>
                        <h1 className='font-semibold sm:text-[50px] text-[34px] text-black-black_header leading-[120%] xl:my-20 lg:my-10 xl:ml-20 lg:ml-10 sm:my-20 my-10 sm:ml-20 mx-4 sticky top-[83px]'>How does it work?</h1>
                    </div>
                    <div className='lg:border-l  border-black-black_header'>
                        <div className='xl:p-20 lg:p-10 sm:p-20 py-10 px-4 border-b border-black-black_header'>
                    
                                <h1 className='font-medium sm:text-[38px] text-[26px] leading-[120%] text-black-black_header'>Choose a plan</h1>
                                <p className='mt-4 text-base font-normal leading-[140%] text-black-black_header '>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
                           
                        </div>
                        <div className='xl:p-20 lg:p-10  sm:p-20 py-10 px-4 border-b border-black-black_header'>
                            <h1 className='font-medium sm:text-[38px] text-[26px]  leading-[120%] text-black-black_header'>Frequency and Duration</h1>
                            <p className='mt-4 text-base font-normal leading-[140%] text-black-black_header'>Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.</p>
                        </div>
                        <div className='xl:p-20 lg:p-10 sm:p-20 py-10 px-4'>
                            <h1 className='font-medium sm:text-[38px] text-[26px]  leading-[120%] text-black-black_header'>Pay once</h1>
                            <p className='mt-4 text-base font-normal leading-[140%] text-black-black_header'>After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}
export default Sectionwork
