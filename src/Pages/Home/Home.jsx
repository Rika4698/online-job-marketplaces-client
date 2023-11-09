import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
// import BrowseCategorySet from "../BrowseCategory/BrowseCategorySet";
// import { useEffect } from "react";

import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

// import BrowseCategory from "../BrowseCategory/BrowseCategory";
import { useState } from "react";
import BrowseCategory from "../BrowseCategory/BrowseCategory";
import UpcomingJob from "../UpcomingJob/UpcomingJob";
// import UpdateData from "../UpdateData/UpdateData";
// import MyJobSet from "../MyJob/MyJobSet";



const Home = () => {
    const job = useLoaderData();
//    console.log(job);
   const [selectedTab, setSelectedTab] = useState(0);
   const categoryData = ['Web Development', 'Digital Marketing', 'Graphics Design'];
   const getFilteredJobs = () => {
    return job.filter((jobs) => jobs.category === categoryData[selectedTab]);
  };
  
    
    return (
        <div>
            <Banner></Banner>
            {/* <BrowseCategorySet></BrowseCategorySet> */}
            <div >
      <Tabs  selectedIndex={selectedTab} onSelect={(index) => setSelectedTab(index)}>
        <TabList className="bg-blue-300 p-2 text-center text-2xl text-fuchsia-700 font-bold ">
          {categoryData.map((category, index) => (
            <Tab  key={index} >{category}</Tab>
          ))}
        </TabList>
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
      </Tabs>
      <UpcomingJob></UpcomingJob>
    </div>
            
           
        </div>
    );
};

export default Home;