import "./helpSolution.css";

const HelpSolution = () => {
  return (
    <div className="grid grid-cols-2 py-20">
      <div className="left-div">
        <button className="button">Who we are</button>
        <h2>We Help To Get Solutions</h2>
        <p className="w-[75%]">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <button className="position-button flex justify-center items-center bg-[#FFC637] w-[158px]  rounded-xl py-2">
          <span>Learn More</span>
          <img
            className="size-3 ml-2"
            src="../../../public/Arrow 1.png"
            alt=""
          />{" "}
        </button>
      </div>

      <div className="right-div">
        <img src="../../../../public/Rectangle 24.png" alt="" />
        <div>
          <h2 className="text-[26px] font-medium leading-[24px] text-left mb-3">
            Our mission is simple
          </h2>
          <p className=" text-base font-normal leading-6 text-left">
            To provide high-quality healthcare services that are accessible,
            personalized, and patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpSolution;
