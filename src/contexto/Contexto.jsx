import { createContext, useState } from "react";

export const Contexto = createContext();

import image1 from "../imagenes/Frame4.png";
import image2 from "../imagenes/Frame5.png";
import image3 from "../imagenes/Frame6.png";
import image4 from "../imagenes/Frame7.png";

export const Datos = ({ children }) => {
  const frameStructure = [image1, image2, image3, image4];

  // data.map((element) => {
  //   setInfo((data) => [
  //     ...data,

  //     <div key={element.id} className="article-container">
  //       <img src={element.image_url} className="article-images" />

  //       <p className="article-container-author">{element.author}</p>
  //       <h1 className="article-container-title">{element.title}</h1>
  //       <p className="article-container-content">{element.content}</p>
  //     </div>,
  //   ]);
  // });
  return (
    <Contexto.Provider value={{ frameStructure }}>{children}</Contexto.Provider>
  );
};
