import { useState, useEffect } from "react";
import upArrow from "../imagenes/icons/up-arrow.png";
export const ScrollToTop = () => {
  const [scrollTop, setScrollTop] = useState(false);

  console.log(window.screenY);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {scrollTop && (
        <img src={upArrow} alt="" onClick={scrollToTop} className="totop-btn" />
      )}
    </div>
  );
};
