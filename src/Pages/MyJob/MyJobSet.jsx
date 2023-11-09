import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import MyJob from "./MyJob";
// import Swal from "sweetalert2";


const MyJobSet = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const job = useLoaderData();
    const[jobCard,setJobCard] = useState([]);
   
    // const[jobs,setJobs] = useState(job);
    // console.log(jobs);
    // const {email} = useParams();
    // console.log(email);
    useEffect(() => {
        const findJob = job.filter((jobs) => jobs.email == email);
        // console.log(findJob);
        
            setJobCard(findJob);

           

       
    },[email,job]);
    // console.log(jobCard);
   
    return (
        <div>
             {
            jobCard.length == 0 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">No added any job post...</h1>
            :
            <div>
            <h1 className="text-center font-bold text-5xl text-blue-500 pt-8 mb-14 ">Post Job</h1>
            
            <div >
            {/* className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8"> */}
            {
            jobCard.map(cards => <MyJob key={cards._id} cards={cards}  jobCard={jobCard} setJobCard={setJobCard}></MyJob>
                )
            }
             </div>
             </div>
        
         }
        </div>
    );
};

export default MyJobSet;