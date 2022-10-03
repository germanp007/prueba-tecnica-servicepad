import { NavLink } from "react-router-dom";
import { BotonRequest } from "../components/BotonRequest";
import Logo from "../imagenes/logo frame.png";
import "../style/navbar.css";
export const Navbar = () => {
  return (
    <nav>
      <img className="Logo" src={Logo} alt="logo" />
      <NavLink to="/home">
        <span>Home</span>
        {/* <span className="line"></span> */}
      </NavLink>
      <NavLink to="/about">
        <span>About</span>
        {/* {isActive && <span className="line"></span>} */}
      </NavLink>
      <NavLink to="/contact">
        <span>Contact</span>
        {/* {isActive && <span className="line"></span>} */}
      </NavLink>
      <NavLink to="/blog">
        <span>Blog</span>
        {/* {isActive && <span className="line"></span>} */}
      </NavLink>
      <NavLink to="/careers">
        <span>Careers</span>
        {/* {isActive && <span className="line"></span>} */}
      </NavLink>
      <BotonRequest
        className="request-button-navbar"
        children="Request Invite"
      />
    </nav>
  );
};
