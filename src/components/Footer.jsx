import { footerStyle } from "../style";
import { Link as LinkR } from "react-router-dom";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const Footer = () => (
  <div className="w-full max-w-[1100px] h-[150px] flex justify-center items-center mx-auto my-0">
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-between items-center text-primaryWhite mx-2.5 my-0 md:m-0">
          <LinkR
            className={`${footerStyle.socialLinks}`}
            to={{ pathname: "https://github.com/xmaxehs" }}
            target="_blank"
          >
            <AiFillGithub className={`${footerStyle.iconStyle}`} />
          </LinkR>
          <LinkR
            className={`${footerStyle.socialLinks}`}
            to={{ pathname: "https://Instagram.com/@ehs.pirnazar" }}
            target="_blank"
          >
            <AiFillInstagram className={`${footerStyle.iconStyle}`} />
          </LinkR>
          <LinkR
            className={`${footerStyle.socialLinks}`}
            to={{ pathname: "https://www.linkedin.com/in/ehsan-pirnazar" }}
            target="_blank"
          >
            <AiFillLinkedin className={`${footerStyle.iconStyle}`} />
          </LinkR>
          <LinkR
            className={`${footerStyle.socialLinks}`}
            to={{ pathname: "https://T.me/ehs.pirnazar" }}
            target="_blank"
          >
            <BsTelegram className={`${footerStyle.iconStyle}`} />
          </LinkR>
        </div>
        <p className="text-xl text-center text-primaryWhite xs:text-sm md:text-lg">
        © 2023 All material and intellectual rights of this site belong to Ehsan Pirnazar.
        </p>
      </div>
    </div>
  </div>
);

export default Footer;
