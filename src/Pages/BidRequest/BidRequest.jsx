

const BidRequest = ({bids}) => {
    const { name, userEmail,  deadline,price } = bids || {};
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
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
        <th>
          <button className="btn  btn-xs">Accept</button>
        </th>
        <th>
          <button className="btn  btn-xs">Reject</button>
        </th>
      </tr>
    );
};

export default BidRequest;