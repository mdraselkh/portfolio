import React, { useState, useEffect } from "react";
import img from "..//assets/portfolio/freshbitecover.png";
import img1 from "..//assets/portfolio/haircutweb.png";
import img2 from "..//assets/portfolio/thesis.png";
import img3 from "..//assets/portfolio/fooddelivery.png";
import img4 from "..//assets/portfolio/eyeglass.png";
import img5 from "..//assets/portfolio/quiz.png";
import img6 from "..//assets/portfolio/boasting.png";
import img7 from "..//assets/portfolio/cofeeshop.png";
import img8 from "..//assets/portfolio/portfolio.png";
import img9 from "..//assets/portfolio/rumordectect.png";
const Portfolio = () => {
  const portfoliodata = [
    {
      id: 1,
      src: img,
      category: "Web",
      siteurl: "https://freshbitehaven-shop.vercel.app/",
      githuburl: "https://github.com/mdraselkh/freshbitehaven",
      style: "bg-orange-200",
    },
    {
      id: 2,
      src: img1,
      category: "Web",
      siteurl: "https://mdraselkh.github.io/Haircut-website/",
      githuburl: "https://github.com/mdraselkh/Haircur-website.git",
      style: "bg-[#bbfad1]",
    },
    {
      id: 3,
      src: img2,
      category: "ML",
      siteurl: "https://github.com/mdraselkh/Thesis-Project-ML-.git",
      githuburl: "https://github.com/mdraselkh/Thesis-Project-ML-.git",
      style: "bg-[#c5f6fa]",
    },
    {
      id: 4,
      src: img3,
      category: "Web",
      siteurl: "https://food-delivery-landing-page-puce.vercel.app",
      githuburl: "https://github.com/mdraselkh/FoodDelivery-LandingPage.git",
      style: "bg-[#faa2c0]",
    },

    {
      id: 5,
      src: img5,
      category: "Web",
      siteurl: "https://mdraselkh.github.io/Quiz-App/",
      githuburl: "https://github.com/mdraselkh/Quiz-App.git",
      style: "bg-[#dee6fa]",
    },
    {
      id: 6,
      src: img6,
      category: "ML",
      siteurl: "https://github.com/mdraselkh/Boasting-detection.git",
      githuburl: "https://github.com/mdraselkh/Boasting-detection.git",
      style: "bg-[#d1c2fc]",
    },
    {
      id: 7,
      src: img7,
      category: "Web",
      siteurl: "https://github.com/mdraselkh/Coffee-Shop-.git",
      githuburl: "https://github.com/mdraselkh/Coffee-Shop-.git",
      style: "bg-[#8a7474]",
    },
    {
      id: 8,
      src: img8,
      category: "Web",
      siteurl: "https://mdraselkh.github.io/my-portfolio/",
      githuburl: "https://github.com/mdraselkh/my-portfolio.git",
      style: "bg-orange-300",
    },
    {
      id: 9,
      src: img9,
      category: "ML",
      siteurl: "https://github.com/mdraselkh/Pattern-Recognition-Project.git",
      githuburl: "https://github.com/mdraselkh/Pattern-Recognition-Project.git",
      style: "bg-[#83def7]",
    },
    {
      id: 10,
      src: img4,
      category: "Web",
      siteurl: "https://md-rasel-landing-page-challenge.vercel.app/",
      githuburl: "https://github.com/mdraselkh/EyeGlass-LandingPage.git",
      style: "bg-[#f7d49c]",
    },
  ];

  const [nextitems, setNextitems] = useState(6);
  const [portfolios, setportfolios] = useState(portfoliodata);
  const [selecttab, setselectedtab] = useState("all");

  useEffect(() => {
    if (selecttab === "all") {
      setportfolios(portfoliodata);
    }

    if (selecttab === "web") {
      const filtereddata = portfoliodata.filter(
        (item) => item.category === "Web"
      );
      setportfolios(filtereddata);
    }

    if (selecttab === "ml") {
      const filtereddata = portfoliodata.filter(
        (item) => item.category === "ML"
      );
      setportfolios(filtereddata);
    }
  }, [selecttab]);

  const loadmoreHandler = () => {
    setNextitems((prev) => prev + 3);
  };

  return (
    <div name="portfolio" className="bg-gray-900 mt-[-1px] py-4">
      <div className="text-center text-gray-400">
        <p>Look Around</p>
        <h2 className="text-2xl font-semibold text-white">
          My <span className="text-orange-500">Projects</span>
        </h2>
      </div>
      <div className="flex items-center justify-between py-6 mx-10 lg:mx-48 md:mx-16">
        <div>
          <h1 className="text-2xl font-semibold text-gray-300">
            My recents projects
          </h1>
        </div>
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:gap-4">
          <button
            onClick={() => setselectedtab("all")}
            className="px-4 font-semibold text-gray-300 duration-500 border-2 border-orange-500 rounded cursor-pointer hover:bg-gradient-to-l from-orange-300 to-orange-500 hover:text-gray-800 hover:border-none md:px-6 md:py-2 md:items-start"
          >
            All
          </button>
          <button
            onClick={() => setselectedtab("web")}
            className="px-4 font-semibold text-gray-300 duration-500 border-2 border-orange-500 rounded cursor-pointer hover:bg-gradient-to-l from-orange-300 to-orange-500 hover:text-gray-800 hover:border-none md:px-6 md:py-2 md:items-start"
          >
            Web
          </button>
          <button
            onClick={() => setselectedtab("ml")}
            className="px-4 font-semibold text-gray-300 duration-500 border-2 border-orange-500 rounded cursor-pointer hover:bg-gradient-to-l from-orange-300 to-orange-500 hover:text-gray-800 hover:border-none md:px-6 md:py-2 md:items-start"
          >
            ML
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 py-6 mx-10 lg:grid-cols-3 md:gap-8 lg:mx-48 md:mx-16 md:grid-cols-2">
        {portfolios.slice(0, nextitems)?.map((data) => (
          <div
            key={data.id}
            className={
              "flex flex-col items-center max-w-full rounded-lg group" +
              " " +
              data.style
            }
            data-aos="fade-zoom-in"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            <img src={data.src} alt="" className="px-6 py-8 my-auto" />
            <div className="flex items-center justify-between w-full p-4 mb-0 bg-gray-600 rounded-b">
              <a
                href={data.siteurl}
                className="px-3 py-1 font-semibold text-white border-2 border-orange-500 rounded cursor-pointer hover:bg-gradient-to-t from-orange-300 to-orange-500 hover:text-gray-800 hover:border-none"
              >
                Demo
              </a>
              <a
                href={data.githuburl}
                className="px-3 py-1 font-semibold text-white border-2 border-orange-500 rounded cursor-pointer hover:bg-gradient-to-t from-orange-300 to-orange-500 hover:text-gray-800 hover:border-none"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center" data-aos="fade-up" data-aos-duration="1400">
        {nextitems < portfolios.length && portfolios.length > 3 && (
          <button
            onClick={loadmoreHandler}
            className="px-4 py-2 my-2 text-xl font-bold text-gray-900 duration-150 border-0 rounded-md cursor-pointer bg-gradient-to-l from-orange-600 to-orange-400"
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
