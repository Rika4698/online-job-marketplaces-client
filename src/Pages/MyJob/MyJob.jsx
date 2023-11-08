/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Hook/AuthProvider";
import Swal from "sweetalert2";


const MyJob = ({cards,remove,setRemove}) => {
    const { user } = useContext(AuthContext);
    const {_id, name, image, deadline, category, description,minPrice,maxPrice } = cards || {};
    const paragraphs = description.split('\n');

    // console.log(description.split('\n'));
    const handleDelete = (_id) => {
      console.log(_id);

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
          // const info = { email: user.email, id: id }
          // console.log(info);
          if (result.isConfirmed) {
              fetch(`http://localhost:5000/jobs/${_id}`, {
                  method: 'DELETE',
                  // headers: {
                  //     'content-type': 'application/json'
                  // },
                  // body: JSON.stringify(info)
              })
                  .then(res => res.json())
                  .then(data => {
          //             const filtered = jobCard.filter(cart => cart._id != id && user.email == cart.email);
          //             console.log(filtered);
          //             setJobCard(filtered);
                      console.log(data);
                      if ((data.deletedCount > 0)) {
                          Swal.fire({
                              // position: 'top-end',
                              icon: 'success',
                              title: 'Delete job succesfully.',
                              showConfirmButton: false,
                              timer: 1500
                          })
                          const filter = remove.filter(cart => cart._id != _id && user.email == cart.email);
                          setRemove=(filter);
          //                 // setTotalLength(totalLength - 1);
                      }
                    
                  }
                  )
                  
          }
      })
  };
   
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