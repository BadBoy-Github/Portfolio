// Components
import CertificationsCard from "./CertificationsCard";
import { useRef } from "react";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FaAnglesLeft } from "react-icons/fa6";

const certificates = [
  {
    title: "React JS",
    imgSrc: "/img/certificates/React JS.jpg",
    company: "LetsUpgrade",
    logo: "/img/certificates/react.png",
  },
  {
    title: "Tailwind CSS",
    imgSrc: "/img/certificates/Tailwind CSS.jpg",
    company: "LetsUpgrade",
    logo: "/img/certificates/tailwind.png",
  },
  {
    title: "HTML",
    imgSrc: "/img/certificates/HTML.jpg",
    company: "Mimo",
    logo: "/img/certificates/html.png",
  },
  {
    title: "CSS",
    imgSrc: "/img/certificates/CSS.jpg",
    company: "Mimo",
    logo: "/img/certificates/css.png",
  },
  {
    title: "JavaScript",
    imgSrc: "/img/certificates/JavaScript.jpg",
    company: "Learnz Development Hub",
    logo: "/img/certificates/javascript.png",
  },
  {
    title: "JavaScript",
    imgSrc: "/img/certificates/js.jpg",
    company: "LetsUpgrade",
    logo: "/img/certificates/javascript.png",
  },
  {
    title: "Wordpress",
    imgSrc: "/img/certificates/Wordpress.jpg",
    company: "Coursera",
    logo: "/img/certificates/wordpress.png",
  },
  {
    title: "MERN Stack",
    imgSrc: "/img/certificates/MERN Stack.jpg",
    company: "SimpliLearn",
    logo: "/img/certificates/mern.png",
  },
  {
    title: "SEO",
    imgSrc: "/img/certificates/SEO1.jpg",
    company: "Coursera",
    logo: "/img/certificates/seo.png",
  },
  {
    title: "SEO",
    imgSrc: "/img/certificates/SEO.jpg",
    company: "Programming Hub",
    logo: "/img/certificates/seo.png",
  },
  {
    title: "Generative AI",
    imgSrc: "/img/certificates/Generative AI.jpg",
    company: "Guvi",
    logo: "/img/certificates/ai.png",
  },
  {
    title: "Git & GitHub",
    imgSrc: "/img/certificates/Git & GitHub.jpg",
    company: "LetsUpgrade",
    logo: "/img/certificates/github.png",
  },
  {
    title: "Git",
    imgSrc: "/img/certificates/Git.jpg",
    company: "Programming Hub",
    logo: "/img/certificates/git.png",
  },
  {
    title: "Frontend Development",
    imgSrc: "/img/certificates/Frontend.jpg",
    company: "SimpliLearn",
    logo: "/img/certificates/frontend.png",
  },
  {
    title: "Python",
    imgSrc: "/img/certificates/Python.jpg",
    company: "Mimo",
    logo: "/img/certificates/python.png",
  },
  {
    title: "Python Dev",
    imgSrc: "/img/certificates/Python Dev.jpg",
    company: "Mimo",
    logo: "/img/certificates/python.png",
  },
  {
    title: "ChatGPT for Everyone",
    imgSrc: "/img/certificates/ChatGPT.jpg",
    company: "Guvi",
    logo: "/img/certificates/chatgpt.png",
  },
  {
    title: "Tech Career Kickstart",
    imgSrc: "/img/certificates/techcareer.jpg",
    company: "SimpliLearn",
    logo: "/img/certificates/techcareer.png",
  },
  {
    title: "Canva",
    imgSrc: "/img/certificates/Canva.jpg",
    company: "LetsUpgrade",
    logo: "/img/certificates/canva.png",
  },
  {
    title: "Video Editing with Canva",
    imgSrc: "/img/certificates/Canva Video.jpg",
    company: "Coursera",
    logo: "/img/certificates/videoediting.png",
  },
  {
    title: "Social Media Management",
    imgSrc: "/img/certificates/Social Media Management.jpg",
    company: "Great Learning",
    logo: "/img/certificates/socialmedia.png",
  },
  {
    title: "Digital Marketing Fundamentals",
    imgSrc: "/img/certificates/Digital Marketing Fundamentals.jpg",
    company: "IIDE The Digital School",
    logo: "/img/certificates/marketing.png",
  },
  {
    title: "Business Analysis",
    imgSrc: "/img/certificates/Business Analysis.jpg",
    company: "Coursera",
    logo: "/img/certificates/analysis.png",
  },
  {
    title: "Investment Risk Management",
    imgSrc: "/img/certificates/IRM.jpg",
    company: "Coursera",
    logo: "/img/certificates/irm.png",
  },
  {
    title: "Power BI",
    imgSrc: "/img/certificates/Power BI.jpg",
    company: "Great Learning",
    logo: "/img/certificates/powerbi.png",
  },
  {
    title: "Introduction to Microsoft Excel",
    imgSrc: "/img/certificates/Excel1.jpg",
    company: "Coursera",
    logo: "/img/certificates/excel.png",
  },
  {
    title: "Excel",
    imgSrc: "/img/certificates/Excel.jpg",
    company: "LetsUpgrade",
    logo: "/img/certificates/excel.png",
  },
  {
    title: "Excel Data Analysis",
    imgSrc: "/img/certificates/Excel Data Analysis.jpg",
    company: "Coursera",
    logo: "/img/certificates/data analysis.png",
  },
  {
    title: "Google Ads for Beginners",
    imgSrc: "/img/certificates/Google Ads.jpg",
    company: "Coursera",
    logo: "/img/certificates/googleads.png",
  },
  {
    title: "Video Editing",
    imgSrc: "/img/certificates/Video Editing.jpg",
    company: "Great Learning",
    logo: "/img/certificates/videoediting.png",
  },
];

const Certifications = () => {

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 436;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToStart = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const scrollToEnd = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  };



  return (
    <section id="certification" className="section ">
      <div className="px-4 mx-auto lg:px-6 xl:max-w-6xl container relative">
        <h2 className="headline-2">My Certification Milestones</h2>
        <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
          A journey through certifications that validate my skills and growth
        </p>

        {/* Arrows */}
        <div className="hidden lg:flex justify-between items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute z-10 p-4 bg-black rounded-full flex items-center justify-center opacity-75 left-0 top-[53%] group hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <FaChevronLeft className="group-hover:scale-150 transition-all duration-300" />
          </button>
          <button
            onClick={scrollToStart}
            className="absolute z-10 p-4 bg-black/40 rounded-full flex items-center justify-center opacity-50 -left-14 top-[53%] group hover:opacity-75 hover:scale-110 transition-all duration-300"
          >
            <FaAnglesLeft className="group-hover:scale-150 transition-all duration-300" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute z-10 p-4 bg-black rounded-full flex items-center justify-center opacity-75 right-0 top-[53%] group hover:opacity-100 hover:scale-110 transition-all duration-300"
          >
            <FaChevronRight className="group-hover:scale-150 transition-all duration-300" />
          </button>
          <button
            onClick={scrollToEnd}
            className="absolute z-10 p-4 bg-black/40 rounded-full flex items-center justify-center opacity-50 -right-14 top-[53%] group hover:opacity-75 hover:scale-110 transition-all duration-300"
          >
            <FaAnglesRight className="group-hover:scale-150 transition-all duration-300" />
          </button>
        </div>

        {/* Scrollable container */}
        <div
          ref={scrollRef}
          className="overflow-x-auto hide-scrollbar scroll-smooth rounded-xl"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex flex-row gap-4 w-fit min-w-full">
            {/** Split into columns, each column contains 2 rows */}
            {Array.from({ length: Math.ceil(certificates.length / 2) }).map(
              (_, colIdx) => {
                const topIdx = colIdx * 2;
                const bottomIdx = colIdx * 2 + 1;

                const topCert = certificates[topIdx];
                const bottomCert = certificates[bottomIdx];

                return (
                  <div
                    key={colIdx}
                    className="flex flex-col gap-4 min-w-[320px] lg:min-w-[420px]"
                  >
                    {topCert && (
                      <CertificationsCard
                        key={`cert-top-${colIdx}`}
                        title={topCert.title}
                        imgSrc={topCert.imgSrc}
                        company={topCert.company}
                        logo={topCert.logo}
                        certNumber={certificates.length - topIdx}
                      />
                    )}
                    {bottomCert && (
                      <CertificationsCard
                        key={`cert-bottom-${colIdx}`}
                        title={bottomCert.title}
                        imgSrc={bottomCert.imgSrc}
                        company={bottomCert.company}
                        logo={bottomCert.logo}
                        certNumber={certificates.length - bottomIdx}
                      />
                    )}
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
