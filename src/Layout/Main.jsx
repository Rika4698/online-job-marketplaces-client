
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Navbar/Navbar';
import Footer from '../Pages/Footer/Footer';
import { motion } from "framer-motion"


const Main = () => {
    return (
        <div>
            <div className='sticky top-0 z-10'> 
             <motion.div initial={{y: -250}} animate={{y: -5}}>
             <Navbar></Navbar>
                </motion.div>   
           
            </div>
            <Outlet></Outlet>
            <motion.div initial={{x: -250}} animate={{x: 0}} >
            <Footer></Footer>
            </motion.div>
            
        </div>
    );
};

export default Main;