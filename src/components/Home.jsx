import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import heroimg from "..//assets/header-img.png"
import {Link} from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen overflow-hidden bg-gradient-to-b from-black via-black to-gray-900 lg:bg-cover lg:bg-center lg:bg-no-repeat'>
      <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-5 mx-auto my-24 lg:flex-row md:my-6 lg:my-0 md:px-10 lg:px-0'>
         <div className='flex flex-col justify-center h-full md:p-6 lg:p-0'>
             <h3 className='py-1 text-2xl font-semibold text-white md:text-3xl lg:text-4xl' data-aos="fade-down" data-aos-duration='1500'>Hi, It's Me</h3>
             <h1 className='py-1 text-4xl font-bold text-white lg:text-5xl md:text-4xl ' data-aos="fade-down" data-aos-duration='1500'>Md Rasel</h1>
             <h3 className='py-1 text-2xl font-semibold text-white md:text-3xl lg:text-4xl' data-aos="fade-right" data-aos-duration='1500'>And I'm a<span className='text-orange-500'> <TypeAnimation sequence={['Frontend Developer',2000,'Web Designer',2000,'Machine Learning Engineer',2000]} speed={50} repeat={Infinity}/> </span></h3>
             <p className='py-4 text-gray-400 md:pr-24 lg:pr-10' data-aos="fade-right" data-aos-duration='1500'>I love to code, and I'm naturally outgoing, so I'm always ready for a good discussion or a difficult project. Web developing, designing, android developing, software testing, and machine learning are my areas of interest in research.</p>
            
              <div data-aos="fade-up" data-aos-duration='1500'>
                 <Link to={'portfolio'} smooth duration={500} className='flex items-center px-6 py-3 my-2 text-xl text-white duration-150 border-0 rounded-md cursor-pointer bg-gradient-to-l from-orange-600 to-orange-400 w-fit md:py-4'>
                  Portfolio  <span className='ml-2 duration-300 hover:rotate-90'> <FaLongArrowAltRight size={25}/></span>
                 </Link>
              </div>
         </div>
         <div className=' w-full h-1/2 lg:w-[115%] md:w-[90%]' data-aos="fade-left" data-aos-duration='1500' data-aos-delay='50'>
            <img src={heroimg} alt="my profile" className='px-4' />
         </div>
      </div>
    </div>
  )
}

export default Home