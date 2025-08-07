import React from 'react'

const Hero = () => {
    return (
        <section className='text-white p-4 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 h-[100vh]'>
            <h1 className='font-bold text-4xl md:text-7xl text-center'>Stream without limits.</h1>
            <p className='text-lg md:text-3xl max-w-full md:max-w-[690px] text-center'>
                WATCHLY is a storytelling platform for filmmakers and independent creators to reach the world.
            </p>
            <a
                href="/subscribe"
                className='mt-4 md:mt-[23px] bg-[#3864AB] rounded-2xl py-4 px-6 md:py-6 md:px-8 font-medium text-2xl md:text-4xl text-center'
            >
                Subscribe Here
            </a>
        </section>
    )
}

export default Hero
