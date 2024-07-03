import EmpoweringHealth from "../AllSection/EmpoweringHealth/EmpoweringHealth";
import HelpSolution from "../AllSection/HelpSolution/HelpSolution";
import HeroSection from "../AllSection/HeroSection/HeroSection";
import Testimonial from "../AllSection/Testimonial/Testimonial";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-[1160px] mx-auto pb-20">
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <HelpSolution></HelpSolution>
      <EmpoweringHealth />
      <Testimonial />
    </div>
  );
};

export default MainLayout;
