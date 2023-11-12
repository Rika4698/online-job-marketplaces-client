import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import MyJob from "./MyJob";
import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";


const MyJobSet = () => {
    
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
   
    const{email}=useParams();
    console.log(email);
    const[jobCard,setJobCard] = useState([]);
    const[job,setJob] = useState([]);
   useEffect(()=>{
    fetch(`https://online-job-marketplaces-server.vercel.app/my-jobs/${email}`,{credentials:'include'})
    .then(res=>res.json())
    .then(data=>setJob(data))
   },[email])
   
    // console.log(jobs);
    // const {email} = useParams();
    // console.log(email);
    useEffect(() => {
        
         const findJob = job && job?.filter((jobs) => jobs.email == userEmail);
    //    console.log(findJob);
       
           setJobCard(findJob);
         
           


       
    },[userEmail,job]);
    // console.log(jobCard);
   
    return (
        <div>
            <Helmet>
                <title>Work Wave|My Job</title>
            </Helmet>
             {
           jobCard && jobCard?.length == 0 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">No added any job post...</h1>
            :
            <div>
            <h1 className="text-center font-bold text-5xl text-blue-500 pt-8 mb-14 ">Post Job</h1>
            
            <div >
            {/* className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8"> */}
            {
          jobCard &&  jobCard?.map(cards => <MyJob key={cards._id} cards={cards}  jobCard={jobCard} setJobCard={setJobCard}></MyJob>
                )
            }
             </div>
             </div>
        
         }
        </div>
    );
};

export default MyJobSet;