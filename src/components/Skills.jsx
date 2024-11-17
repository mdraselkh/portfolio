import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/js.png"
import tailwind from "../assets/tailwindcss.png"
import python from "../assets/python.png"
import reactimg from "../assets/react.png"
import bootstrap from "../assets/bootstrap.png"
import php from "../assets/php.png"
import mysql from "../assets/mysql.png"
import git from "../assets/git.png"
import java from "../assets/java.png"
import figma from "../assets/figma.png"
import ml from "../assets/ml.png"
import nlp from "../assets/nlp.png"
import cv from "../assets/cv.png"
import nextjs from "../assets/next-js.png"
import postgres from "../assets/postgre.png"
import shadcn from "../assets/shadcn.png"
import prisma from "../assets/prism.png"

const Skills = () => {
   
   const techs=[
      {
         id:1,
         src:html,
         title:"HTML",
         style:"shadow-orange-500",
      },
      {
         id:2,
         src:css,
         title:"CSS",
         style:"shadow-blue-500",
      },
      {
         id:3,
         src:js,
         title:"JavaScript",
         style:"shadow-yellow-500",
      },
      {
         id:4,
         src:reactimg,
         title:"React",
         style:"shadow-blue-600",
      },
      {
         id:5,
         src:bootstrap,
         title:"Bootstrap",
         style:"shadow-violet-400",
      },
      {
         id:6,
         src:tailwind,
         title:"TailWind CSS",
         style:"shadow-sky-300",
      },
      {
         id:7,
         src:python,
         title:"Python",
         style:"shadow-yellow-300",
      },
      {
         id:8,
         src:java,
         title:"Java",
         style:"shadow-orange-800",
      },
      {
         id:9,
         src:php,
         title:"PHP",
         style:"shadow-violet-100",
      },
      {
         id:10,
         src:mysql,
         title:"MySQL",
         style:"shadow-sky-800",
      },
      {
         id:11,
         src:figma,
         title:"Figma",
         style:"shadow-orange-600",
      },
      {
         id:12,
         src:git,
         title:"Git",
         style:"shadow-orange-400",
      },
      {
         id:13,
         src:nextjs,
         title:"Next Js",
         style:"shadow-gray-600",
      },
      {
         id:14,
         src:postgres,
         title:"PostgreSQL",
         style:"shadow-sky-900",
      },
      {
         id:15,
         src:prisma,
         title:"Prisma",
         style:"shadow-gray-600",
      },
      {
         id:16,
         src:shadcn,
         title:"ShadCN UI",
         style:"shadow-gray-200",
      },
   ]

   const mltechs=[
      {
         id:1,
         src:ml,
         title:"Machine Learning",
         style:"shadow-violet-600",
      },
      {
         id:2,
         src:nlp,
         title:"NLP",
         style:"shadow-blue-600",
      },
      {
         id:3,
         src:cv,
         title:"Computer Vision",
         style:"shadow-blue-900",
      },
   ]


   
  return (
    <div name="skills" className='bg-gray-900 mt-[-1px] w-full '>
      <div className='text-center text-gray-400'>
         <p>To explore</p>
         <h2 className='text-2xl font-semibold text-white'><span className='text-orange-500'>My </span>Skills</h2>
      </div>
        <div className='py-6 mx-10 text-white lg:mx-48 md:mx-16' data-aos='zoom-out' data-aos-duration='1200'>
          <h1 className='inline text-2xl font-semibold text-left text-gray-300 border-b-2 border-orange-400'>Frontend expertise </h1>
          <div className='grid w-full grid-cols-2 gap-8 py-8 text-center lg:grid-cols-4 md:px-2 md:grid-cols-3'>
            {techs.map((data)=>(
            <div key={data.id} className={'py-2 duration-500 rounded-lg shadow-md hover:scale-105' +
             " " + data.style}>
               <img src={data.src} alt="" className='w-20 mx-auto' />
               <p className='mt-4'>{data.title}</p>
             </div>
            ))}
            
          </div>
        </div>
        <div className='py-6 mx-10 text-white lg:mx-48 md:mx-16' data-aos='zoom-in' data-aos-duration='1200'>
          <h1 className='inline text-2xl font-semibold text-left text-gray-300 border-b-2 border-orange-400'>Machine learning expertise </h1>
          <div className='grid w-full grid-cols-2 gap-8 py-8 text-center lg:grid-cols-4 md:px-2 md:grid-cols-3'>
            {mltechs.map((data)=>(
            <div key={data.id} className={'py-2 duration-500 rounded-lg shadow-md hover:scale-105' +
             " " + data.style}>
               <img src={data.src} alt="" className='w-20 mx-auto' />
               <p className='mt-4'>{data.title}</p>
             </div>
            ))}
            
          </div>
        </div>
        
    </div>
  )
}

export default Skills