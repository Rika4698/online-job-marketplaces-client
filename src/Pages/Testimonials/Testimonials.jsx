/* eslint-disable react/no-unescaped-entities */
import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Testimonials = () => {
  return (
    <div>


      <div
        className="w-screen h-full overflow-y-scroll bg-slate-200 bg-no-repeat bg-cover bg-[url('')]">

        <div
          className="lg:w-[80%] md:w-[90%] mx-auto md:px-0 px-4 md:my-10  bg-slate-200 md:rounded-xl overflow-hidden">


          <section className="w-full h-full flex flex-col justify-center sm:p-10 p-6" id="testimonial">

            <div className=" sm:mb-20 mb-10">
              <div className="flex items-center justify-center flex-col gap-y-2 py-5 text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-600">Client <span className="text-blue-600">Testimonials</span></h2>
                <p className="text-base font-medium text-slate-700/70 dark:text-gray-400">Discover What Our Clients Say: Real Stories, Real Experiences</p>
              </div>
              {/* <h2 className="text-2xl font-bold text-black pb-2">Testimonials</h2>
        <div className="rounded-t-full border-[1px] border-gray-400 overflow-hidden">
          <hr className="border-[3px] border-green-600 w-[40%]" />
        </div> */}
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 items-center">

              <div className="flex flex-col justify-center-center border-2 border-gray-300 md:p-8 p-2 rounded-xl relative">
                <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-600"
                  src="https://i.ibb.co/NmQpMC3/wepik-export-20231109102749h-Uhr.png" alt="testimonials" />

                <p className="pl-4 md:pl-8 text-gray-700 sm:text-xl font-semibold text-center font-serif">
                  <span className="sm:text-5xl text-xl  text-gray-800">❝</span>Exceptional service and unmatched dedication. They went above and beyond to meet our requirements. 10/10!
                  <br /><span className="sm:text-5xl text-xl text-gray-800">❞</span>
                </p>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-gray-700 sm:text-xl sm:mt-2">Michel trump</p>
                  <p className="text-gray-500">Content Manager of Innovate Solutions</p>
                </div>
              </div>

              <div className="flex flex-col justify-center-center border-2 border-gray-300 md:p-8 p-2 rounded-xl relative">
                <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-600"
                  src="https://i.ibb.co/0n6HfWq/wepik-export-20231109102824kuu-C.png" alt="testimonials" />

                <p className="pl-4 md:pl-8 text-gray-700 sm:text-xl font-semibold text-center font-serif">
                  <span className="sm:text-5xl text-xl text-gray-800">❝</span>
                  Their creativity knows no bounds. They brought our vision to life with stunning designs. A pleasure to work with!
                  <br /><span className="sm:text-5xl text-xl text-gray-800">❞</span>
                </p>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-gray-700 sm:text-xl sm:mt-2">David Johnson</p>
                  <p className="text-gray-500">Graphic Designer at BrightWave </p>
                </div>
              </div>

              <div className="flex flex-col justify-center-center border-2 border-gray-300 md:p-8 p-2 rounded-xl relative">
                <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-600"
                  src="https://i.ibb.co/sF3x7dX/wepik-export-20231109102936x-Mh8.jpg" alt="testimonials" />

                <p className="pl-4 md:pl-8 text-gray-700 sm:text-xl font-semibold text-center font-serif">
                  <span className="sm:text-5xl text-xl text-gray-800">❝</span>
                  I'm impressed with the quality of their work and their attention to detail. Highly recommended!
                  <br /><span className="sm:text-5xl text-xl text-gray-800">❞</span>
                </p>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-gray-700 sm:text-xl sm:mt-2">Jane Smith</p>
                  <p className="text-gray-500">Software Developer at TechSphere</p>
                </div>
              </div>

              <div className="flex flex-col justify-center-center border-2 border-gray-300 md:p-8 p-2 rounded-xl relative">
                <img className="absolute lg:-left-6 lg:-top-10 -left-[25px] -top-4 sm lg:w-[6rem] lg:h-[6rem] sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] rounded-full outline outline-offset-2 outline-green-600"
                  src="https://i.ibb.co/j3x4d3R/wepik-export-20231109103145-I7-Pj.png" alt="testimonials" />

                <p className="pl-4 md:pl-8 text-gray-700 sm:text-xl font-semibold text-center font-serif">
                  <span className="sm:text-5xl text-xl text-gray-800">❝</span>
                  Working with this team was an exceptional experience. They delivered outstanding results and exceeded our expectations.
                  <br /><span className="sm:text-5xl text-xl text-gray-800">❞</span>
                </p>
                <div className="flex flex-col justify-center items-center">
                  <p className="text-gray-700 sm:text-xl sm:mt-2">Jarin Smith</p>
                  <p className="text-gray-500">Marketing Manager of Craft&Co</p>
                </div>
              </div>

            </div>
          </section>

        </div>
      </div>




    </div>
  );
};

export default Testimonials;