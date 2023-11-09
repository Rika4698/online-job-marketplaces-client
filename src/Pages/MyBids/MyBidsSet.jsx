import { useLoaderData } from "react-router-dom";
import MyBids from "./MyBids";


const MyBidsSet = () => {
    const bid = useLoaderData();
    
    return (
        <div>
                       
                       <div className="overflow-x-auto">
  <table className="table ml-6 mt-6 ">
    {/* head */}
    <thead className="">
      <tr className="px-10">
       
        <th className="text-base font-bold text-violet-600 ">Job Title</th>
        <th className="text-base font-bold text-violet-600 ">Email</th>
        <th className="text-base font-bold text-violet-600 ">Deadline</th>
        <th className="text-base font-bold text-violet-600 ">Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
    {
     bid.map(bids => <MyBids key={bids._id} bids={bids}></MyBids>)
    }
      
    
    </tbody>
    
    
  </table>
</div>
          
                    

                  
        </div>
    );
};

export default MyBidsSet;