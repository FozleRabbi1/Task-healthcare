import "./EmpoweringHealth.css";

const EmpoweringHealth = () => {
  return (
    <div className="empoweringHealth grid grid-cols-2 gap-y-10 gap-x-6 p-10 bg-[#FFFFF5] rounded-3xl">
      <div className="left-divv">
        <button className="button">Service</button>
        <h2>Empowering Health, Enriching Lives</h2>
        <p className="w-[75%]">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="position-button flex justify-center items-center bg-[#FFC637] w-[158px]  rounded-xl py-2">
          <span>Appointment</span>
          <img
            className="size-3 ml-2"
            src="../../../public/Arrow 1.png"
            alt=""
          />{" "}
        </button>
      </div>

      <div className="right-divv">
        <img src="../../../../public/Rectangle 27.png" alt="" />

        <div className="text-divv">
          <div>
            <h2 className="font-inter text-[20px] font-semibold leading-[31px] text-left mb-3">
              Advanced Technology
            </h2>

            <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>

          <img
            className="size-12"
            src="../../../../public/Group 28.png"
            alt=""
          />
        </div>
      </div>

      <div className="right-divv">
        <img src="../../../../public/Rectangle 27 (1).png" alt="" />

        <div className="text-divv">
          <div>
            <h2 className="font-inter text-[20px] font-semibold leading-[31px] text-left mb-3">
              Online Doctor Meet
            </h2>

            <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>

          <img
            className="size-12"
            src="../../../../public/Group 28.png"
            alt=""
          />
        </div>
      </div>

      <div className="right-divv">
        <img src="../../../../public/Rectangle 27 (2).png" alt="" />

        <div className="text-divv">
          <div>
            <h2 className="font-inter text-[20px] font-semibold leading-[31px] text-left mb-3">
              Consultancy your health
            </h2>

            <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>

          <img
            className="size-12"
            src="../../../../public/Group 28.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EmpoweringHealth;
