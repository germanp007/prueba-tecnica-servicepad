import "../style/botonrequest.css";

export const BotonRequest = ({ className, children }) => {
  return (
    <>
      <button className={`request-button ${className}`}>{children}</button>
    </>
  );
};
