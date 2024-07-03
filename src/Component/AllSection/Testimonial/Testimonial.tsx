import "./testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <div className="py-32">
      <div className="mb-14">
        <button className="button">Testimonial</button>
        <h2 className="font-inter text-[36px] font-semibold leading-[54px] text-left my-5">
          What they say about us
        </h2>
      </div>

      <div className="swiper">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="bg-[#FFFFF5] rounded-xl">
            <div className="p-5 ">
              <div className="">
                <h2 className="font-inter text-[19px] font-semibold leading-[28.5px] text-left">
                  Expertise and Compassion Combined
                </h2>
                <p className="font-inter text-[12px] font-normal leading-[18px] text-left my-3">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://i.ibb.co/Wk4D9jz/Ellipse-10.png"
                  alt=""
                  className="size-10 mr-3"
                />
                <div>
                  <span className="flex">
                    <h2 className=" text-[14px] font-semibold leading-[18px] text-left text-[#020043]">
                      Sarah D,
                    </h2>
                    <h2 className="font-semibold text-[14px] leading-[18px] text-left text-[#4D4C7b]">
                      IT Professional
                    </h2>
                  </span>
                  <img src="https://i.ibb.co/y5v1QyX/Frame-10.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#FFFFF5] rounded-xl">
            <div className="p-5 ">
              <div className="">
                <h2 className="font-inter text-[19px] font-semibold leading-[28.5px] text-left">
                  Expertise and Compassion Combined
                </h2>
                <p className="font-inter text-[12px] font-normal leading-[18px] text-left my-3">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://i.ibb.co/Wk4D9jz/Ellipse-10.png"
                  alt=""
                  className="size-10 mr-3"
                />
                <div>
                  <span className="flex">
                    <h2 className=" text-[14px] font-semibold leading-[18px] text-left text-[#020043]">
                      Sarah D,
                    </h2>
                    <h2 className="font-semibold text-[14px] leading-[18px] text-left text-[#4D4C7b]">
                      IT Professional
                    </h2>
                  </span>
                  <img src="https://i.ibb.co/y5v1QyX/Frame-10.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#FFFFF5] rounded-xl">
            <div className="p-5 ">
              <div className="">
                <h2 className="font-inter text-[19px] font-semibold leading-[28.5px] text-left">
                  Expertise and Compassion Combined
                </h2>
                <p className="font-inter text-[12px] font-normal leading-[18px] text-left my-3">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://i.ibb.co/Wk4D9jz/Ellipse-10.png"
                  alt=""
                  className="size-10 mr-3"
                />
                <div>
                  <span className="flex">
                    <h2 className=" text-[14px] font-semibold leading-[18px] text-left text-[#020043]">
                      Sarah D,
                    </h2>
                    <h2 className="font-semibold text-[14px] leading-[18px] text-left text-[#4D4C7b]">
                      IT Professional
                    </h2>
                  </span>
                  <img src="https://i.ibb.co/y5v1QyX/Frame-10.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#FFFFF5] rounded-xl">
            <div className="p-5 ">
              <div className="">
                <h2 className="font-inter text-[19px] font-semibold leading-[28.5px] text-left">
                  Expertise and Compassion Combined
                </h2>
                <p className="font-inter text-[12px] font-normal leading-[18px] text-left my-3">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://i.ibb.co/Wk4D9jz/Ellipse-10.png"
                  alt=""
                  className="size-10 mr-3"
                />
                <div>
                  <span className="flex">
                    <h2 className=" text-[14px] font-semibold leading-[18px] text-left text-[#020043]">
                      Sarah D,
                    </h2>
                    <h2 className="font-semibold text-[14px] leading-[18px] text-left text-[#4D4C7b]">
                      IT Professional
                    </h2>
                  </span>
                  <img src="https://i.ibb.co/y5v1QyX/Frame-10.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#FFFFF5] rounded-xl">
            <div className="p-5 ">
              <div className="">
                <h2 className="font-inter text-[19px] font-semibold leading-[28.5px] text-left">
                  Expertise and Compassion Combined
                </h2>
                <p className="font-inter text-[12px] font-normal leading-[18px] text-left my-3">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://i.ibb.co/Wk4D9jz/Ellipse-10.png"
                  alt=""
                  className="size-10 mr-3"
                />
                <div>
                  <span className="flex">
                    <h2 className=" text-[14px] font-semibold leading-[18px] text-left text-[#020043]">
                      Sarah D,
                    </h2>
                    <h2 className="font-semibold text-[14px] leading-[18px] text-left text-[#4D4C7b]">
                      IT Professional
                    </h2>
                  </span>
                  <img src="https://i.ibb.co/y5v1QyX/Frame-10.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="bg-[#FFFFF5] rounded-xl">
            <div className="p-5 ">
              <div className="">
                <h2 className="font-inter text-[19px] font-semibold leading-[28.5px] text-left">
                  Expertise and Compassion Combined
                </h2>
                <p className="font-inter text-[12px] font-normal leading-[18px] text-left my-3">
                  I can't thank enough for their exceptional care. The doctors
                  and staff showed incredible expertise and compassion
                  throughout my treatment journey. I felt truly cared for every
                  step of the way.
                </p>
              </div>
              <div className="flex">
                <img
                  src="https://i.ibb.co/Wk4D9jz/Ellipse-10.png"
                  alt=""
                  className="size-10 mr-3"
                />
                <div>
                  <span className="flex">
                    <h2 className=" text-[14px] font-semibold leading-[18px] text-left text-[#020043]">
                      Sarah D,
                    </h2>
                    <h2 className="font-semibold text-[14px] leading-[18px] text-left text-[#4D4C7b]">
                      IT Professional
                    </h2>
                  </span>
                  <img src="https://i.ibb.co/y5v1QyX/Frame-10.png" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
