import Card from "../../components/card";
import { majorEvents } from "../../Data/majorEvents";

const MajorEvents = () => {
  const generateCards = () => majorEvents.map((item) => <Card />);

  return (
    <>
      <h1>Major Events</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100vw",
          flexDirection:
            window.innerHeight > window.innerWidth ? "column" : "row",
          alignItems: "center",
        }}
      >
        {generateCards()}
      </div>
    </>
  );
};

export default MajorEvents;
