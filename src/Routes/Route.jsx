import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobSet from "../Pages/MyJob/MyJobSet";
import UpdateData from "../Pages/UpdateData/UpdateData";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorMessage></ErrorMessage>,
      children:[
        {
            path:'/',
            element:<Home></Home>,
        },
        {
            path:'/add-job',
            element:<AddJob></AddJob>,
        },
        {
            path:'/my-job',
            element:<MyJobSet></MyJobSet>,
            loader: () => fetch('http://localhost:5000/jobs'),
        },
        {
          path:'/update/:id',
          element:<UpdateData></UpdateData>,
          loader: ({params}) => fetch(`http://localhost:5000/jobs/${params.id}`),

        },
        {
           path:'/my-bids',
        },
        {
           path:'/request',
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