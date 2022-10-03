import { useState, useEffect } from "react";
import "../style/articles.css";
export const Articles = () => {
  const [info, setInfo] = useState([]);
  const gettingApi = async () => {
    const response = await fetch(
      `https://servicepad-post-api.herokuapp.com/articles/`
    );
    const { data } = await response.json();

    data.map((element) => {
      setInfo((data) => [
        ...data,

        <div key={element.id} className="article-container">
          <img src={element.image_url} className="article-images" />

          <p className="article-container-author">{element.author}</p>
          <h1 className="article-container-title">{element.title}</h1>
          <p className="article-container-content">{element.content}</p>
        </div>,
      ]);
    });
  };
  useEffect(() => {
    gettingApi();
  }, []);

  return <div className="buttom-articles">{info}</div>;
};
