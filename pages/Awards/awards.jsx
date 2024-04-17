import { awards } from "../../Data/awards";
import Card from "../../components/card";

const Awards = () => {
  const generateCards = () =>
    awards.map((item) => (
      <div>
        <Card />
        <p>{item.title}</p>
        <p>{item.category}</p>
        <p>{item.name}</p>
      </div>
    ));
  return (
    <>
      <h1>Our Awards</h1>
      <div
        style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "flex-start"
              : "space-around",
          width: "100vw",
          alignItems: "center",
          overflowX: "scroll",
        }}
      >
        {generateCards()}
      </div>
    </>
  );
};

export default Awards;
