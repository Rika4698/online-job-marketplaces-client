import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
// import BrowseCategorySet from "../BrowseCategory/BrowseCategorySet";
// import { useEffect } from "react";
// import{motion}from 'framer-motion';

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

import BrowseCategory from "../BrowseCategory/BrowseCategory";
import {  useState } from "react";
// import BrowseCategory from "../BrowseCategory/BrowseCategory";
import UpcomingJob from "../UpcomingJob/UpcomingJob";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet";
// import { MotionConfig } from "framer-motion";

// import UpdateData from "../UpdateData/UpdateData";
// import MyJobSet from "../MyJob/MyJobSet";



const Home = () => {
    const job = useLoaderData();
//    console.log(job);
   const [selectedTab, setSelectedTab] = useState(0);
  //  const categoryData = ['Web Development', 'Digital Marketing', 'Graphics Design'];

   const categoryData = [
    { name: "Web Development", bgColor: "bg-blue-300", ring:"ring-blue-900" },
    { name: "Digital Marketing", bgColor: "bg-green-300", ring:"ring-green-900" },
    { name: "Graphics Design", bgColor: "bg-yellow-200",ring:"ring-yellow-900" },
  ];
  const getFilteredJobs = () => {
    return job.filter((jobs) => jobs.category === categoryData[selectedTab].name);
  };


  //  const getFilteredJobs = () => {
  //   return job.filter((jobs) => jobs.category === categoryData[selectedTab]);
  // };
    
    
    return (
        <div>
          <Helmet>
            <title>Work Wave|Home</title>
          </Helmet>
            <Banner></Banner>
            {/* <BrowseCategorySet></BrowseCategorySet> */}
            <div >
            
      {/* <Tabs  selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
      <motion.div  initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay:1.0,duration:1.0}}>
      <TabList className="bg-blue-300 p-2 text-center text-2xl text-fuchsia-700 font-bold ">
          {categoryData.map((category, index) => (
            <Tab  key={index} >{category}</Tab>
          ))}
        </TabList>
              </motion.div>
              <motion.div  initial={{x: '100vw'}} animate={{x:0}} transition={{type:'spring',delay:1.5}}>
        {categoryData.map((category, index) => (
          <TabPanel key={index}>
            <div className="job-cards grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
              {getFilteredJobs().map((job) => (
                
                <BrowseCategory key={job._id} job={job} ></BrowseCategory>
               
              ))
              
              }
            </div>
          </TabPanel>
         
        ))}
          </motion.div>
      </Tabs>


      <div className="p-5">
        <Tabs
          selectedIndex={selectedTab}
          onSelect={(index) => setSelectedTab(index)}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.0 }}
          >
            <TabList className="flex justify-center bg-blue-300 p-3 rounded-lg text-center text-xl md:text-2xl font-semibold text-fuchsia-700">
              {categoryData.map((category, index) => (
                <Tab
                  key={index}
                  className="px-5 py-2 mx-2 rounded-lg cursor-pointer hover:bg-blue-400 hover:shadow-md"
                  selectedClassName="bg-blue-500 text-white"
                >
                  {category}
                </Tab>
              ))}
            </TabList>
          </motion.div>

          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 1.0 }}
          >
            {categoryData.map((category, index) => (
              <TabPanel key={index}>
                <div className="grid grid-cols-1 gap-6 pt-10 pb-12 md:grid-cols-2 lg:grid-cols-3">
                  {getFilteredJobs().map((job) => (
                    <BrowseCategory key={job._id} job={job}></BrowseCategory>
                  ))}
                </div>
              </TabPanel>
            ))}
          </motion.div>
        </Tabs>
      </div> */}

      <div className="pt-5 bg-slate-200">
        <Tabs selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
          {/* <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.0 }}
          > */}
            {/* Tab List */}
            <TabList className="flex flex-wrap gap-5 justify-center p-1 rounded-lg text-center text-xl md:text-2xl font-semibold ">
              {categoryData.map((category, index) => (
                <Tab
                  key={index}
                  className={`px-5 py-2 mx-2 rounded-lg cursor-pointer hover:shadow-md ${category.bgColor} ${category.ring}`}
                  selectedClassName={`ring-1 ${category.ring}` }
                >
                  {category.name}
                </Tab>
              ))}
            </TabList>
          {/* </motion.div> */}

          {/* <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ type: "spring", delay: 1.0 }}
          > */}
            {/* Tab Panels */}
            {categoryData.map((category, index) => (
              <TabPanel key={index}>
                <div className={`grid grid-cols-1 gap-8  py-10  md:grid-cols-2 lg:grid-cols-3 ${category.bgColor} p-8`}>
                  {getFilteredJobs().map((job) => (
                    <BrowseCategory key={job._id} job={job}></BrowseCategory>
                  ))}
                </div>
              </TabPanel>
            ))}
          {/* </motion.div> */}
        </Tabs>
      </div>

      
     
         <UpcomingJob></UpcomingJob>
      <Testimonials></Testimonials>

     
     
    </div>
            
           
        </div>
    );
};

export default Home;