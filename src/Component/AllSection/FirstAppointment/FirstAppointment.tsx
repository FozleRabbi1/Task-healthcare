const FirstAppointment = () => {
  return (
    <div className="py-32">
      <div className="relative">
        <img src="../../../../public/Group 43.png" alt="" />
        <img
          className="absolute top-0 left-0"
          src="../../../../public/Rectangle 33.png"
          alt=""
        />

        <div className="absolute top-[25%] left-[5%] w-[35%]">
          <h2 className="font-inter text-[40px] font-semibold leading-[60px] text-left mb-5 text-white">
            Get Your <br /> First Appointment <br /> at 50% Off!
          </h2>

          <span className="flex ">
            <button className="mr-5 flex justify-center items-center bg-[#FFC637] w-[158px]  rounded-xl py-2">
              <span>Appointment</span>
              <img
                className="size-3 ml-2"
                src="../../../public/Arrow 1.png"
                alt=""
              />{" "}
            </button>

            <button className=" flex justify-center items-center w-[158px] border border-gray-500  bg-transparent rounded-xl py-2 text-white">
              <span>Learn More</span>
              <img
                className="size-3 ml-2"
                src="../../../public/Arrow white.png"
                alt=""
              />{" "}
            </button>
          </span>
        </div>

        <img
          className="absolute top-10 right-10"
          src="../../../../public/logo light.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default FirstAppointment;
