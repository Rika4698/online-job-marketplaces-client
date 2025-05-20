

const UpcomingJob = () => {
    return (
        <div className="bg-slate-200 py-8">
            <h1 className=" text-center text-4xl font-bold text-blue-600 mx-2">Upcoming <span className="text-emerald-600">Job Category</span></h1>
            {/* <div className="grid grid-cols-1  pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3   gap-8">
            <div className="card h-[300px] bg-base-100 shadow-xl chat-image">
  <figure className=""><img src="https://i.ibb.co/T8ccLLC/HD-wallpaper-technology-programming-c-programming.jpg" alt="" /></figure>
  <div className="flex items-center justify-center">
    <h2 className="card-title mt-4 text-2xl font-bold text-cyan-700">Programming & Tech</h2>
    
   
  </div>
</div>
<div className="card h-[300px] bg-base-100 shadow-xl  chat-image">
  <figure><img src="https://i.ibb.co/SdvqdKZ/wepik-export-20231109083329-Y5n-F.png" alt="Shoes" /></figure>
  <div className="flex items-center justify-center">
    <h2 className="card-title mt-4 text-2xl font-bold text-cyan-700">Video and Animation</h2>
   
    
  </div>
</div>
<div className="card h-[300px] bg-base-100 shadow-xl  chat-image">
  <figure className=""><img src="https://i.ibb.co/GskfxtS/wepik-export-202311090837141s-FD.png" alt="" /></figure>
  <div className=" flex items-center justify-center ">
    <h2 className="card-title mt-4 text-2xl font-bold text-cyan-700">AI Services</h2>
   
   
  </div>
</div>
</div> */}




<section id=""
    className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-10 xl:gap-x-20 mt-10 mb-5 ">

   
    <div className="w-72 xl:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
       
            <img src="https://i.ibb.co/T8ccLLC/HD-wallpaper-technology-programming-c-programming.jpg"
                    alt="Product" className="h-60 w-72 xl:w-80 object-cover rounded-t-xl" />
            <div className=" py-3  text-center">
               
                <p className="text-lg font-bold text-cyan-700 truncate block capitalize">Programming & Tech</p>
                
            </div>
       
    </div>
   
    
    <div className="w-72 xl:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
       
            <img src="https://i.ibb.co/SdvqdKZ/wepik-export-20231109083329-Y5n-F.png"
                    alt="Product" className="h-60 w-72 xl:w-80 object-cover rounded-t-xl" />
            <div className=" py-3  text-center">
                
                <p className="text-lg font-bold text-cyan-700 truncate block capitalize">Video and Animation</p>
                
            </div>
   
    </div>
   

    
    <div className="w-72 xl:w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      
            <img src="https://i.ibb.co/GskfxtS/wepik-export-202311090837141s-FD.png"
                    alt="Product" className="h-60 w-72 xl:w-80 object-cover rounded-t-xl" />
            <div className=" py-3  text-center">
                
                <p className="text-lg font-bold text-cyan-700 truncate block capitalize">AI Services</p>
                
            </div>
     
    </div>
   
    
   

</section>


        </div>
    );
};

export default UpcomingJob;