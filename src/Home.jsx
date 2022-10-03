import {
  BotonRequest,
  ImagesHome,
  MiddleSection,
  Description,
  TextoHome,
  Footer,
  Articles,
  ScrollToTop,
} from "./components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Contexto } from "./contexto/Contexto";
// import image1 from "./imagenes/Frame4.png";
// import image2 from "./imagenes/Frame5.png";
// import image3 from "./imagenes/Frame6.png";
// import image4 from "./imagenes/Frame7.png";
export const Home = () => {
  // const frameStructure = [image1, image2, image3, image4];
  const { frameStructure } = useContext(Contexto);
  return (
    <>
      <section className="home-section">
        <div className="home-section-txt">
          <TextoHome />
          <BotonRequest
            className="request-button-home"
            children="Request Invite"
          />
        </div>
        <ImagesHome />
      </section>
      <section className="middle-section">
        <MiddleSection />
        <Description data={frameStructure} />
      </section>
      <section className="buttom-section">
        <div className="buttom-header">
          <h1 className="header-button-title">Lastest Article</h1>

          <Link to={`/addarticles`}>
            <BotonRequest
              className="request-button-button"
              children="Request Invite"
            />
          </Link>
        </div>

        <Articles />
        <ScrollToTop />
      </section>
      <Footer />
    </>
  );
};
