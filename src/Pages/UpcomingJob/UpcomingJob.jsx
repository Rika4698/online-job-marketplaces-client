

const UpcomingJob = () => {
    return (
        <div className="bg-red-50">
            <h1 className="pt-6 text-center text-4xl font-bold text-amber-700">Upcoming Job Category</h1>
            <div className="grid grid-cols-1 ml-16 pb-12 pt-20   md:grid-cols-2  lg:grid-cols-3  mr-6 gap-8">
            <div className="card h-[300px] bg-base-100 shadow-xl chat-image">
  <figure className=""><img src="https://i.ibb.co/T8ccLLC/HD-wallpaper-technology-programming-c-programming.jpg" alt="" /></figure>
  <div className="flex items-center justify-center">
    <h2 className="card-title mt-4 text-2xl font-bold text-cyan-700">Programming & Tech</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
   
  </div>
</div>
<div className="card h-[300px] bg-base-100 shadow-xl  chat-image">
  <figure><img src="https://i.ibb.co/SdvqdKZ/wepik-export-20231109083329-Y5n-F.png" alt="Shoes" /></figure>
  <div className="flex items-center justify-center">
    <h2 className="card-title mt-4 text-2xl font-bold text-cyan-700">Video and Animation</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    
  </div>
</div>
<div className="card h-[300px] bg-base-100 shadow-xl  chat-image">
  <figure className="h-[225px]"><img src="https://i.ibb.co/GskfxtS/wepik-export-202311090837141s-FD.png" alt="" /></figure>
  <div className=" flex items-center justify-center ">
    <h2 className="card-title mt-4 text-2xl font-bold text-cyan-700">AI Services</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
   
  </div>
</div>
</div>
        </div>
    );
};

export default UpcomingJob;