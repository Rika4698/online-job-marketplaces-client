import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";
import AddJob from "../Pages/AddJob/AddJob";


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