import "./EmpoweringHealth.css";

const EmpoweringHealth = () => {
  return (
    <div className="empoweringHealth grid md:grid-cols-2 gap-y-10 gap-x-6 pt-10 px-5 md:px-10 pb-20 md:p-10 bg-[#FFFFF5] rounded-3xl">
      <div className="left-divv">
        <button className="button">Service</button>
        <h2>Empowering Health, Enriching Lives</h2>
        <p className="md:w-[75%]">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <button className="position-button flex justify-center items-center bg-[#FFC637] w-[158px]  rounded-xl py-2 -mb-12 md:mb-0">
          <span>Appointment</span>
          <img
            className="size-3 ml-2"
            src="https://i.ibb.co/3v95y64/Arrow-1.png"
            alt=""
          />{" "}
        </button>
      </div>

      <div className="right-divv">
        <img src="https://i.ibb.co/8bJRQq9/Rectangle-27.png" alt="" />

        <div className="text-divv">
          <div>
            <h2 className="font-inter md:text-[20px] font-semibold md:leading-[31px] text-left md:mb-3">
              Advanced Technology
            </h2>

            <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>

          <img
            className="size-12"
            src="https://i.ibb.co/T188nfV/Group-28.png"
            alt=""
          />
        </div>
      </div>

      <div className="right-divv">
        <img src="https://i.ibb.co/GvRCjGf/Rectangle-27-1.png" alt="" />

        <div className="text-divv">
          <div>
            <h2 className="font-inter md:text-[20px] font-semibold md:leading-[31px] text-left md:mb-3">
              Online Doctor Meet
            </h2>

            <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>

          <img
            className="size-12"
            src="https://i.ibb.co/T188nfV/Group-28.png"
            alt=""
          />
        </div>
      </div>

      <div className="right-divv">
        <img src="https://i.ibb.co/gZ3XvQr/Rectangle-27-2.png" alt="" />

        <div className="text-divv">
          <div>
            <h2 className="font-inter md:text-[20px] font-semibold md:leading-[31px] text-left md:mb-3">
              Consultancy your health
            </h2>

            <p className="font-inter text-[12px] font-normal leading-[18px] text-left">
              Our surgeons are trained in the latest robotic surgical
              techniques, which allow for greater precision
            </p>
          </div>

          <img
            className="size-12"
            src="https://i.ibb.co/T188nfV/Group-28.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default EmpoweringHealth;
