export const Description = ({ data }) => {
  return (
    <>
      <div className="middle-frame">
        {data.map((element) => (
          <img key={element} src={element} />
        ))}
      </div>
    </>
  );
};
