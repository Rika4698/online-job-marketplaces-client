/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
    return (
        <div className="container w-[90%] md:w-[100%] mx-auto">
             <div className="mt-8">
                <div className="flex flex-col items-center justify-center">
                    <h2 className="font-semibold w-full text-center text-xl md:text-2xl lg:text-3xl">Client <span className="text-[#db332a]">Testimonials</span></h2>
                    <p className="text-[8px] md:text-sm flex my-3 text-center">Discover What Our Clients Say: Real Stories, Real Experiences</p>
                </div>
            </div>
            <div className="mb-8 mt-4 ">
              <Swiper
                    loop={true}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
     <SwiperSlide>
     
     <div className="hero min-h-[600px] rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/NmQpMC3/wepik-export-20231109102749h-Uhr.png)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
   
    <div className="max-w-md">
    <img className="ml-36 w-[75px] md:w-[100px] h-[75px] mb-2 md:h-[100px] object-cover rounded-full" src="https://i.ibb.co/NmQpMC3/wepik-export-20231109102749h-Uhr.png" alt="" />
      <h2 className="mb-5 text-5xl font-bold text-white">Michel trump</h2>
      <h3  className="mb-5 text-base font-bold text-white">Content Manager</h3>
      <p className="mb-5 text-white text-base">Exceptional service and unmatched dedication. They went above and beyond to meet our requirements. 10/10!</p>
     
    </div>
  </div>
</div>
        
     </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/0n6HfWq/wepik-export-20231109102824kuu-C.png)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
   
    <div className="max-w-md">
    <img className="ml-36 w-[75px] md:w-[100px] h-[75px] mb-2 md:h-[100px] object-cover rounded-full" src="https://i.ibb.co/0n6HfWq/wepik-export-20231109102824kuu-C.png" alt="" />
      <h2 className="mb-5 text-5xl font-bold text-white">David Johnson</h2>
      <h3  className="mb-5 text-base font-bold text-white">Graphic Designer</h3>
      <p className="mb-5 text-white text-base">Their creativity knows no bounds. They brought our vision to life with stunning designs. A pleasure to work with!</p>
     
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/sF3x7dX/wepik-export-20231109102936x-Mh8.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">

    <div className="max-w-md">
    <img className="ml-36 w-[75px] md:w-[100px] h-[75px] mb-2 md:h-[100px] object-cover rounded-full" src="https://i.ibb.co/sF3x7dX/wepik-export-20231109102936x-Mh8.jpg" alt="" />
      <h2 className="mb-5 text-5xl font-bold text-white">Jane Smith</h2>
      <h3  className="mb-5 text-base font-bold text-white">Software Developer</h3>
      <p className="mb-5 text-white text-base">I'm impressed with the quality of their work and their attention to detail. Highly recommended!</p>
    
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/j3x4d3R/wepik-export-20231109103145-I7-Pj.png)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    
    <div className="max-w-md">
    <img className="ml-36 w-[75px] md:w-[100px] h-[75px] mb-2 md:h-[100px] object-cover rounded-full" src="https://i.ibb.co/j3x4d3R/wepik-export-20231109103145-I7-Pj.png" alt="" />
      <h2 className="mb-5 text-5xl font-bold text-white">Jarin Smith</h2>
      <h3  className="mb-5 text-base font-bold text-white">Marketing Manager</h3>
      <p className="mb-5 text-white text-base">Working with this team was an exceptional experience. They delivered outstanding results and exceeded our expectations.</p>
     
    </div>
  </div>
</div>
      </SwiperSlide>
                </Swiper>
                </div>
        </div>
    );
};

export default Testimonials;