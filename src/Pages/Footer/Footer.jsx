

const Footer = () => {
    return (
        <div>
             <footer className="footer footer-center p-10 bg-blue-50 pt-10 dark:bg-sky-950">
  <aside>
   <div className="flex ">
   <img className="w-44  " src="https://i.ibb.co/9yRK3c0/work-wave-high-resolution-logo-transparent-2.png" alt="" />
   
   </div>
    <h3 className="font-bold mt-4 dark:text-slate-50 text-base">
      Darussalam, Mirpur-1 <br/>Dhaka-1216 
    </h3> 
    <h3 className="dark:text-slate-100">Copyright © 2023 -  by Work Wave </h3>
  </aside> 
  {/* <nav className="w-36 ">
    <h1 className="font-semibold text-left text-lg dark:text-slate-200">Follow Us</h1>
    <div 
    className="flex gap-4 "
    >
      <a href="https://www.facebook.com/"><img src="https://i.ibb.co/n0vvR5N/download.png" alt="" /></a> 
      <a href="https://www.instagram.com/"><img src="https://i.ibb.co/L81GxxG/download-2.png" alt="" /></a> 
      <a href="https://www.twitter.com/"><img src="https://i.ibb.co/gW9hZS6/download-1.png" alt="" /></a>
    </div>
  </nav> */}

<div className="footer px-10 py-4  ml-0  text-base-content ">
<aside className="mr-auto">
    <header className="text-slate-400 font-bold text-lg">Contact</header> 
    <h3 className=" text-center text-base font-bold text-black">Call us: 01791234674</h3>
    <h1 className=" text-center text-base font-bold text-black">Email:workwave46@gmail.com</h1>
    <h3 className=" text-center text-base font-bold text-black">Website: work-wave.com</h3>
    
  </aside> 
  <nav className="w-32 md:place-self-center md:justify-self-end">
  <header className="footer-title pt-4 text-base">Follow Us</header> 
    <div className="grid grid-flow-col gap-4">
    <a href="https://www.facebook.com/"><img src="https://i.ibb.co/n0vvR5N/download.png" alt="" /></a> 
      <a href="https://www.instagram.com/"><img src="https://i.ibb.co/L81GxxG/download-2.png" alt="" /></a> 
      <a href="https://www.twitter.com/"><img src="https://i.ibb.co/gW9hZS6/download-1.png" alt="" /></a>
    </div>
  </nav>
</div> 
</footer>
        </div>
    );
};

export default Footer;