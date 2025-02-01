// import { useContext } from "react";
// import { AuthContext } from "../../Hook/AuthProvider";


import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import swal from "sweetalert";


const UpdateData = () => {
    // const { user } = useContext(AuthContext);
    // const email = user?.email;
    const job = useLoaderData();
    const navigate = useNavigate();
const{_id, name, image, email,deadline, category, description,minPrice,maxPrice } = job;
const [selected, setSelected] = useState("category"); // Track selected value

    const handleChange = (e) => {
        setSelected(e.target.value);
      };
    const handleUpdate = event => {
        event.preventDefault();
        // const formattedDeadline = moment(deadline).format('MMMM Do YYYY, h:mm:ss a');
        // console.log('Formatted Deadline:', formattedDeadline);
        const form = event.target;
        // console.log(form);
        
        const name = form.name.value;
        const image = form.image.value;
        const email  = form.email.value;
        const deadline = form.deadline.value;

        const category = form.category.value;
        const description = form.description.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
      
        
        const updateJob = { name, image, email,deadline, category, description,minPrice,maxPrice }

        // console.log(updateJob);
        //send data to the server
        fetch(`https://online-job-marketplaces-server.vercel.app/jobs/${_id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateJob),credentials:'include'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
            swal({
                title: 'Success!',
            text: 'Job Update Successfully ',
            icon:'success',
            }).then(() => {
                navigate(-1); 
              });
            }
            

        })

    }
    return (
        <div>
            <Helmet>
                <title>Work Wave|update/{_id}</title>
            </Helmet>
            



        <div className="flex justify-center items-center min-h-screen bg-gray-100    ">
  <form onSubmit={handleUpdate}  id="productForm" className="bg-amber-100  rounded-lg p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl my-10 lg:my-14 shadow-md shadow-slate-500  ">
    <h2 className="text-4xl font-bold text-amber-700 mb-6 text-center mt-8  ">Update Job: {name}</h2>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 mx-4 ">
     
      <div className="mb-4">
        <label htmlFor="productName" className="block text-base  font-semibold text-gray-600 mb-2 lg:text-xl ">Email of the employer:</label>
        <input
          type="email" name="email" placeholder="Email" value={email} readOnly
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none"
        />
      </div>

      
      <div className="mb-4">
        <label htmlFor="photoURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Job Image:</label>
        <input
          type="url"
          name="image"
          id="photoURL"
          placeholder="Enter photo URL" defaultValue = {image}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none "
        />
      </div>

    
      <div className="mb-4">
        <label htmlFor="brandName" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Job Title:</label>
        <input
          type="text" name="name"
          id="brandName"
          placeholder="Enter job name" defaultValue = {name}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500    focus:outline-none"
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="brandURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Deadline:</label>
        <input
          type="text" placeholder="Job deadline"   name="deadline" defaultValue = {deadline} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none"
        />
      </div>

     
      <div className="mb-4">
        <label htmlFor="productType" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Minimum Price:</label>
        <input
         type="text" name="minPrice" placeholder="Min-Price" defaultValue = {minPrice}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none"
        />
      </div>
       
       <div className="mb-4">
        <label htmlFor="price" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Maximum Price:</label>
        <input
          type="text" name="maxPrice" placeholder="Max-Price" defaultValue = {maxPrice}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500   focus:outline-none"
        />
      </div>

     
       <div className="mb-4">
        <label htmlFor="rating" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Category:</label>
        <label>
      <select
        name="category"
        className={`select select-bordered join-item w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none text-base ${
          selected ? "text-slate-900" : "text-slate-400"
        }`}
         defaultValue = {category}
        onChange={handleChange}
      >
        <option value="" disabled className="text-slate-400">
          Select
        </option>
        <option value="Web Development" className="text-slate-900">
          Web Development
        </option>
        <option value="Digital Marketing" className="text-slate-900" >Digital Marketing</option>
        <option value="Graphics Design" className="text-slate-900">Graphics Design</option>
      </select>
    </label>
        
      </div>

      
      <div className="mb-4 lg:col-span-2">
        <label htmlFor="shortDescription" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl  ">Description:</label>
        <textarea
        type="text" name="description" 
          id="shortDescription"
          defaultValue = {description}
          placeholder="Enter description"
          rows="6"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none"
        ></textarea>
      </div>

     

     
    </div>

  
    <div className="mt-6 mb-4 text-center">
    
      <button
        type="submit"
        className="w-60 lg:w-7/12 text-lg bg-amber-700  text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110   "
      >
        Update Job
      </button> 
    </div>
  </form>
</div>
 
        </div>
    );
};

export default UpdateData;