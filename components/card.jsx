const Card = ({ img, text }) => {
  return (
    <div
      style={{
        minWidth: window.innerHeight > window.innerWidth ? "60vw" : "40vh",
        height: window.innerHeight > window.innerWidth ? "90vw" : "60vh",
        backgroundColor: "white",
        borderRadius: "15px",
      }}
    ></div>
  );
};

export default Card;
