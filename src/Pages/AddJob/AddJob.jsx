import { useContext, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import swal from "sweetalert";
import { useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";
// import moment from 'moment';
// import Swal from "sweetalert2";



const AddJob = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const email = user?.email;
  // console.log(email);

  const [selected, setSelected] = useState(""); // Track selected value

  const handleChange = (e) => {
    setSelected(e.target.value);
  };



  const handleJob = event => {
    event.preventDefault();
    // const formattedDeadline = moment(deadline).format('MMMM Do YYYY, h:mm:ss a');
    // console.log('Formatted Deadline:', formattedDeadline);
    const form = event.target;
    console.log(form);

    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const deadline = form.deadline.value;

    const category = form.category.value;
    const description = form.description.value;
    const minPrice = form.minPrice.value;
    const maxPrice = form.maxPrice.value;


    const newJob = { name, image, email, deadline, category, description, minPrice, maxPrice }

    // console.log(newJob);
    //send data to the server
    fetch('https://online-job-marketplaces-server.vercel.app/jobs', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newJob), credentials: 'include'
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          swal({
            title: 'okay!',
            text: 'Job Added Successfully ',
            icon: 'success',
          }).then(() => {
            navigate(location?.state ? location.state : `/my-jobs`)
          })
        }

      })

  }

  return (
    <div>
      <Helmet>
        <title>Work Wave|Add Job</title>
      </Helmet>




      <div className="flex justify-center items-center min-h-screen bg-gray-100    ">
        <form onSubmit={handleJob} id="productForm" className="bg-cyan-100  rounded-lg p-6 w-full max-w-2xl lg:max-w-4xl xl:max-w-6xl my-10 lg:my-14 shadow-slate-700  ">
          <h2 className="text-4xl font-bold text-sky-600 mb-6 text-center mt-8  ">Add Job</h2>

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
                placeholder="Enter photo URL"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none " required
              />
            </div>


            <div className="mb-4">
              <label htmlFor="brandName" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Job Title:</label>
              <input
                type="text" name="name"
                id="brandName"
                placeholder="Enter job name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500    focus:outline-none" required
              />
            </div>


            <div className="mb-4">
              <label htmlFor="brandURL" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Deadline:</label>
              <input
                type="text" placeholder="Job deadline" name="deadline"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" required
              />
            </div>


            <div className="mb-4">
              <label htmlFor="productType" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Minimum Price:</label>
              <input
                type="text" name="minPrice" placeholder="Min-Price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="price" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Maximum Price:</label>
              <input
                type="text" name="maxPrice" placeholder="Max-Price"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500   focus:outline-none" required
              />
            </div>


            <div className="mb-4">
              <label htmlFor="rating" className="block text-base font-semibold text-gray-600 mb-2 lg:text-xl ">Category:</label>
              <label>
                <select
                  name="category"
                  className={`select select-bordered join-item w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none text-base ${selected ? "text-slate-900" : "text-slate-400"
                    }`}
                  value={selected}
                  onChange={handleChange} required
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

                placeholder="Enter description"
                rows="6"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500  focus:outline-none" required
              ></textarea>
            </div>




          </div>

          {/* Add Button */}
          <div className="mt-6 mb-4 text-center">

            <button
              type="submit"
              className="w-60 lg:w-7/12 text-lg bg-cyan-500  text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110   "
            >
              Add Job
            </button>
          </div>
        </form>
      </div>




    </div>
  );
};

export default AddJob;