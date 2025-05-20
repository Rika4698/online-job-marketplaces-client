import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../../Hook/AuthProvider";
import { Helmet } from "react-helmet-async";


const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {signIn} = useContext(AuthContext);
  const {googleSignIn} = useContext(AuthContext);
 
  const handleGoogleAccount = () => {
      googleSignIn().then ((result) => {
          console.log(result.user);
          
          swal({
        
            text: "Google login successfully",
            icon: "success",
            // button:false,
            
          })
          
           navigate(location?.state?location.state :'/' )
      })
      
  };
  const[errormessage, setErrorMessage] =useState("");


  const handleLogin = e =>{
    e.preventDefault ();
    const form = new FormData(e.currentTarget);
   
    const email = form.get("email");
    console.log(form);
    const password = form.get("password");
    setErrorMessage("");

if((email,password))
{
signIn(email,password)
.then ((result) => {
    console.log(result.user);
    swal({
        
        text: "Login successfully",
        icon: "success",
        
      }).then(() => {
        navigate(location?.state?location.state :'/' ) })
})
.catch((err) => {
    console.log(err);
    setErrorMessage("Email and Password does not match!");
    
 
    swal({
        
        text: "Invalied Login",
        icon: "warning",
        
      })
      
});

}
e.target.reset()
}
    return (
        <div>
          <Helmet>
            <title>Work Wave|Login</title>
          </Helmet>
           <div className=" min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row py-16">
    <div className="hidden lg:flex lg:w-2/5 xl:w-2/5">
      
     <img src="https://i.ibb.co/whp4w3Q/Mobile-login-amico.png" alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required name="email" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required name="password" />
          <p className="text-red-500 text-base">{errormessage}</p>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-green-300 to-blue-400 text-emerald-950 text-lg">Login</button>
        </div>
        <h3 className="text-center font-semibold mt-4">Do not have an account? <Link to="/register" className="text-violet-700 font-extrabold">Registration</Link></h3>
        <button onClick={handleGoogleAccount}  className="  flex gap-4 bg-slate-200 rounded-full w-56 mx-10 my-4 outline hover:outline-4  outline-slate-100">
            <img className="rounded-full w-14 " src="https://i.ibb.co/41Gt5P3/178-1780776-googles-new-dataset-search-aims-to-assist-researchers.jpg" alt="" />
            <h3 className="mt-3 text-base text-blue-600 font-semibold">Sign in with Google </h3>
        </button>
      </form>
    </div>
  </div>
</div> 
        </div>
    );
};

export default Login;