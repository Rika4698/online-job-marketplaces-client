import { useLoaderData } from "react-router-dom";
import MyBids from "./MyBids";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";


const MyBidsSet = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
   
    const bid = useLoaderData();
    const[bidCard,setBidCard] = useState([]);
    
    useEffect(() => {
        const findBid = bid.filter((item) => item.userEmail == email);
        // console.log(findJob);
        
            setBidCard(findBid);
    },[email,bid]);
    // console.log(bidCard.length);
    const handleComplete = id => {
        fetch(`http://localhost:5000/bids/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'complete'})
        })
        .then (res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                const remaining = bidCard.filter(bids => bids._id !== id);
                const updated = bidCard.find(bids => bids._id === id);
                updated.status = 'complete'
                const newBid =[updated, ...remaining];
                setBidCard(newBid);
            }
        }

        )
    }
   
    
    return (
        <div>
           {
            bidCard.length == 0 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">Not added any bid request...</h1>
            :
                       <div className="overflow-x-auto">
  <table className="table table-xs  mt-6 ">
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
     bidCard.map(bids => <MyBids key={bids._id} bids={bids} handleComplete={handleComplete} ></MyBids>)
    }
      
    
    </tbody>
    
    
  </table>
</div>
}
          
                    

                  
        </div>
    );
};

export default MyBidsSet;