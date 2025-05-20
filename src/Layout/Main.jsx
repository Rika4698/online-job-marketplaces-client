
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
// import { motion } from "framer-motion"
import ScrollToTop from './ScrollToTop';
import { useEffect, useState } from 'react';


const Main = () => {

 const [isLoading, setIsLoading] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
       
        const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
      }, []);


    // Toggle visibility of the button based on scroll position
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    // Function to scroll to the top
    const goToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };



    const noHeaderFooter = location.pathname.includes('login')|| location.pathname.includes('register');

    return (
      <div>
       {isLoading ? (
        <div className="flex justify-center items-center h-screen bg-white dark:bg-slate-800">
        <span className="loading loading-spinner loading-lg text-gray-800 dark:text-gray-200"></span>
    </div>
      ) : (<>
        <div>
            <ScrollToTop></ScrollToTop>
            <div className='sticky top-0 z-10'> 
             {/* <motion.div initial={{y: -250}} animate={{y: -5}}> */}
            { noHeaderFooter || <Navbar></Navbar>}
                {/* </motion.div>    */}
           
            </div>
            <Outlet></Outlet>
            {/* <motion.div initial={{x: -250}} animate={{x: 0}} > */}
            {noHeaderFooter || <Footer></Footer>}
            {/* </motion.div> */}


            {/* <button
      onClick={goToTop}
      title="Go To Top"
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed z-50 bottom-10 right-10 p-4 border-0 w-10 h-10 md:w-14 md:h-14 rounded-full shadow-md bg-blue-500 hover:bg-blue-700 text-white text-lg font-semibold transition-colors duration-300 `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 "
      >
        <path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" />
      </svg>
      <span className="sr-only">Go to top</span>
    </button> */}

    <button
      onClick={goToTop}
      title="Go To Top"
      className={`
        ${isVisible ? 'flex' : 'hidden'}
        fixed 
        z-50 
        bottom-4 
        right-4 
        md:bottom-9 
        md:right-9 
        p-2 
        md:p-3 
        border-0 
        w-10 
        h-10 
        md:w-12 
        md:h-12 
        rounded-full 
        shadow-lg 
        bg-green-600 
        hover:bg-green-700 
        text-white 
        items-center 
        justify-center 
        transition-all 
        duration-300
        hover:scale-110
      `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-5 h-5 md:w-6 md:h-6 m-auto"
      >
        <path 
          fillRule="evenodd" 
          d="M12 2a1 1 0 0 1 .707.293l7 7a1 1 0 0 1-1.414 1.414L13 5.414V21a1 1 0 1 1-2 0V5.414L5.707 10.707a1 1 0 0 1-1.414-1.414l7-7A1 1 0 0 1 12 2z"
          clipRule="evenodd"
        />
      </svg>
      <span className="sr-only">Go to top</span>
    </button>
            
        </div>
        </>)}</div>
    );
};

export default Main;