import { aboutStyle } from "../style";
import { AboutImg } from "../assets";

const About = () => (
  <div
    id="about"
    className="max-w-[1100px] h-[600px] xs:h-[800px] flex justify-between items-center mx-[70px] my-0 lg:mx-auto lg:my-0 xs:mt-[200px]"
  >
    <div className="grid items-center grid-flow-col md:grid-flow-row">
      <div className="order-1 md:order-2">
        <div className="flex flex-col justify-start items-center max-w-[540px]">
          <h3 className="text-[64px] w-full text-left font-bold text-primaryPurple mb-[30px]">
            About Me
          </h3>
          <p className="text-[22px] font-normal text-primaryWhite mb-[30px] whitespace-break-spaces">
            I'm Ehsan Pirnazar, a young front-end developer passionate about web
            development and React. Born in 2007, I started coding at 13 and have
            been working on projects to improve my skills. My goal is to create
            top-tier websites that blend design and functionality. Join me in
            pushing the boundaries of web development on my personal website.
            Welcome to my digital realm!
          </p>
          <div className="flex items-start justify-center md:flex-wrap md:justify-center">
            <div className={`${aboutStyle.CounterItem}`}>+21 Happy Customer</div>
            <div className={`${aboutStyle.CounterItem}`}>+120 Coffee Drink</div>
            <div className={`${aboutStyle.CounterItem}`}>+20 Work Samples</div>
          </div>
        </div>
      </div>
      <div className="order-2 md:order-1 max-w-[540px] mx-3 my-0">
        <img src={AboutImg} alt="about photo" className="w-full md:my-0 md:mx-auto md:w-6/12 md:justify-center md:flex" />
      </div>
    </div>
  </div>
);

export default About;
