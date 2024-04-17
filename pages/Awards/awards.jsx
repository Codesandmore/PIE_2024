import { awards } from "../../Data/awards";
import Card from "../../components/card";

const Awards = () => {
  const generateCards = () =>
    awards.map((item) => (
      <div key={item.id}>
        <Card key={item.id} img={item.img} text={item.name} />
        <p>{item.name}</p>
        <p>{item.dec}</p>
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
