// import {  useState } from "react";
import { useContext} from "react";
import {  useLoaderData, useLocation, useNavigate} from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import swal from "sweetalert";
import { Helmet } from "react-helmet";
// import Swal from "sweetalert2";


const JobDetailsSet = () => {
    // const[jobs,setJobs] = useState({});
    const location = useLocation();
  const navigate = useNavigate();
    const{user} = useContext(AuthContext);
    const userEmail = user?.email;
    const job =useLoaderData();
   
    const{ _id,name, image,email, deadline,category, description,minPrice,maxPrice } = job ||{};
    // const paragraphs = description.split('\n');
    // const [isDisabled, setIsDisabled] = useState(userEmail === email);
    // const bids = user.email == email;
    // console.log(bids);
    // const todayDate = new Date(Date.now()).toDateString();
    // const jobDate = new Date(deadline).toDateString();
//     console.log(todayDate);
// console.log(jobDate);
    // const isBidButtonDisabled = jobDate >= todayDate;
//    console.log(isBidButtonDisabled);
const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0); // Set time to 00:00:00
const jobDate = new Date(deadline);
jobDate.setHours(0, 0, 0, 0); // Set time to 00:00:00

const isBidButtonDisabled = jobDate.getTime() >= todayDate.getTime(); 
const categoryColors = {
    "Web Development": "#60A5FA", 
    "Digital Marketing": "#34D399", 
    "Graphics Design": "#FBBF24", 
    
  };
  
    const handleBid = event => {
        event?.preventDefault();
       
        const form = event.target;
        // console.log(form);
        
        
        const price = form.price.value;
        
        const deadline = form.deadline.value;

        const userEmail = form.userEmail.value;
        const email  = form.email.value;
        // console.log(deadline);
        const status = 'pending';
      
        
        const myBid = { name, price, email,deadline, userEmail,status }

        console.log(myBid);
        //send data to the server
        fetch('https://online-job-marketplaces-server.vercel.app/bids',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(myBid),credentials:'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
            swal({
                title: 'okay!',
                text: ' Bid Successfully ',
                icon:'success',
            }).then(() => {
            navigate(location?.state?location.state :'/my-bids' ) })
            }
           
            

        })

    }
   
   
   
   
    return (
        <div>
            <Helmet>
                <title>Work Wave| jobs details/{_id}</title>
            </Helmet>
            {/* <div className="card my-4 lg:card-side lg:mx-10 lg:my-4 bg-base-100 ">
  <figure className=" w-auto lg:rounded-none  lg:w-[800px] lg:h-[250px]"><img src={image} alt=""/></figure>
  <div className="card-body bg-slate-200 ">
    <h2 className="card-title font-bold text-3xl">{name}</h2>    
        
    <div className="flex gap-2">
    <h3 className="text-green-600 font-bold ">Deadline:</h3>
    <h3 className="">{deadline}</h3>
        </div>    
    <h3 className="text-orange-600 font-bold">Price range: {minPrice}TK-{maxPrice}TK</h3>
    <h3 className="font-bold text-xl text-pink-600">Description:</h3>
    {paragraphs.map((paragraph, index) => (
        <p className="" key={index}>{paragraph}</p>
      ))}
    
  </div>
</div> */}


<div 
      className="bg-white   md:rounded-lg p-6 max-w-xl mx-auto lg:max-w-2xl xl:max-w-4xl  "
      
    >
      {/* Job Image */}
      <img src={image} alt={name} className="w-full h-56 lg:h-64 xl:h-80 object-cover rounded-md mb-4 " />

      {/* Job Title & Category */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center my-3 xl:mx-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{name}</h2>
        <span 
          className="text-center px-3 py-1 rounded-full text-white text-sm font-semibold mt-2 "
          style={{ backgroundColor: categoryColors[category] || "#607D8B" }} // Category Wise Color
        >
          {category}
        </span>
      </div>

      {/* Salary & Deadline */}
      <p className="text-blue-700 font-medium text-lg xl:mx-6">
        💰 Salary range: <span className="font-semibold">{minPrice} - {maxPrice} TK</span>
      </p>
      <p className={`${isBidButtonDisabled? " text-green-700 ":"text-red-700 animate-bounce"} mt-1 font-medium text-lg xl:mx-6`}>📅 Deadline: <span className="font-semibold">{deadline}</span></p>

      {/* Full Description */}
      <p className=" xl:mx-6 text-blue-800 font-bold text-lg xl:text-xl mt-4 whitespace-pre-line leading-relaxed">Description: <span className="new block text-zinc-700 font-medium text-base pb-4 mt-2 xl:text-lg">
        {description}</span>
      </p>
    </div>







        <div className="flex justify-center items-center min-h-screen bg-white    ">
  <form onSubmit={handleBid}  id="productForm" className="bg-sky-100  rounded-lg p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl my-10 lg:my-14 shadow-md shadow-slate-400  ">
    <h2 className="text-4xl font-bold text-sky-700 mb-6 text-center mt-8  ">Place Your Bid</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 mx-4 ">
     
      <div className="mb-4">
        <label htmlFor="productName" className="block text-base  font-semibold text-gray-600 mb-2 lg:text-xl ">Salary:</label>
        <input
         type="text" name="price" placeholder="Enter expected salary" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" required
        />
      </div>

      
      <div className="mb-4">
        <label htmlFor="photoURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Deadline:</label>
        <input
         
           type="text" placeholder="Deadline"   name="deadline"
         
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " required
        />
      </div>

    
      <div className="mb-4">
        <label htmlFor="brandName" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Email:</label>
        <input
          type="email" name="userEmail" placeholder="UserEmail" value={userEmail}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500    focus:outline-none" required
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="brandURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Employer Email:</label>
        <input
          type="email" name="email" placeholder="Email" value={email} readOnly 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none"
        />
      </div>

     

     
    </div>

  
    <div className="">
    
     

      {
                userEmail === email?
                <div className=" btn-disabled cursor-not-allowed mt-6 mb-4 text-center">
              
                <button 
                className="w-60 lg:w-96 text-lg bg-gray-400  text-white font-medium py-2 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110   " >Bid on the project</button>
                </div>
                :
                
                !isBidButtonDisabled ? (
                    <div className=" btn-disabled cursor-not-allowed mt-6 mb-4 text-center">
                      <button disabled 
                className="w-60 lg:w-96 text-lg bg-gray-400  text-white font-medium py-2 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110   ">Bid on the project</button>
                      <h3 className="text-xl font-semibold text-red-500 mt-6">Job’s deadline is crossed. </h3>
                    </div>
                  ) : (
                    <div className="mt-6 mb-4 text-center">
                      <button  type="submit"
                className="w-60 lg:w-96 text-lg bg-cyan-600  text-white font-medium py-2 px-8 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-110   " >Bid on the project</button>
                    </div>
                  )
                
               }
    </div>
  </form>
</div>  
        </div>
    );
};

export default JobDetailsSet;