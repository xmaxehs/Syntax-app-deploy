import {contactStyle} from "../style"
import { ContactImg } from "../assets";
const contact = () => (
  <div
    className="w-full md:h-[1500px] md:mt-[150px] max-w-[1100px] h-[1000px] flex justify-center items-center relative mx-auto my-0"
    id="contact"
  >
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <h3 className="text-[64px] font-bold text-primaryPurple mb-[70px] xs:text-[32px] md:ml-[30px]">
        Contact Us
      </h3>
      <div className="grid items-center grid-flow-col md:grid-flow-row">
        <div className="order-1 md:order-2 flex flex-col justify-center items-center max-w-[540px] shadow-[0px_2px_10px_rgba(0,0,0,0.1)] p-2.5 rounded-[20px] md:w-[70%] md:mx-auto md:my-0 xs:w-[90%] xs:mb-5 bg-primaryPurple">
          <h4 className="text-4xl font-bold text-primaryWhite bg-transparent xs:text-2xl text-center mb-[30px]">Send Your Message</h4>
          <p className="text-2xl text-primaryWhite bg-transparent xs:text-base text-center mb-2.5">
          Don't like the contact form? So send me an email. 👋
          </p>
          <form action="#" className="flex flex-col justify-start items-center w-[400px] rounded-[20px] xs:w-[90%] bg-mainBg">
            <div className={`${contactStyle.FormGroup}`}>
              <input placeholder="Your Name" type="text" className={`${contactStyle.FormInput}`} />
            </div>
            <div className={`${contactStyle.FormGroup}`}>
              <input placeholder="Your Email" type="email" className={`${contactStyle.FormInput}`} />
            </div>
            <div className={`${contactStyle.FormGroup}`}>
              <input placeholder="Your Issue" type="text" className={`${contactStyle.FormInput}`} />
            </div>
            <div className={`${contactStyle.FormGroup}`}>
              <textarea placeholder="Your Message" type="text" className={`${contactStyle.FormInput}`} />
            </div>
            <button className="w-full flex justify-center items-center text-primaryWhite cursor-pointer font-bold transition-[0.2s] duration-[ease-in-out] m-0 p-5 rounded-[0_0_20px_20px] border-[none] hover:text-cardColor hover:text-md hover:transition-[0.2s] hover:duration-[ease-in-out] bg-cardColor outline-none hover:bg-primaryWhite">Submit Message</button>
          </form>
        </div>
        <div className="order-2 md:order-1 max-w-[540px] md:mx-auto md:my-0">
          <img src={ContactImg} alt="contact image" className="w-100 md:mx-auto md:my-0" />
        </div>
      </div>
    </div>
  </div>
);

export default contact;
