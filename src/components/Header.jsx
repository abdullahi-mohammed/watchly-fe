import React from 'react'
import logo from '../assets/watchly_logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="flex flex-col md:flex-row justify-between items-center p-4 text-white text-2xl font-semibold gap-4 md:gap-0">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                <img src={logo} className="w-[60px] h-[24px] md:w-[154px] md:h-[74px]" alt="watchly logo" />

                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="flex items-center gap-2 bg-gray-800 p-2 rounded w-full md:w-auto">
                        <img src="" alt="search icon" />
                        <input
                            type="search"
                            name="movie search"
                            id="movie search"
                            className="bg-transparent outline-none w-full md:w-auto text-base"
                            placeholder="Search movies..."
                        />
                    </div>

                    <a href="http://" className="w-full md:w-auto text-center">DISCOVER</a>
                    <a href="http://" className="w-full md:w-auto text-center">ORIGINALS</a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto">
                <a href="" className="w-full md:w-auto text-center">Cretaors Account</a>
                <a href="" className="border-l-0 md:border-l-[1px] pl-0 md:pl-4 w-full md:w-auto text-center">Login</a>
                <Link
                    to="/upload/video"
                    className="font-extrabold bg-[#3864AB] px-2.5 py-3 rounded-[10px] w-full md:w-auto text-center"
                >
                    Upload
                </Link>
            </div>
        </header>
    )
}

export default Header