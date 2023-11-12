import { useLoaderData } from "react-router-dom";
import MyBids from "./MyBids";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Helmet } from "react-helmet-async";


const MyBidsSet = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
   
    const bid = useLoaderData();
    const[bidCard,setBidCard] = useState([]);
    
    useEffect(() => {
        const findBid = bid.filter((item) => item.userEmail == email);
       
        
            setBidCard(findBid);
            // console.log(findB._id);

                
             
    },[email,bid]);

    // const status = 'pending';

    // // Using map to add the new element to each object
    // const newbid = bidCard.map(obj => ({
    //   ...obj,  // Spread the existing object properties
    //   status: status, // Add the new element
    // }));
    // console.log(newbid);


    // console.log(bidCard.length);
    const handleComplete = id => {
        fetch(`https://online-job-marketplaces-server.vercel.app/bids/${id}`,{
            method:'PATCH',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: 'complete'}),credentials:'include'
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
    // const handleSortByStatus = () => {
    //     // Sort bids by status in ascending order
    //     const sortedBids = [...bidCard].sort((a, b) => {
    //         if (a.status < b.status) return -1;
    //         if (a.status > b.status) return -1;
    //         return 0;
    //       });
    //     console.log(sortedBids);
    //     setBidCard(sortedBids);
    //   };
//    console.log(bidCard);
    
    return (
        <div>
            <Helmet>
                <title>Work Wave|My Bids</title>
            </Helmet>
           {
            bidCard.length == 0 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">Not added any bid request...</h1>
            
            :
                       
                       <div>
                        <h1 className="text-center font-bold text-4xl text-pink-400 pt-8 mb-2">My Bids</h1>
                        {/* <button onClick={handleSortByStatus} className="btn">Sort by Status</button> */}

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
    {/* {
    newbid.map(bids => console.log(bids))
    } */}
      
    
    </tbody>
    
    
  </table>
</div>
</div>   
}
          
                

                  
        </div>
    );
};

export default MyBidsSet;