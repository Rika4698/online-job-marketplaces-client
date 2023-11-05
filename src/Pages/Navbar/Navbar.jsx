import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
   <img className="w-44 ml-8" src="https://i.ibb.co/9yRK3c0/work-wave-high-resolution-logo-transparent-2.png" alt="" />
   </Link>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-12 ">
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
  <div className="navbar-end">
    <Link to='/login'>
    <button className="btn">Login</button>
    </Link>
  </div>
</div>  
        </div>
    );
};

export default Navbar;