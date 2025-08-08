import React from 'react'
import '../index.css'
import '../App.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MovieCarousel from '../components/MovieCarousel'
import Filter from '../components/Filter'

const Home = () => {

    return (
        <>
            <div className='hero_bg_image'>
                <Header />
                <Hero />
            </div>
            <div className='flex md:flex-row flex-col gap-4 items-center justify-items-start max-w-[1200px] overflow-x-hidden w-full my-0 mx-auto p-4'>
                <aside><Filter /></aside>
                <section><MovieCarousel /></section>
            </div>
        </>
    )
}

export default Home
