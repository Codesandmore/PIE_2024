//import execomSphere from "../public/execomSphere.png";

const ExecomCard = (props) => {
  return (
    <div
      style={{
        width: "20vw",
        height: "22vw",
        border: "1px solid",
        borderRadius: "15px",
      }}
    >
      <div
        style={{
          height: "60%",
          border: "1px solid",
          position: "relative",
          display: "flex",
        }}
      >
        <img
          src="/execomSphere.png"
          style={{ width: "80%", position: "absolute", alignSelf: "flex-end" }}
        />
      </div>
      <div style={{ height: "40%", border: "1px solid", fontSize: "1rem" }}>
        <div>JOHN DOE</div>
        <div>WEB DEVELOPER</div>
      </div>
    </div>
  );
};

export default ExecomCard;
