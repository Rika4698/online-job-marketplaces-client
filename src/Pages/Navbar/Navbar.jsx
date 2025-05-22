import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../Hook/AuthProvider";
import { LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then()
      .catch()
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div >
      <div className="navbar bg-base-100 py-6  lg:py-6 shadow shadow-slate-400 ">

        <div className="navbar-start ">
          <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40 lg:hidden transition-all duration-300 ${isOpen ? "block" : "hidden"
              }`}
            onClick={() => setIsOpen(false)}
          ></div>

          <div
            className={`fixed top-0 left-0 overflow-y-auto  w-2/3  sm:w-1/2 bg-white  h-full z-50 p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
              } lg:static lg:flex lg:items-center lg:w-auto lg:p-0 lg:translate-x-0 `}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden absolute top-4 right-4 p-2 rounded-full bg-white  z-[100]"
            >
              <LuX size={25} />
            </button>

            <ul className="space-y-4 lg:hidden">

              <li className="group max-lg:border-b max-lg:py-4 px-3 relative">
                <NavLink to="/" onClick={() => setIsOpen(false)}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                  }>Home</NavLink>
              </li>

              {
                !user ? "" : <>

                  <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/add-job" onClick={() => setIsOpen(false)}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                    }>Add Job</NavLink></li>

                  <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to={`/my-jobs`} onClick={() => setIsOpen(false)}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                    }>My Posted Jobs</NavLink></li>

                  <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/my-bids" onClick={() => setIsOpen(false)}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                    }>My Bids</NavLink></li>

                  <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/request" onClick={() => setIsOpen(false)}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                    }>Bid
                    Requests</NavLink></li>
                </>

              }
              <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/about" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                }>About Us</NavLink></li>

                 <li className="group max-lg:border-b max-lg:py-3 px-3 relative"><NavLink to="/contact" onClick={() => setIsOpen(false)}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-medium text-black text-lg"
                }>Contact Us</NavLink></li>


            </ul>
          </div>


          <div className="flex items-center  gap-x-3 max-[639px]:mx-2 sm:mx-6  md:mx-6 lg:hidden">

            <button onClick={() => setIsOpen(true)} className="ml-3 lg:hidden">
              <LuMenu size={25} />
            </button>
          </div>








          <div className="">
            <Link to="/">
              <img className="  w-28 h-[52px]  ml-5 md:w-28 lg:w-32 lg:ml-" src="https://i.ibb.co/9yRK3c0/work-wave-high-resolution-logo-transparent-2.png" alt="" />
            </Link>
          </div>
        </div>





        {/* <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className=" dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

              <li><NavLink to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-lg"
                }>Home</NavLink></li>

              {
                !user ? "" : <>
                  <li><NavLink to="/add-job"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-base"
                    }>Add Job</NavLink></li>

                  <li><NavLink to={`/my-jobs/${user?.email}`}
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-base"
                    }>My Posted Jobs</NavLink></li>

                  <li><NavLink to="/my-bids"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-base"
                    }>My Bids</NavLink></li>

                  <li><NavLink to="/request"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-base"
                    }>Bid
                    Requests</NavLink></li>

                </>
              }

              
            </ul>
          </div>
          <div>
            <Link to="/">
              <img className="  w-28 md:w-44 lg:w-44 lg:ml-8" src="https://i.ibb.co/9yRK3c0/work-wave-high-resolution-logo-transparent-2.png" alt="" />
            </Link>
          </div>
        </div> */}




        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-row space-x-6  xl:space-x-9  mx-8">
            <li><NavLink to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-500 font-bold text-sm xl:text-base  " : "font-medium text-slate-800 text-sm xl:text-base"
              }>Home</NavLink></li>
            {
              !user ? "" : <>
                <li><NavLink to="/add-job"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending " : isActive ? "text-emerald-500 font-bold text-sm xl:text-base  " : "font-medium text-slate-800 text-sm xl:text-base"
                  }>Add Job</NavLink></li>

                <li><NavLink to={`/my-jobs`}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-emerald-500 font-bold text-sm xl:text-base  " : "font-medium text-slate-800 text-sm xl:text-base"
                  }>My Posted Jobs</NavLink></li>

                <li><NavLink to="/my-bids"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-emerald-500 font-bold text-sm xl:text-base " : "font-medium text-slate-800 text-sm xl:text-base"
                  }>My Bids</NavLink></li>
                <li><NavLink to="/request"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-emerald-500 font-bold text-sm xl:text-base " : "font-medium text-slate-800 text-sm xl:text-base"
                  }>Bid
                  Requests</NavLink></li>
              </>
            }
            <li><NavLink to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-500 font-bold text-sm xl:text-base " : "font-medium text-slate-800 text-sm xl:text-base"
              }>About Us</NavLink></li>

               <li><NavLink to="/contact"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-emerald-500 font-bold text-sm xl:text-base " : "font-medium text-slate-800 text-sm xl:text-base"
              }>Contact Us</NavLink></li>



          </ul>
        </div>
        {
          user ?
            <div className="navbar-end min-[425px]:gap-4 max-[375px]:gap-2 ">

              <div className="flex items-center flex-col  md:flex-row md:gap-4">
                <img className="w-8 md:w-10 rounded-full " src={user.photoURL} alt="" />
                <h3 className=" w-12 mr-2  text-sm text-center font-semibold ">{user.displayName}</h3>
              </div>
              <button onClick={handleSignOut} className="rounded-lg text-white bg-gradient-to-r from-green-300 to-blue-400 w-[62px] h-12 font-bold m  lg:w-24 lg:h-10 md:w-24 md:h-10 "  >
                <span className=" text-base font-bold">Logout</span>
                <BiLogOut className=" hidden md:inline-flex md:text-xl lg:inline-flex lg:text-xl  "></BiLogOut>

              </button>
            </div>
            :
            <div className="navbar-end">
              <NavLink to='/login'>
                <button className="btn capitalize bg-gradient-to-r from-blue-300 to-fuchsia-400 text-white ">Register / login</button>
              </NavLink>
            </div>
        }
      </div>










    </div>
  );
};

export default Navbar;


