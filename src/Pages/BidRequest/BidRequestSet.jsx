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
            <div className="">
                        <h1 className="text-center font-bold  text-4xl text-emerald-500 pt-8 mb-2">Bids Request</h1>
                        <div className="overflow-x-auto my-9">
                        <table className="min-w-full divide-y divide-gray-200   ">
    <thead className="bg-gray-50">
        <tr>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
            Job Title
            </th>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
            Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
            Deadline
            </th>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
            Salary
            </th>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
            Status
            </th>
            <th scope="col" className="px-6 py-3 text-left text-base font-medium text-gray-600 uppercase tracking-wider">
                
            </th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
    
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