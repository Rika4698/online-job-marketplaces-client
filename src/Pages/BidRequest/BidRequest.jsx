import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";


const BidRequest = ({bids,handleConfirm,handleRejected}) => {
    const { _id,name, userEmail,  deadline,price,status } = bids || {};
    return (
        
           <tr>
       
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
        <button className={`btn capitalize btn-xs ${status === 'confirm' ? 'bg-green-400' : status === 'cancel' ? 'bg-red-400' : ''}`}>
  {status === 'confirm' ? 'In Progress'  : status === 'cancel' ? 'Canceled' : 'Pending'}
</button>
        </th>
        {
  status === 'confirm' || status === 'cancel' ? (
    <ProgressBar
      percent={100}
      filledBackground={status === 'confirm' ? 'linear-gradient(to right, #fefb72, green)' : 'linear-gradient(to right, #fefb72, red)'}
    />
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
      </tr>
    );
};

export default BidRequest;