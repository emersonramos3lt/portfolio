import React, { useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Header = () => {

  useState(() => {
    AOS.init()
  }, []);

  return (
    <header className='max-w-[90%] m-auto'>
        <nav className='p-2 pt-5 sm:p-8 sm:pt-auto flex justify-between items-center' data-aos="fade-down" data-aos-duration="700">
            <span className='sm:text-[1.4rem] font-extrabold cursor-pointer uppercase'>Emerson Ramos<span className='text-rose-500'>.</span></span>

            <a href="/resume.pdf" aria-label='Download my resume' download className='uppercase text-sm sm:text-lg font-extrabold transition-colors hover:text-zinc-700' title='Download Resume'>Resume</a>
        </nav>

        <h1 className='text-center text-3xl sm:text-6xl lg:text-8xl font-extrabold lg:leading-[120px] text-zinc-900 mt-14' data-aos="zoom-in-up" data-aos-duration="800">FULL STACK DEVELOPER WITH A PASSION FOR WEB DESIGN, UI/UX, AND CREATING STUNNING APPLICATIONS.</h1>
    </header>
  )
}

export default Header
