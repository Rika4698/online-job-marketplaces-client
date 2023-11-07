import { useContext } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const UpdateData = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    return (
        <div>
            <div className="bg-[rgb(251,243,204)] p-24">
            <h2 className="text-5xl font-extrabold text-center text-purple-300  mb-10">Update Job</h2>
            <form  > 
                
                
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
                        <input type="text" placeholder="Deadline" className="input input-bordered w-full"  name="deadline" />
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
               

               
            
                
                <div className="text-center  text-xl rounded-lg bg-violet-500 w-40 h-8 text-white lg:ml-60 lg:w-96 xl:ml-96">
               
                <button  >Update</button>
                
                
                </div>

            </form>
        </div>  
        </div>
    );
};

export default UpdateData;