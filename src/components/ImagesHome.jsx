import celImg from "../imagenes/image-mockups 1.png";
import bgImg from "../imagenes/bg-intro-desktop 1.png";
import "../style/imageshome.css";
export const ImagesHome = () => {
  return (
    <div className="images">
      <img className="celImg" src={celImg} alt="" />
      <img className="bgImg" src={bgImg} alt="" />
    </div>
  );
};
