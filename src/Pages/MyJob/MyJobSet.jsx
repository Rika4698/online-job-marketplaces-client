import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
// import MyJob from "./MyJob";
import { Helmet } from "react-helmet-async";
import MyAllJob from "./MyAllJob";
// import Swal from "sweetalert2";


const MyJobSet = () => {
    
    const { user } = useContext(AuthContext);
    const userEmail = user?.email;
    const [loading, setLoading] = useState(true);
    const job =useLoaderData();
    // const{email}=useParams();
    // console.log(job);
    const[jobCard,setJobCard] = useState([]);
    // const[job,setJob] = useState([]);
//    useEffect(()=>{
//     if (!email) return;
//     fetch(`http://localhost:5000/my-jobs/${email}`,{credentials:'include'})
//     .then(res=>res.json())
//     .then(data=>{
//         setJob(data);
//         setLoading(false);
//     })
//     .catch(err => console.error(" Fetch Error:", err));
   
//    },[email]);
   
    // console.log(jobs);
    // const {email} = useParams();
    // console.log(email);
    useEffect(() => {
        
         const findJob = job && job?.filter((jobs) => jobs.email == userEmail);
    //    console.log(findJob);
       
           setJobCard(findJob);
         
           if (jobCard) {
              setLoading(false); // Data has been fetched
              }


       
    },[userEmail,job,jobCard]);
    // console.log(jobCard);
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen bg-white ">
            <span className="loading loading-spinner loading-lg text-gray-800 "></span>
        </div>
        );
      }
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
            <h1 className="text-center font-bold text-5xl text-blue-500 pt-8 mb-8 ">My Post Job</h1>
            
            <div >
            {/* className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8"> */}
            <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8  ">
            {
          jobCard &&  jobCard?.map(cards => <MyAllJob key={cards._id} cards={cards}  jobCard={jobCard} setJobCard={setJobCard}></MyAllJob>
                )
            }</ul>
             </div>
             </div>
        
         }
        </div>
    );
};

export default MyJobSet;