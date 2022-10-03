import { BotonRequest } from "./BotonRequest";

export const FormArticles = ({ handleSubmit, author, title, content }) => {
  return (
    <div className="form-container">
      <form method="post" action="#" className="form" onSubmit={handleSubmit}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="title">Blog Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="content">Blog Content</label>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
          {}
        </textarea>
        <BotonRequest className="boton-form" children="Save" />
      </form>
    </div>
  );
};
