import "./frequntlyAsk.css";

const FrequentlyAsk = () => {
  return (
    <div>
      <div className="">
        <button className="button">Faq</button>
        <h2 className=" font-inter text-[25px] md:text-[36px] font-semibold md:leading-[54px] text-left my-3 md:my-5">
          Frequntly Asked Question
        </h2>
      </div>

      <div className="faQmainDiv">
        <div className="collapse collapse-arrow bg-[#FFFFF5] mt-2">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            <h2 className="relative w-[684.03px]  md:px-[30px] gap-0 text-[#020043]">
              What are your office hours?
            </h2>
          </div>

          <div className="collapse-content bg-[#FFFFFF] border-t-2">
            <p className="relative text-[14px] font-normal leading-[24px] md:px-[30px] opacity-85 ">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#FFFFF5] mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <h2 className="relative w-[684.03px]  md:px-[30px] gap-0 text-[#020043]">
              How can I schedule an appointment?
            </h2>
          </div>
          <div className="collapse-content bg-[#FFFFFF] border-t-2">
            <p className="relative text-[14px] font-normal leading-[24px] md:px-[30px] opacity-85">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#FFFFF5] mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <h2 className="relative w-[684.03px]  md:px-[30px] gap-0 text-[#020043]">
              Do you accept insurance?
            </h2>
          </div>
          <div className="collapse-content bg-[#FFFFFF] border-t-2">
            <p className="relative text-[14px] font-normal leading-[24px] md:px-[30px] opacity-85">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#FFFFF5] mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <h2 className="relative w-[684.03px]  md:px-[30px] gap-0 text-[#020043]">
              What should I bring to my appointment?
            </h2>
          </div>
          <div className="collapse-content bg-[#FFFFFF] border-t-2">
            <p className="relative text-[14px] font-normal leading-[24px] md:px-[30px] opacity-85">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>

        <div className="collapse collapse-arrow bg-[#FFFFF5] mt-2">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            <h2 className="relative w-[684.03px]  md:px-[30px] gap-0 text-[#020043]">
              Do you offer telemedicine appointments?
            </h2>
          </div>
          <div className="collapse-content bg-[#FFFFFF] border-t-2">
            <p className="relative text-[14px] font-normal leading-[24px] md:px-[30px] opacity-85">
              Our office hours vary by location, but typically we are open
              Monday through Friday from 8:00 AM to 5:00 PM. Some locations may
              offer extended hours or weekend appointments. Please contact your
              nearest clinic for specific hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
