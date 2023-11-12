

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
        <button className={` capitalize btn-xs  ${status === 'in progress' ? 'bg-green-400' : status === 'rejected' ? 'bg-red-400' : status === 'complete' ?"bg-green-800 text-white":'bg-slate-300'}`}>
  {status }
</button>
        </th>
        <th>
        {status === 'in progress' ? (
                  <button onClick={() => handleComplete(_id)} className="btn capitalize btn-xs bg-green-500 ">Complete</button>
                ) : ''}
        </th>
      </tr>
        
    );
};

export default MyBids;