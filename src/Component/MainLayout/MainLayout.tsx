import EmpoweringHealth from "../AllSection/EmpoweringHealth/EmpoweringHealth";
import FirstAppointment from "../AllSection/FirstAppointment/FirstAppointment";
import FrequentlyAsk from "../AllSection/FrequentlyAsk/FrequentlyAsk";
import HelpSolution from "../AllSection/HelpSolution/HelpSolution";
import HeroSection from "../AllSection/HeroSection/HeroSection";
import Testimonial from "../AllSection/Testimonial/Testimonial";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <div className="max-w-[1160px] mx-auto px-5 pb-10">
      <NavBar />
      <HeroSection />
      <HelpSolution />
      <EmpoweringHealth />
      <Testimonial />
      <FrequentlyAsk />
      <FirstAppointment />
    </div>
  );
};

export default MainLayout;
