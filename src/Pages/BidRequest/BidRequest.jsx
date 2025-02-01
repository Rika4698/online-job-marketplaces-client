import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


const BidRequest = ({bids,handleConfirm,handleRejected}) => {
    const { _id,name, userEmail,  deadline,price,status } = bids || {};

    const progressPercent =
    status === "in progress" ? 70 : status === "rejected" ? 100 : status === "complete" ? 100 : 0;

  // Define progress color
  const progressColor =
    status === "in progress"
      ? "linear-gradient(to right, #39c447, #04700f)"
      : status === "rejected"
      ? "linear-gradient(to right, #ed2c13, #ed2c13)"
      : status === "complete"
      ? "linear-gradient(to right, #39c447, #04700f)"
      : "";


    return (
        <>
           {/* <tr>
       
        <td>
          <div className="flex items-center space-x-3">
          
            <div>
              <div className="font-bold text-base">{name}</div>
              
            </div>
          </div>
        </td>
        <td className="text-base font-semibold text-slate-600">
          {userEmail}
         
        </td>
        <td className="text-base font-medium text-slate-500">{deadline}</td>
        <td className="text-base font-medium text-slate-500">{price}</td>
        <th>
        <button className={` capitalize btn-xs ${status === 'in progress' ? 'bg-green-400' : status === 'rejected' ? 'bg-red-400' :status === 'complete' ?"bg-green-800 text-white": 'bg-slate-300'}`}>
  {status }
</button>
        </th>
        {
  status === 'in progress' || status === 'rejected'||status === 'complete' ? (
    <div className="mt-2">
    <ProgressBar 
      percent={status === 'in progress' ? 70 :status === 'rejected' ? 100 :status === 'complete' ? 100 :''}
      filledBackground={status === 'in progress' ? 'linear-gradient(to right, #fefb72, green)' :status === 'rejected' ? 'linear-gradient(to right, #fefb72, red )':status === 'complete' ?'linear-gradient(to right, #fefb72, green)':''}
      status="active"
    />
    </div>
  ) : (
    <th className="">
      <button onClick={() => handleConfirm(_id)} className="btn btn-xs bg-green-400 ">
        Accept
      </button>
      <button onClick={() => handleRejected(_id)} className="btn btn-xs bg-red-400 ml-6">
        Reject
      </button>
    </th>
  )
}
      </tr> */}


      <tr className="font-medium ">
      <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-base text-gray-900">{name}</div>
                
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-base text-gray-800">{userEmail}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-base font-medium text-gray-900">
                            {deadline}
                        </div>
                
            </td>
            
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-sm leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {price}
                </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap ">
            <button className={`px-4 py-2 font-medium text-white  rounded-md  first-letter:uppercase    ${status === 'in progress' ? 'bg-lime-500 capitalize ' : status === 'rejected' ? 'bg-red-500' : status === 'complete' ?"bg-green-800 ":'bg-slate-400'}`}>{status}</button>
            </td>
           
            <td className="px-6 py-4 whitespace-nowrap ">


            {
  status === 'in progress' || status === 'rejected'||status === 'complete' ? (
    <div className="mt-2 ">
    <ProgressBar percent={progressPercent} filledBackground={progressColor} />
          <div className={ `flex justify-center items-center text-xs font-bold   ${status === 'in progress' ? 'text-lime-500  ' : status === 'rejected' ? 'text-red-500' : status === 'complete' ?"text-green-800 ":'text-slate-800'}  `}>
            {progressPercent}%
          </div>
    </div>
  ) : (
    <th className="">
      <button onClick={() => handleConfirm(_id)} className=" bg-green-600 px-4 py-2 font-medium text-white  rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-green active:bg-green-600 transition duration-150 ease-in-out    ">
        Accept
      </button>
      <button onClick={() => handleRejected(_id)} className="  ml-5 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
        Reject
      </button>
    </th>
  )
}

                {/* <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete</button> */}
            </td>
        </tr>




      </>
    );
};

export default BidRequest;