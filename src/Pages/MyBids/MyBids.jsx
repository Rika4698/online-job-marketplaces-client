

const MyBids = ({ bids,handleComplete }) => {
    // console.log(bids);
    const {_id, name, userEmail,  deadline,status } = bids || {};
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
        <th>
        <button className={`btn capitalize btn-xs  ${status === 'confirm' ? 'bg-green-400' : status === 'cancel' ? 'bg-red-400' : status === 'complete' ?"bg-green-800 text-white":''}`}>
  {status === 'confirm' ? 'In Progress'  : status === 'cancel' ? 'Canceled' :status === 'complete' ?  'Complete': 'Pending'}
</button>
        </th>
        <th>
        {status === 'confirm' ? (
                  <button onClick={() => handleComplete(_id)} className="btn capitalize btn-xs bg-green-500 ">Complete</button>
                ) : ''}
        </th>
      </tr>
        
    );
};

export default MyBids;