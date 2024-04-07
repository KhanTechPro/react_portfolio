import React from 'react';
import { ReactTyped } from "react-typed";

export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-green font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 py-1'>Fast, flexible financing for-</p>
                <ReactTyped
                    className='md:text-4xl sm:text-3xl text-xl font-bold'
                    strings={[
                        "products",
                        "office",
                        "brands",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    />
            </div>

            <p className='md:text-lg text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for products, office & brands</p>
            <button className='bg-green w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>        
        </div>
    </div>
  )
}

export default Hero;
