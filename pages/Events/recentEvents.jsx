import Card from "../../components/card";
import { recentEvents } from "../../Data/recentEvents";

const RecentEvents = () => {
  const generateCards = () => recentEvents.map((item) => <Card />);

  return (
    <>
      <h1>Recent Events</h1>
      <div style={{ display: "flex" }}>{generateCards()}</div>
    </>
  );
};

export default RecentEvents;
