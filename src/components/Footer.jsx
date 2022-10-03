import Logowhite from "../imagenes/logowhite.png";
import { Facebook, Pintrest, Twitter, Youtube, Instagram } from "../imagenes";
import { BotonRequest } from "./BotonRequest";
import "../style/footer.css";
export const Footer = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="logo-media-container">
        <div className="logo-container">
          <img src={Logowhite} alt="" />
        </div>
        <div className="media-container">
          <Facebook />
          <Youtube />
          <Twitter />
          <Pintrest />
          <Instagram />
        </div>
      </div>
      <div className="table-container">
        <table>
          <tbody>
            <td>
              <a href="#">About Us</a>
            </td>
            <td>
              <a href="#">Careers</a>
            </td>
          </tbody>
          <tbody>
            <td>
              <a href="#">Contact</a>
            </td>
            <td>
              <a href="#">Suport</a>
            </td>
          </tbody>
          <tbody>
            <td>
              <a href="#">Blog</a>
            </td>
            <td>
              <a href="#">Privacy Polity</a>
            </td>
          </tbody>
        </table>
      </div>
      <div>
        <BotonRequest
          className="request-button-footer"
          children="Request Invite"
        />
        <p className="footer-paragraph">© Easybank. All Rights Reserved</p>
      </div>
    </footer>
  );
};
