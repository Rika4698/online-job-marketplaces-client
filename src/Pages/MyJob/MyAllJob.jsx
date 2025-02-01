// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";


const MyAllJob = ({cards }) => {

    const {_id, name, image, deadline, category, minPrice,maxPrice } = cards || {};
//     const navigate = useNavigate(); // Use navigate to move between pages

//   const handleReadMore = () => {
//     navigate(`/jobs/${_id}`, {
//       state: { job: cards, jobCard, setJobCard }, // Pass job details & state
//     });
//   };
    const categoryColors = {
        "Web Development": "#60A5FA", 
        "Digital Marketing": "#34D399", 
        "Graphics Design": "#FBBF24", 
        
      };
      const todayDate = new Date();
todayDate.setHours(0, 0, 0, 0); // Set time to 00:00:00
const jobDate = new Date(deadline);
jobDate.setHours(0, 0, 0, 0); // Set time to 00:00:00

const isBidButtonDisabled = jobDate.getTime() >= todayDate.getTime();
    return (
        <div>
            {/* <ul class="grid grid-cols-1 xl:grid-cols-3 gap-y-10 gap-x-6 items-start p-8 "> */}
    <li className="relative flex flex-col sm:flex-row xl:flex-col items-start bg-slate-100 rounded-lg">
        <div className="order-1 sm:ml-6 mx-5 xl:mx-6">
        <div className="flex flex-col  items-start  my-3 ">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{name}</h2>
        <span 
          className="text-center px-3 py-1 w-40 rounded-full text-white text-sm font-medium mt-2 "
          style={{ backgroundColor: categoryColors[category] || "#607D8B" }} // Category Wise Color
        >
          {category}
        </span>
      </div>
            <div className="prose prose-slate prose-sm text-slate-600">
            <p className="text-blue-700 font-medium text-lg ">
        💰 Salary range: <span className="font-semibold">{minPrice} - {maxPrice} TK</span>
      </p>
      <p className={`${isBidButtonDisabled? " text-green-700 ":"text-red-700 animate-bounce"} mt-1 font-medium text-lg `}>📅 Deadline: <span className="font-semibold">{deadline}</span></p>
            </div>
            <Link
  to={`/my-jobs/${_id}`} 
  
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-blue-200 text-blue-600 hover:bg-blue-300 hover:text-blue-800 focus:ring-sky-500 mt-6 border xl:ml-64 mb-4"
                
                >Read
                more
                <svg className="overflow-visible ml-3 text-blue-300 group-hover:text-blue-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" strokeWidth="2"
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></Link>
        </div>
        <img src={image} alt="" className="mb-6  rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:h-56 sm:mb-0 xl:mb-6 xl:w-full xl:h-60" width="1216" height="640"/>
    </li>
    
   
{/* </ul> */}
        </div>
    );
};

export default MyAllJob;