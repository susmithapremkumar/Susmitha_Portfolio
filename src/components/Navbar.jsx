import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a className="text-2xl lg:text-4xl font-play text-white" href="#">
          Susmitha
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <a href="https://www.linkedin.com/in/susmithapremkumar/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://github.com/susmithapremkumar" target="_blank">
          <FaGithub />
        </a>
        <a href="mailto:susprem03@gmail.com">
          <MdEmail /> 
      </a>
      </div>
    </nav>
  );
};

export default Navbar;