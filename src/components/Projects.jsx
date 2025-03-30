import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {

    useEffect(() => {
        AOS.init()
    }, []);
       

  return (
    <div className='mt-28 sm:mt-50 text-zinc-900 max-w-[90%] m-auto'>
        <h2 className='text-center text-2xl sm:text-4xl lg:text-5xl font-extrabold mb-8' data-aos="fade-up">RELEVANT PROJECTS</h2>

        <div className='grid lg:grid-cols-2 gap-4'>

            <div className='' data-aos="fade-right" data-aos-duration="700">
                <a href="https://awwward-website.vercel.app/" target='_blank'>
                    <img src="/project1.png" alt="Awwwards Inspired React Website" className='
                    rounded-3xl w-[100%] h-[300px] sm:h-[500px] object-cover transition-transform hover:scale-95'/>
                </a>
                <h3 className='font-extrabold text-2xl sm:text-3xl my-2 sm:my-4 uppercase'>Awwwards Inspired Website</h3>
                <p className='font-medium text-zinc-600'>Website with advanced animations and responsive design.</p>
            </div>

            <div className='' data-aos="fade-right" data-aos-duration="700">
                <a href="https://movie-finder-react-psi.vercel.app/" target='_blank'>
                    <img src="/project2.png" alt="Movie Search with api" className='
                    rounded-3xl w-[100%] h-[300px] sm:h-[500px] object-cover transition-transform hover:scale-95'/>
                </a>
                <h3 className='font-extrabold text-2xl sm:text-3xl my-2 sm:my-4 uppercase'>Movie Search with api</h3>
                <p className='font-medium text-zinc-600'>A responsive React app that lets users search movies.</p>
            </div>

            <div className='' data-aos="fade-right" data-aos-duration="700">
                <a href="https://fullstack-blog-rho.vercel.app/" target='_blank'>
                    <img src="/project3.png" alt="Blog app" className='
                    rounded-3xl w-[100%] object-cover h-[300px] sm:h-[500px] transition-transform hover:scale-95'/>
                </a>
                <h3 className='font-extrabold text-2xl sm:text-3xl my-2 sm:my-4 uppercase'>Full-Stack Blog with Next.js</h3>
                <p className='font-medium text-zinc-600'>A fullstack blogging application built with Next.js with MongoDB</p>
            </div>

            <div className='' data-aos="fade-right" data-aos-duration="700">
                <a href="https://nextjs-ecommerce-fullstack-gamma.vercel.app/" target='_blank'>
                    <img src="/project4.png" alt="Full-Stack E-Commerce" className='
                    rounded-3xl w-[100%] h-[300px] sm:h-[500px] object-cover transition-transform hover:scale-95'/>
                </a>
                <h3 className='font-extrabold text-2xl sm:text-3xl my-2 sm:my-4 uppercase'>Complete E-Commerce Application</h3>
                <p className='font-medium text-zinc-600'>A complete e-commerce with dynamic cart, filters and authentication</p>
            </div>

        </div>
    </div>
  )
}

export default Projects
