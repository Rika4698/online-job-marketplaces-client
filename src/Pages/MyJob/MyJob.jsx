// import { useContext } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../../Hook/AuthProvider";
// import Swal from "sweetalert2";


const MyJob = ({cards,handleDelete}) => {
    // const { user } = useContext(AuthContext);
    const {_id, name, image, deadline, category, description,minPrice,maxPrice } = cards || {};
    const paragraphs = description.split('\n');

    // console.log(description.split('\n'));
   
    return (
        <div>
            <div className="card my-4 lg:card-side lg:mx-10 lg:my-4 bg-base-100 shadow">
  <figure className=" w-auto lg:rounded-none  lg:w-[800px] lg:h-[250px]"><img src={image} alt=""/></figure>
  <div className="card-body bg-teal-50">
    <h2 className="card-title font-bold text-3xl">{name}</h2>    
    <h3 className="text-gray-400">Category: {category}</h3>    
    <h3 className="text-black">Deadline:  {deadline}</h3>    
    <h3 className="font-bold text-orange-400 text-lg mt-1">Minimum Price: {minPrice}TK</h3>    
    <h3 className="font-bold text-orange-400 text-lg mt-1">Maximum Price: {maxPrice}TK</h3>
    <h3 className="font-bold text-xl text-blue-400">Description:</h3>
    {paragraphs.map((paragraph, index) => (
        <p className="" key={index}>{paragraph}</p>
      ))}
    
    <div className="card-actions justify-between mt-4">
    <Link to={`/update/${_id}`}>
      <button className="btn capitalize text-lg font-bold text-white bg-pink-400">Update</button>
      </Link>
      <button onClick={()=>handleDelete(cards._id)} className="btn capitalize text-lg font-bold text-white bg-red-500">Delete</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MyJob;