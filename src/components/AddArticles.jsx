import { ScrollToTop } from "./ScrollToTop";
import { Footer } from "./Footer";
import { Articles } from "./Articles";
import { useState } from "react";
import { FormArticles } from "./FormArticles";
import { TableArticles } from "./TableArticles";

export const AddArticles = () => {
  const [author, setAuthor] = useState();

  const [title, setTitle] = useState();

  const [content, setContent] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const dataToSubmit = {
      author,
      title,
      content,
    };
    fetch(`https://servicepad-post-api.herokuapp.com/articles/`, {
      method: "POST",
      body: JSON.stringify(dataToSubmit),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    setAuthor("");
    setTitle("");
    setContent("");
  };

  return (
    <>
      {" "}
      <section className="form-section">
        <div className="text-form-container">
          <h1 className="title-form">Add New Blog Article</h1>
          <p className="paragraph-form">
            Publish a new blog article to feature in the Easybank homepage.
          </p>
        </div>
        <FormArticles
          handleSubmit={handleSubmit}
          author={author}
          title={title}
          content={content}
        />
        <ScrollToTop />
      </section>
      <section className="previous-articles">
        <h1 className="title-form">Previous Articles</h1>
        <p className="paragraph-form">
          Review and edit previous blog posts published on to the homepage.
        </p>
        <TableArticles />
      </section>
      <section className="buttom-section">
        <div className="buttom-header">
          <h1 className="header-button-title">Lastest Article</h1>
        </div>

        <Articles />
      </section>
      <Footer className="footer-addArticles" />
    </>
  );
};
