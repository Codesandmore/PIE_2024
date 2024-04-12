import Card from "../../components/card";
import { recentEvents } from "../../Data/recentEvents";

const RecentEvents = () => {
  const generateCards = () => recentEvents.map((item) => <Card />);

  return <>{generateCards()}</>;
};

export default RecentEvents;
