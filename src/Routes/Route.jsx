import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobSet from "../Pages/MyJob/MyJobSet";
import UpdateData from "../Pages/UpdateData/UpdateData";
import JobDetailsSet from "../Pages/JobDetails/JobDetailsSet";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";

import MyBidsSet from "../Pages/MyBids/MyBidsSet";
import BidRequestSet from "../Pages/BidRequest/BidRequestSet";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorMessage></ErrorMessage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
            loader: () => fetch('https://online-job-marketplaces-server.vercel.app/jobs'),
            
        },
        {
           path:'/jobs/:id',
           element:<PrivateRoute><JobDetailsSet></JobDetailsSet></PrivateRoute>,
           loader: ({params}) => fetch(`https://online-job-marketplaces-server.vercel.app/jobs/${params.id}`,{credentials:'include'}),
           
           
        },
        {
            path:'/add-job',
            element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
            path:'/my-jobs/:email',
            element:<PrivateRoute><MyJobSet></MyJobSet></PrivateRoute>,
            // loader: ({params}) => fetch(`https://online-job-marketplaces-server.vercel.app/my-jobs/${params.email}`,{credentials:'include'}),
        },
        {
          path:'/update/:id',
          element:<UpdateData></UpdateData>,
          loader: ({params}) => fetch(`https://online-job-marketplaces-server.vercel.app/jobs/${params.id}`,{credentials:'include'}),

        },
        {
           path:'/my-bids',
           element:<PrivateRoute><MyBidsSet></MyBidsSet></PrivateRoute>,
           loader: () => fetch('https://online-job-marketplaces-server.vercel.app/my-bids',{credentials:'include'}),

        },
        {
           path:'/request',
           element:<PrivateRoute><BidRequestSet></BidRequestSet></PrivateRoute>,
           loader: () => fetch('https://online-job-marketplaces-server.vercel.app/bids',{credentials:'include'}),
        },
        {
          path:'/login',
          element:<Login></Login>,
        },
        {
          path:'/register',
          element:<Registration></Registration>,
        }
      ]
    },
  ]);
export default router;