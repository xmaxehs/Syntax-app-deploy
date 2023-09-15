import { Link as LinkS } from "react-scroll";
import { styles } from "../style";

const Navbar = () => (
  <nav className="flex items-center justify-center mx-auto my-0 text-navbarColor">
    <div className="flex justify-center items-center fixed bg-transparent top-7 z-50 md:mx-[25%] md:w-4/5 md:text-[90%]">
      <div className="lg:w-[380px] min-w-[320px] h-10 px-2 bg-mainBg shadow-md rounded-[40px]">
        <ul className="flex items-center justify-between m-2 list-none bg-transparent">
          <li className={`${styles.navItem}`}>
            <LinkS
              className={`${styles.navLinks}`}
              smooth={true}
              duration={500}
              spy={true}
              offset={5}
              to="home"
            >
              Home
            </LinkS>
          </li>
          <li className={`${styles.navItem}`}>
            <LinkS
              className={`${styles.navLinks}`}
              smooth={true}
              duration={500}
              spy={true}
              offset={5}
              to="about"
            >
              About
            </LinkS>
          </li>
          <li className={`${styles.navItem}`}>
            <LinkS
              className={`${styles.navLinks}`}
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
              to="projects"
            >
              Projects
            </LinkS>
          </li>
          <li className={`${styles.navItem}`}>
            <LinkS
              className={`${styles.navLinks}`}
              smooth={true}
              duration={500}
              spy={true}
              offset={130}
              to="contact"
            >
              Contact
            </LinkS>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
