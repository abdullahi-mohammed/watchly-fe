import React from 'react'
import '../index.css'
import '../app.css'
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
            <div className='flex'>
                <aside><Filter /></aside>
                <section><MovieCarousel /></section>
            </div>
        </>
    )
}

export default Home
