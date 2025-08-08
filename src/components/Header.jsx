import React from 'react'
import logo from '../assets/watchly_logo.png'
import searchicon from '../assets/magnifying-glass (1) 1.svg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="max-w-[1200px] w-full my-0 mx-auto  flex flex-col md:flex-row justify-between items-center p-4 text-white text-[14px] md:text-[18px] font-normal">
            <div className="flex md:flex-row items-center gap-1 md:gap-4">
                <img src={logo} className="w-auto h-[40px]" alt="watchly logo" />

                <div className="flex justify-center md:flex-row items-center gap-4 md:w-auto">
                    <div className="flex items-center gap-2 bg-gray-800 p-2 rounded md:w-auto">
                        <img src={searchicon} alt="search icon" />
                        <input
                            type="search"
                            name="movie search"
                            id="movie search"
                            className="bg-transparent outline-none w-full md:w-auto text-base"
                            placeholder="Search movies..."
                        />
                    </div>

                    <a href="http://" className="md:w-auto text-center">DISCOVER</a>
                    <a href="http://" className="md:w-auto text-center">ORIGINALS</a>
                </div>
            </div>
            <div className="flex md:flex-row gap-4 items-center">
                <a href="" className="">Creators Account</a>
                <a href="" className="border-l-0 md:border-l-[1px] pl-0 md:pl-4 text-center">Login</a>
                <Link
                    to="/upload/video"
                    className="font-medium bg-[#3864AB] px-2 py-3 rounded-[10px] text-center"
                >
                    Upload
                </Link>
            </div>
        </header>
    )
}

export default Header