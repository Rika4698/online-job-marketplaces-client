import { useLoaderData } from "react-router-dom";
import MyBids from "./MyBids";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Hook/AuthProvider";
import { Helmet } from "react-helmet-async";
import swal from "sweetalert";

const MyBidsSet = () => {
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [loading, setLoading] = useState(true);
    const bid = useLoaderData();
    // console.log(bid);
    const[bidCard,setBidCard] = useState([]);
    
    useEffect(() => {
        const findBid = bid && bid?.filter((item) => item.userEmail == email);
       
        
            setBidCard(findBid);
            if (bidCard) {
                setLoading(false); // Data has been fetched
                }

                
             
    },[email,bid,bidCard]);
    // console.log(bidCard);
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
                swal({
                    title: 'okay!',
                    text: ' Bid request complete successfully. ',
                    icon:'success',
                })
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
   console.log(bidCard);
if (loading) {
    return (
        <div className="flex justify-center items-center h-screen bg-white ">
        <span className="loading loading-spinner loading-lg text-gray-800 "></span>
    </div>
    );
  }
    return (
        <div>
            <Helmet>
                <title>Work Wave|My Bids</title>
            </Helmet>
           {
            bidCard.length == 0 ?
            <h1 className="text-center font-bold text-4xl text-rose-500 pt-8 mb-20">Not added any bids...</h1>
            
            :
                       
                       <div>
                        <h1 className="text-center font-bold text-4xl text-emerald-500 pt-8 mb-2">My Bids</h1>
                        {/* <button onClick={handleSortByStatus} className="btn">Sort by Status</button> max-h-[calc(100vh-100px)]*/}

                       <div className="overflow-x-auto  my-8  ">
                       <table className="min-w-full divide-y divide-gray-200">
    <thead className=" border-t-2 bg-emerald-100">
        <tr>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Job Title</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Email</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Deadline</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Salary</th>
            <th className="px-6 py-3 text-center text-sm font-semibold text-gray-600 uppercase tracking-wider">Status</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
    {
    bidCard && bidCard?.map(bids => <MyBids key={bids._id} bids={bids} handleComplete={handleComplete} ></MyBids>)
    }
    </tbody>
</table> 
</div>
</div>   
}
   
                

                  
        </div>
    );
};

export default MyBidsSet;