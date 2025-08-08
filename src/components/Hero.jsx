import React from 'react'

const Hero = () => {
    return (
        <section className='max-w-[1200px] w-full my-0 mx-auto  text-white p-4 md:p-8 flex flex-col items-center justify-center gap-4 md:gap-6 h-[100vh]'>
            <h1 className='font-bold text-2xl md:text-4xl text-center'>Stream without limits.</h1>
            <p className='text-lg md:text-3xl max-w-full md:max-w-[690px] text-center'>
                WATCHLY is a storytelling platform for filmmakers and independent creators to reach the world.
            </p>
            <a
                href="/subscribe"
                className='mt-4 md:mt-[18px] bg-[#3864AB] rounded-2xl py-2 px-3 md:py-3 md:px-4 font-medium text-lg md:text-2xl text-center'
            >
                Subscribe Here
            </a>
        </section>
    )
}

export default Hero
