import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../Hook/AuthProvider";


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
        .then()
        .catch()
};
    return (
        <div>
          <div className="navbar bg-base-100  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
   <div>
   <Link to="/">
   <img className="  w-28 md:w-44 lg:w-44 lg:ml-8" src="https://i.ibb.co/9yRK3c0/work-wave-high-resolution-logo-transparent-2.png" alt="" />
   </Link>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-8 ">
    <li><NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-lg"
           }>Home</NavLink></li>
    <li><NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-base"
           }>Add Job</NavLink></li>
    <li><NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-base"
           }>My Posted Jobs</NavLink></li>
    <li><NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-emerald-950 text-base"
           }>My Bids</NavLink></li>
    <li><NavLink to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-emerald-400 font-bold text-lg " : "font-semibold text-black text-lg"
           }>Bid
           Requests</NavLink></li>
      {/* <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li> */}
    </ul>
  </div>
 {
   user ?
   <div className="navbar-end  ">

<img className="  w-10 lg:w-14 lg:ml-2 md:w-14 rounded-full" src={user.photoURL} alt="" />
<h3 className=" w-12 mr-4   text-sm text-center font-semibold lg:mx-2 xl:mx-8 md:mx-6 dark:text-white">{user.displayName}</h3>
<button onClick={handleSignOut} className="rounded-lg text-white bg-gradient-to-r from-green-300 to-blue-400 w-18 h-8   lg:w-28 lg:h-10 md:w-24 md:h-10 "  >
<span className="mr-2 text-base font-bold">Logout</span>
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