import Card from "../../components/card";
import { recentEvents } from "../../Data/recentEvents";

const RecentEvents = () => {
  const generateCards = () => recentEvents.map((item) => <Card />);

  return (
    <>
      <h1>Recent Events</h1>
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

export default RecentEvents;