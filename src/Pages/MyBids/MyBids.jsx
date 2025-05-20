

const MyBids = ({ bids,handleComplete }) => {
    // console.log(bids);
    const {_id, name, userEmail, price, deadline,status } = bids || {};
    return (
        <>
         

      <tr className="font-medium text-center">
            <td className="px-6 py-4 whitespace-nowrap ">{name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{userEmail}</td>
            <td className="px-6 py-4 whitespace-nowrap">{deadline}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">{price}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap  ">
                <button className={`px-4 py-2 font-medium text-white  rounded-md  first-letter:uppercase    ${status === 'in progress' ? 'bg-lime-500 capitalize' : status === 'rejected' ? 'bg-red-500' : status === 'complete' ?"bg-green-800 ":'bg-slate-400'}`}>{status}</button>

                {status === 'in progress' ? (
                <button onClick={() => handleComplete(_id)} className="ml-4 px-4 py-2 font-medium text-white  rounded-md bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-600 transition duration-150 ease-in-out animate-bounce" title="Press complete for complete bid request">Complete ?</button>) : ''}
            </td>
        </tr>



      </>
        
    );
};

export default MyBids;