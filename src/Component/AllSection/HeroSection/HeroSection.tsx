import Banner from "./Banner/Banner";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div>
      <Banner></Banner>

      <div className="ComprehensiveCare py-16">
        <div className="main-section ">
          <h1 className="main-title">
            Comprehensive Care <br /> for Every Patient
          </h1>

          <div className="stats-container">
            <div className="large">
              <h2>90%</h2>
              <p className="w-[70%]">
                Patient satisfaction rate, reflecting our commitment
              </p>
              <img src="../../../public/Group 12.png" alt="Icon 1" />
            </div>
            <div className="medium">
              <h2>500+</h2>
              <p>
                Board-certified <br /> doctors
              </p>
              <img src="../../../public/contract (1) 1.png" alt="Icon 2" />
            </div>

            <div className="small">
              <span className="flex">
                <h2>4.8</h2>
                <img
                  className="size-8 ml-2"
                  src="../../../public/Vector.png"
                  alt="Icon 3"
                />
              </span>
              <p>Over 20,000 Patient</p>

              <img
                className="public"
                src="../../../public/Group 7.png"
                alt="Icon G"
              />
            </div>
            <div className="medium">
              {" "}
              <h2>$5000</h2>
              <p className="w-[53%]">Money spent for poor patient</p>
              <img src="../../../public/Group.png" alt="Icon 4" />
            </div>
            <div className="large">
              <h2>50+</h2>
              <p>
                Free lesson video <br /> for patients
              </p>
              <img src="../../../public/Group (1).png" alt="Icon 5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
