import Gallery from "../components/gallery";
import { awards } from "../Data/awards";
import { notableEvents } from "../Data/notableEvents";
import { recentEvents } from "../Data/recentEvents";
import { majorEvents } from "../Data/majorEvents";
import { voiceIt } from "../Data/voiceIt";
import Card from "../components/card";
import RecentEvents from "./Events/recentEvents";
import PodCard from "../components/podcard";
import { piePods } from "../Data/piepods";

function Test() {
  return (
    <div>
      <RecentEvents />
      <RecentEventsSpotify />
    </div>
  );
}

export default Test;

const RecentEventsSpotify = () => {
  const generateCards = () =>
    piePods.map((item) => (
      <PodCard key={item.id} src={item.src} />
    ));

  return (
    <>
      <h1>PIE PODS</h1>
      <div
       /*  style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "flex-start"
              : "space-around",
          width: "100vw",
          alignItems: "center",
          overflowX: "scroll",
        }} */
      >
        {generateCards()}
      </div>
    </>
  );
};
