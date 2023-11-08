import { Link } from "react-router-dom";


const BrowseCategory = ({job}) => {
    const{_id,name,image,deadline, minPrice,maxPrice, description} = job || {};
    const paragraphs = description.split('\n');
    // console.log(paragraphs[0]);
    return (
        <div>
           <div className="card h-[700px] bg-pink-50 ">
  {/* <figure className="mx-10 mt-10 mb-2 "> */}
    <img src={image} alt="" className="rounded-xl rounded-b-none w-[400px] h-[230px]  " />
  {/* </figure> */}
  <div className="card-body items-center text-center">
    <h2 className="card-title font-bold">{name}</h2>
    <div className=" flex-row  lg:flex gap-2">
    <h3 className="font-bold">Application deadline: </h3>
    <h3>{deadline}</h3>
    </div>
    <h3 className="text-orange-600 font-bold">Price range: {minPrice}TK-{maxPrice}TK</h3>
    <h3 className="font-bold text-xl text-blue-400">Description:</h3>
    
    <p className="" >{paragraphs[0]}</p>
     

    <div className="card-actions">
      <Link to={`/jobs/${_id}`}>
      <button className="btn capitalize bg-lime-500 text-lg text-white mt-4">Bid Now</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default BrowseCategory;