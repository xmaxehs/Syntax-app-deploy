import { heroStyle } from "../style";
import { Link as LinkR } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { Home } from "../assets";


const Hero = () => (
  <div
    id="home"
    className="max-w-[1100px] h-[1000px] flex items-center mt-[-150px] mx-[70px] my-0 xs:ml-[30px] xs:mr-0 md:mt-[-60px] lg:mx-auto lg:my-0"
  >
    <div className="flex items-center justify-center">
      <div className="grid items-center grid-flow-col md:grid-flow-row">
        <div className="order-1">
          <div className="flex flex-col justify-start items-center max-w-[540px] -mt-5">
            <div className={`${heroStyle.heroRowCol1}`}>
              <h2 className="text-4xl font-bold text-graySecondary">
                Hey , I`m
              </h2>
            </div>
            <div className={`${heroStyle.heroRowCol1}`}>
              <h2 className="text-[64px] font-bold text-primaryPurple">
                Ehsan Pirnazar
              </h2>
            </div>
            <div className={`${heroStyle.heroRowCol1}`}>
              <div className="text-graySecondary">
                I`m A
                <p className="text-4xl font-bold text-primaryWhite">
                  Front-end Developer
                </p>
              </div>
            </div>
            <div className={`${heroStyle.heroRowCol1}`}>
              <div className="flex justify-between items-center text-[#e9e7e8] mx-2.5 my-0 md:m-0">
                <LinkR className={`${heroStyle.socialLinks}`} to={{pathname: "https://github.com/xmaxehs"}} target="_blank">
                  <AiFillGithub className={`${heroStyle.iconStyle}`}/>
                </LinkR>
                <LinkR className={`${heroStyle.socialLinks}`} to={{pathname:"https://Instagram.com/@ehs.pirnazar"}} target="_blank">
                  <AiFillInstagram className={`${heroStyle.iconStyle}`}/>
                </LinkR>
                <LinkR className={`${heroStyle.socialLinks}`} to={{pathname:"https://www.linkedin.com/in/ehsan-pirnazar"}} target="_blank">
                  <AiFillLinkedin className={`${heroStyle.iconStyle}`}/>
                </LinkR>
                <LinkR className={`${heroStyle.socialLinks}`} to={{pathname: "https://T.me/ehs.pirnazar"}} target="_blank">
                  <BsTelegram className={`${heroStyle.iconStyle}`}/>
                </LinkR>
              <div className="ml-[15px] cursor-pointer">
                <button className="text-sm bg-navbarColor outline-none hover:bg-primaryWhite w-[89px] h-12 text-primaryWhite cursor-pointer transition-[0.2s] duration-[ease-in-out] rounded-[40px] border-0 hover:text-primaryPurple hover:font-bold hover:text-base hover:transition-[0.2s] hover:duration-[ease-in-out]">Hire Me</button>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="order-2 md:my-[50px]">
          <div className="max-w-[540px]">
            <img src={Home} alt="hero photo" className="w-100 xs:my-0 xs:mx-auto"/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
