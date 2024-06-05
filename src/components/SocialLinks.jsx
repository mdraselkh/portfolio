import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links=[
   {
      id:1,
      child:(
         <>
            LinkedIn<FaLinkedin size={30}/>
         </>
      ),
      href:"https://www.linkedin.com/in/md-raselkhan/",
      style:"rounded-tr-md",

   },
   {
      id:2,
      child:(
         <>
            Github<FaGithub size={30}/>
         </>
      ),
      href:"https://github.com/mdraselkh",
      

   },
   {
      id:3,
      child:(
         <>
            Mail<HiOutlineMail size={30}/>
         </>
      ),
      href:"mailto:mdrasel.rkh@gmail.com",
      

   },
   {
      id:4,
      child:(
         <>
            Resume<BsFillPersonLinesFill size={30}/>
         </>
      ),
      href:"/resume.pdf",
      style:"rounded-br-md",
      download:true,

   },

  ]

  return (
    <div className="lg:flex flex-col fixed left-0 top-[30%] hidden ">
      <ul>
          {links.map(({id,child,href,style,download})=>(
             <li key={id} className={"flex justify-between items-center w-40 bg-orange-500 px-4 h-14 hover:rounded-md hover:ml-[-10px] ml-[-100px] duration-200" + 
             " " + style}>
             <a href={href} className="flex justify-between items-center w-full text-black font-semibold text-xl " download={download} target="_blank" rel="noreferrer">
               {child}
             </a>
           </li>
          ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
