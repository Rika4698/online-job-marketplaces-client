
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Banner = () => {
    return (
        <div>
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
                    className="mySwiper "
                >
     <SwiperSlide>
     
            <div className="hero min-h-[600px] " style={{backgroundImage: 'url(https://i.ibb.co/0F70htt/wepik-export-20231106060519-ISr-G.png)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Web Development</h1>
      <p className="mb-5 text-white text-base"> Designing and creating websites and web applications, from coding the front-end user interface to developing the back-end server infrastructure.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
        
     </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/grCM0nV/wepik-export-20231106060726z7-Mv.png)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Digital Marketing</h1>
      <p className="mb-5 text-white text-base">Various online strategies and techniques, including SEO, social media marketing, email marketing, and pay-per-click advertising, to promote products and services.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-[600px] " style={{backgroundImage: 'url(https://i.ibb.co.com/yyr6yfC/businessman-working-laptop.jpg)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Graphics Design</h1>
      <p className="mb-5 text-white text-base">Focuses on visual communication and the creation of visual content, such as logos, illustrations, and layouts, to convey messages and enhance aesthetics.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="hero min-h-[600px]" style={{backgroundImage: 'url(https://i.ibb.co/bK9rwNN/wepik-export-20231106062402-Ffzq.png'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-white">Digital Networking</h1>
      <p className="mb-5 text-white text-base">The management and maintenance of computer systems, hardware, software, and network infrastructure to ensure the efficient flow of data and communication within organizations.</p>
      {/* <button className="btn btn-primary">Get Started</button> */}
    </div>
  </div>
</div>
      </SwiperSlide>
                </Swiper>
        </div>
    );
};

export default Banner;