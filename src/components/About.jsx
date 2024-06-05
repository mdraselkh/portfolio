import React from 'react'
import aboutimg from '..//assets/aboutimg.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import {Link} from 'react-scroll';

const About = () => {
  return (
    <div name="about" className='w-full bg-gray-900 mt-[-2px] '>
      <div className='py-20'>
         <div className='pb-6 text-center text-gray-400'>
           <p>Get to know more</p>
           <h2 className='text-2xl font-semibold text-white'>About <span className='text-orange-500'>Me</span></h2>
          </div>
          <div className='flex flex-col items-center justify-center h-full px-6 py-8 mx-10 bg-gray-800 rounded lg:flex-row lg:mx-48 md:mx-16'>
             <div className='lg:w-[50%] lg:mr-32 lg:h-[50%] md:w-[75%] md:h-[75%]' data-aos="flip-right" data-aos-duration='1000'>
               <img src={aboutimg} alt="" className='border-4 border-orange-500 rounded-full shadow-[0px_0px_20px_rgba(0,0,0,0.8)] shadow-orange-400 '/>
             </div>
             <div className='mt-8 text-white'>
             <h3 className='text-2xl font-bold md:text-3xl md:px-5 lg:px-0' data-aos="fade-right" data-aos-duration='1500'>I'm a Frontend Developer <span className='text-orange-500'>and</span> Machine Learning Engineer</h3>
             <div className="flex flex-col items-start justify-start mt-4 text-xl md:mt-6 md:px-5 lg:px-0" data-aos="zoom-up" data-aos-duration='1500'>
               <p>
                  Education: <span className='text-gray-400'>B.sc in CSE</span>
               </p>
               <p>
                  Experience: <span className='text-gray-400'>6 Months</span>
               </p>
               <p>
                  Speciality: <span className='text-gray-400'>Frontend development, Machine learning</span>
               </p>
               <p>
                  Freelance: <span className='text-gray-400'>Available</span>
               </p>
               <p>
                  Address: <span className='text-gray-400'>Dhour, Turag, Dhaka</span>
               </p>
               <p>
                  Email: <span className='text-gray-400'>mdrasel.rkh@gmail.com</span>
               </p>
               <p>
                  Phone: <span className='text-gray-400'>01932587313</span>
               </p>
             </div>
             <div className='pt-5 md:px-5 lg:px-0' >
                 <Link to={'contact'} smooth duration={500} className='flex items-center px-6 py-3 my-2 text-xl text-white duration-150 border-0 rounded-md cursor-pointer bg-gradient-to-l from-orange-600 to-orange-400 w-fit md:py-4' data-aos="fade-left" data-aos-duration='1500' >
                  Hire Me  <span className='ml-2 duration-300 hover:rotate-90'> <FaLongArrowAltRight size={25}/></span>
                 </Link>
              </div>
             </div>
          </div>
      </div>
    </div>
  )
}

export default About