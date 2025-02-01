/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";


const MyJob = () => {
    // const { user } = useContext(AuthContext);
    // console.log(jobCard);
    // const location = useLocation();
    const navigate = useNavigate();
    const job =useLoaderData();
    // const {  jobCard, setJobCard } = location.state || {};
    const {_id, name, image, deadline, category, description,minPrice,maxPrice } = job || {};
    // const paragraphs = description.split('\n');
    const todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0); // Set time to 00:00:00
    const jobDate = new Date(deadline);
    jobDate.setHours(0, 0, 0, 0); // Set time to 00:00:00
    
    const isBidButtonDisabled = jobDate.getTime() >= todayDate.getTime();
//    console.log(isBidButtonDisabled);
const categoryColors = {
    "Web Development": "#60A5FA", 
    "Digital Marketing": "#34D399", 
    "Graphics Design": "#FBBF24", 
    
  };
    // console.log(job);
    const handleDelete = (_id) => {
    //   console.log(_id);

      Swal.fire({
          title: 'Are you sure?',
          text: `You want to delete ${name}?`,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
          console.log(result);
          
          if (result.isConfirmed) {
              fetch(`https://online-job-marketplaces-server.vercel.app/jobs/${_id}`, {
                  method: 'DELETE',credentials:'include'
                 
              })
                  .then(res => res.json())
                  .then(data => {
                    
          
                      console.log(data);
                      if ((data.deletedCount > 0)) {
                        navigate(-1);
                          Swal.fire({
                            
                              title: "Deleted!",
                              text: "Your file has been deleted.",
                              icon: "success"
                            
                          })
                        //   .then(() => {
                        //     navigate(-1); 
                        //   });
                          
                        //   const remaining = jobCard.filter(job => job._id !== _id );
                        //   setJobCard  (remaining);
                        //   console.log(jobCard);
                         
                      }
                    
                  }
                  )
                  
          }
      })
  };
  
    return (
        <div>
            <div className="my-8 text-center">
                <h2 className="text-xl md:text-3xl font-bold text-blue-500">{name} Details:</h2>
            </div>


<div 
      className="bg-white shadow-md  md:rounded-lg p-6 max-w-xl mx-auto lg:max-w-2xl xl:max-w-4xl my-8 "
      
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
      <div className="flex items-center justify-between mt-4 p-4 border-t-2  border-gray-200">
      <Link to={`/update/${_id}`}>
      <button className="bg-amber-500 hover:bg-amber-700 text-white font-bold py-2 px-4 border-b-4 border-amber-700 rounded transform transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-110">
      Update
            </button> </Link>


            <button onClick={()=>handleDelete(_id)} className="px-4 py-2 border-b-4 border border-red-500 text-red-500 hover:text-white hover:bg-red-500 transition-all duration-200">
            Delete
            </button>
        </div>
    </div>



        </div>
    );
};

export default MyJob;