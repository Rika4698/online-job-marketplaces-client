import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BrowseCategory = ({job}) => {
    const{_id,name,image,deadline, minPrice,maxPrice, description} = job || {};

    const [wordLimit, setWordLimit] = useState(15); // Default word limit

  // Function to update word limit based on screen size
  const updateWordLimit = () => {
    if (window.innerWidth < 640) {
      setWordLimit(10); // Mobile
    } else if (window.innerWidth < 1024) {
      setWordLimit(12); // Tablet
    } else if (window.innerWidth < 1440) {
      setWordLimit(10); // Tablet
    }  else {
      setWordLimit(15); // Desktop
    }
  };

  // Update word limit when the component mounts and on window resize
  useEffect(() => {
    updateWordLimit();
    window.addEventListener("resize", updateWordLimit);

    return () => window.removeEventListener("resize", updateWordLimit);
  }, []);
    const paragraphs = description.split('\n')[0].split(" ").slice(0, wordLimit).join(" ") + "...";
    // console.log(paragraphs[0].split(" ").slice(0, 15).join(" ") + "...");
    
    return (
        <div>




<div className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg ">
    <div className="">
        <img className="w-full h-72" src={image} alt="Product Image"/>
        
    </div>
    <div className="p-4  items-center text-center bg-gray-100">
        <h2 className="text-lg xl:text-xl  font-bold mb-2">{name}</h2>
        <h3 className="font-bold text-red-500 text-base">Application Deadline:  <span className="ml-1 font-medium text-base text-slate-800">   {deadline}</span> </h3>
        <h3 className="mt-1 text-green-600 font-medium">Salary range: {minPrice}TK - {maxPrice}TK</h3>
        
    
    <p className="mt-1 xl:text-lg  min-h-[106px] xl:min-h-[100px] font-semibold text-sky-600" >Description: <span className="ml-1 text-gray-600 text-sm mb-4 font-medium flex">{paragraphs}</span></p>
        
        <div className="flex items-center justify-end">
        <Link to={`/jobs/${_id}`}>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Bid Now
      </button>
      </Link>
        </div>
    </div>
</div>
        </div>
    );
};

export default BrowseCategory;