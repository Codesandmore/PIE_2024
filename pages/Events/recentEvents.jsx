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
          justifyContent: "flex-start",
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

export default RecentEvents;
