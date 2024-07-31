import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LogOut, Menu, Search } from "lucide-react";
import { useAuthStore } from '../store/authUser';
import { useContentStore } from '../store/content';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user, logout } = useAuthStore();
    const location = useLocation();

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    const { contentType, setContentType } = useContentStore();

    const isActive = (path) => location.pathname === path;


    return (
        <header className='max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20'>

            <div className='flex items-center gap-10 z-50'>
                <Link to='/' >
                    <img src='/netflix-logo.png' alt='Netflix Logo' className='w-32 sm:w-40' />
                </Link>

                <div className='hidden sm:flex gap-2 items-center'>
                    <Link to='/' className={`hover:underline ${isActive('/') && contentType === "movie" ? 'text-red-500 underline font-bold' : 'text-white'}`} onClick={() => setContentType("movie")}>
                        Movies
                    </Link>
                    <Link to='/' className={`hover:underline ${isActive('/') && contentType === "tv" ? 'text-red-500 underline font-bold' : 'text-white'}`} onClick={() => setContentType("tv")}>
                        Tv Shows
                    </Link>
                </div>
            </div>

            <div className='flex gap-2 items-center z-50'>
                <Link to={"/search"}>
                    <Search className='size-6 cursor-pointer' />
                </Link>
                <img src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg" alt='Avatar' className='h-8 rounded cursor-pointer' />
                <LogOut className='size-6 cursor-pointer' onClick={logout} />
                <div className='sm:hidden'>
                    <Menu className='size-6 cursor-pointer' onClick={toggleMobileMenu} />
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className='w-full sm:hidden mt-4 z-50 bg-black border rounded border-gray-800'>
                    <Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                        Movies
                    </Link>
                    <Link to={"/"} className='block hover:underline p-2' onClick={toggleMobileMenu}>
                        Tv Shows
                    </Link>
                </div>
            )}
        </header>
    )
}

export default Navbar