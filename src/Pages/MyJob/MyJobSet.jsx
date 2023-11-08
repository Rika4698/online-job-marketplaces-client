import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import MyJob from "./MyJob";
import Swal from "sweetalert2";


const MyJobSet = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const[jobCard,setJobCard] = useState([]);
    const job = useLoaderData();
    // console.log(job);
    // const {email} = useParams();
    // console.log(email);
    useEffect(() => {
        const findJob = job.filter((jobs) => jobs.email == email);
        // console.log(findJob);
        
            setJobCard(findJob);

           

       
    },[email,job])
    // console.log(jobCard.length);
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            console.log(result);
            const info = { email: user.email, id: id }
            console.log(info);
            if (result.isConfirmed) {
                fetch("http://localhost:5000/jobs", {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(info)
                })
                    .then(res => res.json())
                    .then(data => {
                        const filtered = jobCard.filter(cart => cart._id != id && user.email == cart.email);
                        console.log(filtered);
                        setJobCard(filtered);
                        console.log(data);
                        if ((data.deletedCount >= 0)) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Delete job succesfully.',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            // setTotalLength(totalLength - 1);
                        }
                      
                    }
                    )
                    
            }
        })
    };
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
            jobCard.map(cards => <MyJob key={cards._id} cards={cards} handleDelete={handleDelete}></MyJob>
                )
            }
             </div>
             </div>
        
         }
        </div>
    );
};

export default MyJobSet;