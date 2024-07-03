import EmpoweringHealth from "../AllSection/EmpoweringHealth/EmpoweringHealth";
import FirstAppointment from "../AllSection/FirstAppointment/FirstAppointment";
import FrequentlyAsk from "../AllSection/FrequentlyAsk/FrequentlyAsk";
import HelpSolution from "../AllSection/HelpSolution/HelpSolution";
import HeroSection from "../AllSection/HeroSection/HeroSection";
import Testimonial from "../AllSection/Testimonial/Testimonial";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div className="max-w-[1160px] mx-auto px-5">
        <NavBar />
        <HeroSection />
        <HelpSolution />
        <EmpoweringHealth />
        <Testimonial />
        <FrequentlyAsk />
        <FirstAppointment />
      </div>
      <div className="bg-[#020043]">
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
