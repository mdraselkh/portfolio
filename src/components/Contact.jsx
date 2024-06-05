import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {Link} from 'react-scroll';

const Contact = () => {
  const medialinks = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} />
        </>
      ),
      href: "https://www.linkedin.com/in/md-raselkhan/",
      
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} />
        </>
      ),
      href: "https://github.com/mdraselkh",
    },
    {
      id: 3,
      child: (
        <>
          <FaFacebook size={20} />
        </>
      ),
      href: "https://www.facebook.com/rashel.khan.399041/",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={20} />
        </>
      ),
      href: "/resume.pdf",
      download: true,
    },
  ];

  return (
    <div name="contact" className="bg-gray-900 mt-[-2px] pt-4">
      <div className="text-center text-gray-400">
        <p>Get In Touch </p>
        <h2 className="text-2xl font-semibold text-white">
          <span className="text-orange-500">Contact </span>Me
        </h2>
      </div>
      <div className="mx-10 my-10 bg-gray-800 rounded-md lg:mx-48 md:mx-16">
        <div className="flex flex-col items-start justify-between gap-5 px-4 py-6 md:flex-row md:items-start md:gap-10 md:px-10">
          <div class="flex flex-col items-start justify-between text-gray-400 gap-4">
            <a
              href="mailto:mdrasel.rkh@gmail.com"
              className="flex items-center"
            >
              {" "}
              <span className="mr-4 hover:scale-100">
                <HiOutlineMail
                  size={35}
                  className="p-1 text-black bg-orange-400 border-2 border-orange-400 rounded-full"
                />
              </span>{" "}
              mdrasel.rkh@gmail.com
            </a>
            <a
              href="mailto:mdrasel.rkh@gmail.com"
              className="flex items-center "
            >
              {" "}
              <span className="mr-4 hover:scale-100">
                <FaPhone
                  size={35}
                  className="p-1 text-black bg-orange-400 border-2 border-orange-400 rounded-full"
                />
              </span>{" "}
              +88019 32 58 7313
            </a>
            <a
              href="mailto:mdrasel.rkh@gmail.com"
              className="flex items-center"
            >
              {" "}
              <span className="mr-4 hover:scale-100">
                <FaLocationPin
                  size={35}
                  className="p-1 text-black bg-orange-400 border-2 border-orange-400 rounded-full"
                />
              </span>{" "}
              Dhour, Turag, Dhaka
            </a>
          </div>
          <div className="w-full h-full mt-4 md:mt-0">
            <form
              action="https://getform.io/f/nbvvxvkb" method="POST"
              className="flex flex-col gap-4 font-semibold text-white md:gap-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="p-3 bg-gray-900 rounded-lg outline-none"
              />
              <input
                type="Email"
                name="email"
                placeholder="Your Email Address"
                className="p-3 bg-gray-900 rounded-lg outline-none"
              />
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
                rows={10}
                className="p-3 bg-gray-900 rounded-lg outline-none"
              ></textarea>
              <div className="flex items-center justify-center">
              <button className="px-4 py-2 my-4 text-xl text-center text-white duration-150 border-0 rounded-md cursor-pointer bg-gradient-to-l from-orange-600 to-orange-400 " data-aos='zoom-in-up' data-aos-duration='1200'>
              Submit
            </button>
              </div>
             
            </form>
            
          </div>
        </div>
      </div>
      <div className="grid w-full h-24 grid-cols-2 gap-4 px-4 bg-gray-800 lg:px-48 md:h-20 lg:grid-cols-1 md:px-16">
        <ul className="flex flex-row items-center justify-between md:justify-normal md:gap-2 lg:hidden">
          {medialinks.map(({ id, child, href, download }) => (
            <li
              key={id}
              className={
                "bg-orange-500 rounded p-2 " 
              }
            >
              <a
                href={href}
                className="w-full text-xl font-semibold text-gray-800"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-row items-center justify-between gap-2">
        <p className="font-semibold text-gray-400">Copyright @MRasel. 2024</p>
        
        <Link to={'home'} smooth duration={500} className="p-3 text-xl text-center text-white duration-150 border-0 rounded-md cursor-pointer bg-gradient-to-b from-orange-600 to-orange-400 ">
          <IoIosArrowUp />
        </Link>
        </div>
        
        
      </div>
    </div>
  );
};

export default Contact;
