import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import swal from "sweetalert";


const AddJob = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    // console.log(email);
    const handleJob = event => {
        event.preventDefault();
        const form = event.target;
        console.log(form);
        
        const name = form.name.value;
        const image = form.image.value;
        const email  = form.email.value;
        const deadline = form.deadline.value;

        const category = form.category.value;
        const description = form.description.value;
        const minPrice = form.minPrice.value;
        const maxPrice = form.maxPrice.value;
      
        
        const newJob = { name, image, email,deadline, category, description,minPrice,maxPrice }

        console.log(newJob);
        //send data to the server
        fetch('http://localhost:5000/jobs',{
            method:'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newJob)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
            {
            swal({
                title: 'okay!',
                text: 'Job Added Successfully ',
                icon:'success',
            })
            }

        })

    }
    return (
        <div>
            <div className="bg-[rgb(212,251,233)] p-24">
            <h2 className="text-5xl font-extrabold text-center text-pink-400  mb-10">Add Job</h2>
            <form onSubmit={handleJob} > 
                
                
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Email of the employer:</span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="email" placeholder="Email" value={email} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Job Image:</span>
                        </label>
                        <label className="input-group">
                        <input type="url" placeholder="Photo URL" className="input input-bordered w-full"  name="image" />
                        </label>
                    </div>
                </div>
              
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Job Title:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Job Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                            <span className="label-text font-semibold text-base">Deadline:</span>
                        </label>
                        <label className="input-group">
                        <input type="date" placeholder="Deadline" className="input input-bordered w-full"  name="deadline" />
                        </label>
                    </div>
                </div>
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Minimum Price:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="minPrice" placeholder="Min-Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Maximum Price:</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="maxPrice" placeholder="Max-Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
            
                <div className="md:flex mb-8">
                   
                    <div className="form-control md:w-1/2 ">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Category:</span>
                        </label>
                        <label className="input-group">
                        {/* <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" /> */}
                        <select name="category" className="select select-bordered join-item w-full "  >
      <option className="text-slate-400"  disabled selected>Select</option>
      <option >Web Development</option>
      <option>Digital Marketing</option>
      <option>Graphics Design</option>
    </select>
                            
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text font-semibold text-base">Description:</span>
                        </label>
                        <label className="input-group">
                        <textarea type="text" name="description"  placeholder="Description" className="textarea textarea-bordered textarea-lg w-full max-w-full" ></textarea>
                            {/* <input type="text" name="description" placeholder="Description" className="input input-bordered w-full h-[80px]" /> */}
                        </label>
                    </div>
                </div>
               

               
            
                
                <div className="text-center  text-xl rounded-lg bg-lime-500 w-40 h-8 text-white lg:ml-60 lg:w-96 xl:ml-96">
                <button >Add Button</button>
                </div>

            </form>
        </div>  
        </div>
    );
};

export default AddJob;