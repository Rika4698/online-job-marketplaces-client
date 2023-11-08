// import {  useState } from "react";
import { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";


const JobDetailsSet = () => {
    // const[jobs,setJobs] = useState({});
    const{user} = useContext(AuthContext);
    const userEmail = user?.email;
    const job =useLoaderData();
    const{ name, image,email, deadline, description,minPrice,maxPrice } = job;
    const paragraphs = description.split('\n');
    // const bids = user.email == email;
    // console.log(bids);

    const handleBid = event => {
        event?.preventDefault();
       
        const form = event.target;
        console.log(form);
        
        
        // const price = form.price.value;
        
        // const deadline = form.deadline.value;

        // const userEmail = form.userEmail.value;
        // const email  = form.email.value;
        // console.log(email);
      
        
        // const newJob = { name, image, email,deadline, category, description,minPrice,maxPrice }

        // console.log(newJob);
        //send data to the server
        // fetch('http://localhost:5000/jobs',{
        //     method:'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(newJob)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        //     if(data.insertedId)
        //     {
        //     swal({
        //         title: 'okay!',
        //         text: 'Job Added Successfully ',
        //         icon:'success',
        //     })
        //     }
        //     // navigate(location?.state?location.state :'/my-job' )

        // })

    }
   
   
   
   
   
   
   
   
   
   
   
   
    return (
        <div>
            <div className="card my-4 lg:card-side lg:mx-10 lg:my-4 bg-base-100 ">
  <figure className=" w-auto lg:rounded-none  lg:w-[800px] lg:h-[250px]"><img src={image} alt=""/></figure>
  <div className="card-body bg-slate-200">
    <h2 className="card-title font-bold text-3xl">{name}</h2>    
        
    <h3 className="text-black">Deadline:  {deadline}</h3>    
    <h3 className="text-orange-600 font-bold">Price range: {minPrice}TK-{maxPrice}TK</h3>
    <h3 className="font-bold text-xl text-green-600">Description:</h3>
    {paragraphs.map((paragraph, index) => (
        <p className="" key={index}>{paragraph}</p>
      ))}
    
  </div>
</div>

<div className="bg-[rgb(248,245,248)] p-24">
            <h2 className="text-5xl font-extrabold text-center text-green-400  mb-10"> Place Your Bid</h2>
            <form onClick={handleBid} > 
                
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Price:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                            <span className="label-text font-semibold text-base">Deadline:</span>
                        </label>
                        <label className="input-group">
                        <input type="text" placeholder="Deadline" className="input input-bordered w-full"  name="deadline" />
                        </label>
                    </div>
                    
                   
                </div>
              
               
                <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Email:</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="userEmail" placeholder="UserEmail" value={userEmail} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                            <span className="label-text font-semibold text-base">Buyer Email:</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" value={email} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
      
               {
                userEmail == email?
                <div className=" btn-disabled  text-center  text-xl rounded-lg bg-slate-300 w-40 h-8 text-white lg:ml-60 lg:w-96 xl:ml-96">
              
                <button  >Bid on the project</button>
                </div>
                :
                <div className="btn text-center  text-xl rounded-lg bg-lime-500 w-40 h-8 text-white lg:ml-60 lg:w-96 xl:ml-96">
              
                <button  >Bid on the project</button>
                </div>

               }
   

            </form>
        </div>  
        </div>
    );
};

export default JobDetailsSet;