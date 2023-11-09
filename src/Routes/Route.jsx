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
            loader: () => fetch('http://localhost:5000/jobs'),
            
        },
        {
           path:'/jobs/:id',
           element:<PrivateRoute><JobDetailsSet></JobDetailsSet></PrivateRoute>,
           loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),
           
           
        },
        {
            path:'/add-job',
            element:<PrivateRoute><AddJob></AddJob></PrivateRoute>,
        },
        {
            path:'/my-job',
            element:<PrivateRoute><MyJobSet></MyJobSet></PrivateRoute>,
            loader: () => fetch('http://localhost:5000/jobs'),
        },
        {
          path:'/update/:id',
          element:<UpdateData></UpdateData>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),

        },
        {
           path:'/my-bids',
           element:<PrivateRoute><MyBidsSet></MyBidsSet></PrivateRoute>,
           loader: () => fetch('http://localhost:5000/bids'),

        },
        {
           path:'/request',
           element:<PrivateRoute><BidRequestSet></BidRequestSet></PrivateRoute>,
           loader: () => fetch('http://localhost:5000/bids'),
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