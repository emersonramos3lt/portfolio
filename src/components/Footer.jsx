import { useState} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useState(() => {
    AOS.init()
  }, [])

  return (
    <footer className='mt-12 sm:mt-50 bg-zinc-900 text-white p-2 sm:p-5 text-center pt-[5rem] sm:pt-[7rem]'>

      <div data-aos="fade-up" data-aos-duration="700">
        <h1 className='footer-title text-rose-400 text-lg sm:text-2xl lg:text-3xl font-medium'>👋 Hey! Do you want to get in touch?</h1>
        <h2 className='text-4xl sm:text-9xl font-extrabold mt-5'>LET'S TALK!</h2>

       <div className='flex items-center justify-center gap-8 mt-5 sm:flex-row flex-col'>

       <a href='https://www.linkedin.com/in/emerson-ramos-18057333a/' target='_blank' className="btn1 relative bg-rose-400 text-white sm:text-black sm:bg-white p-4 sm:p-5 rounded-4xl px-15 font-bold text-lg hover:text-white w-full sm:w-auto">
          SEE MY LINKEDIN
        </a>

        <a href='mailto:emerson.ramos.dos.santos2006@gmail.com' className="btn2 relative bg-transparent border border-white p-4 sm:p-5 text-white rounded-4xl px-10 font-bold text-lg hover:border-neutral-100 hover:text-zinc-900 transition duration-500 w-full sm:w-auto">
          SEND ME A EMAIL
        </a>
       </div>

       <div className='flex items-center justify-center gap-16 my-12 sm:my-24'>
        <a href="https://www.linkedin.com/in/emerson-ramos-18057333a/" target='_blank' className='flex items-center justify-center gap-2 text-[1.30rem] font-bold'>
          <img src="/linkedin.svg" alt="LinkedIn logo" className='w-[25px] h-[25px]' />
          <span className='hidden sm:block'>LinkedIn</span>
        </a>

        <a href="https://github.com/emersonramos3lt" target='_blank' className='flex items-center justify-center gap-2 text-[1.30rem] font-bold'>
          <img src="/github.svg" alt="GitHub logo" className='w-[25px] h-[25px]' />
          <span className='hidden sm:block'>GitHub</span>
        </a>

        <a href="mailto:emerson.ramos.dos.santos2006@gmail.com" target='_blank' className='flex items-center justify-center gap-2 text-[1.30rem] font-bold'>
          <img src="/email.svg" alt="Email logo" className='w-[25px] h-[25px]' />
          <span className='hidden sm:block'>Email</span>
        </a>
       </div>
       </div>
    </footer>
  )
}

export default Footer
