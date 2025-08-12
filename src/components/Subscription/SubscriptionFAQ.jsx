import React, { useState } from 'react'
import subscri from '../json/SubscriptionFAQ.json'

export const SubscriptionFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleClick = (index) => {
        setOpenIndex(openIndex === index ? null : index); // toggle the clicked item
    }
    return (
        <div>
            <div className='container'>
                <div className=' border border-black-black_header  border-b-0 bg-[#F5F5F7] '>
                    <div className='py-20   '>
                        <div className='border-black-black_header border justify-self-center max-w-[864px] lg:px-20 px-10 py-20'>
                            <h1 className='font-semibold text-[50px] text-black-black_header mt-20] leading-[120%]'>Subscription FAQ</h1>
                            <div className="flex max-w-[704px] mt-10 w-full flex-col">
                                {subscri.map((item, index) => {
                                    const isOpen = openIndex === index;
                                    return (
                                        <div key={index} className="flex flex-col   " >
                                            <div  className="flex  gap-4 items-center" >
                                                <h3 className=" text-base sm:text-[21px] md:text-[28px] font-normal leading-[120%] my-6 text-[#121212] w-full">
                                                    {item.text}
                                                </h3>
                                                <img onClick={() => handleClick(index)} className={`cursor-pointer ${isOpen ? "hidden" : "block"}`} src={`src/assets/icons/${item.img}`} alt="img" />
                                                <img onClick={() => handleClick(index)} className={`cursor-pointer ${isOpen ? "block" : "hidden"}`} src={`src/assets/icons/${item.imge}`} alt="img" />
                                            </div>
                                            <p className={`text-base leading-[140%] font-normal overflow-hidden transition-all duration-500 ease-in-out pb-6 ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"  }`} >
                                                {item.line}
                                            </p>
                                            <div className='border border-black-black_header'>

                                            </div>
                                        </div>
                                        
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
