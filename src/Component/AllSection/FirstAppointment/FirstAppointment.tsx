const FirstAppointment = () => {
  return (
    <div className="py-16 md:py-32">
      <div className="relative">
        <img src="https://i.ibb.co/mFV9JfC/Group-43.png" alt="" />
        <img
          className="absolute top-0 left-0"
          src="https://i.ibb.co/L9kxy5z/Rectangle-33.png"
          alt=""
        />

        <div className="absolute top-[25%] left-[5%] md:w-[35%]">
          <h2 className="font-inter md:text-[40px] font-semibold md:leading-[60px] text-left mb-5 text-white w-[60%] md:w-[70%]">
            Get Your First Appointment at 50% Off!
          </h2>

          <span className="flex -mt-6 md:mt-0 ">
            <button className="mr-5 flex justify-center items-center bg-[#FFC637] md:w-[158px]  rounded-xl p-1 md:py-2">
              <span>Appointment</span>
              <img
                className="size-3 ml-2"
                src="https://i.ibb.co/3v95y64/Arrow-1.png"
                alt=""
              />{" "}
            </button>

            <button className=" flex justify-center items-center md:w-[158px] border border-gray-500  bg-transparent rounded-xl p-1 md:py-2 text-white">
              <span>Learn More</span>
              <img
                className="size-3 ml-2"
                src="https://i.ibb.co/yyN4SMy/Arrow-white.png"
                alt=""
              />{" "}
            </button>
          </span>
        </div>

        <img
          className="absolute top-2 md:top-10 right-2 md:right-10"
          src="https://i.ibb.co/88TTcgk/logo-light.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FirstAppointment;
