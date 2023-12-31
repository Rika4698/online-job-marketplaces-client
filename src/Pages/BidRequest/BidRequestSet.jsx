import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { useLoaderData } from "react-router-dom";
import BidRequest from "./BidRequest";
import { Helmet } from "react-helmet-async";


const BidRequestSet = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
   
    const bid = useLoaderData();
    console.log(bid);
    const[bidCard,setBidCard] = useState([]);
    
    useEffect(() => {
        const findBid = bid.filter((item) => item.email == email);
        // console.log(findJob);
        
            setBidCard(findBid);
            
                
              
    },[email,bid]);
    
    // console.log(bidCard.length);
    const handleConfirm = id => {
        fetch(`https://online-job-marketplaces-server.vercel.app/bids/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'in progress'}),credentials:'include'
        })
        .then (res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                const remaining = bidCard.filter(bids => bids._id !== id);
                const updated = bidCard.find(bids => bids._id === id);
                updated.status = 'in progress'
                const newBid =[updated, ...remaining];
                setBidCard(newBid);
            }
        }

        )
    }

    const handleRejected = id => {
        fetch(`https://online-job-marketplaces-server.vercel.app/bids/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'rejected'}),credentials:'include'
        })
        .then (res => res.json())
        .then( data => {
            console.log(data);
            if(data.modifiedCount > 0)
            {
                const remaining = bidCard.filter(bids => bids._id !== id);
                console.log(remaining);
                const updated = bidCard.find(bids => bids._id === id);
                updated.status = 'rejected'
                const newBid =[updated, ...remaining];
                setBidCard(newBid);
            }
        }

        )
    }
    
    return (
        <div>
            <Helmet>
                <title>Work Wave|Bid Requests</title>
            </Helmet>
           {
            bidCard.length == 0 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">Not added any bid request...</h1>
            :
            <div className="bg-pink-50">
                        <h1 className="text-center font-bold text-4xl text-orange-400 pt-8 mb-2">Bids Request</h1>
                       <div className="overflow-x-auto">
  <table className="table table-xs  mt-6 ">
    {/* head */}
    <thead className="">
      <tr className="px-10">
       
        <th className="text-base font-bold text-violet-600 ">Job Title</th>
        <th className="text-base font-bold text-violet-600 ">Email</th>
        <th className="text-base font-bold text-violet-600 ">Deadline</th>
        <th className="text-base font-bold text-violet-600 ">Price</th>
        <th className="text-base font-bold text-violet-600 ">Status</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
    {
     bidCard.map(bids => <BidRequest key={bids._id} bids={bids} handleConfirm={handleConfirm} handleRejected={handleRejected}></BidRequest>)
    }
      
    
    </tbody>
    
    
  </table>
</div>
</div>
}
          
                    

                  
        </div>
    );
};

export default BidRequestSet;