// import Gallery from "../components/gallery";
import { awards } from "../Data/awards";
import { notableEvents } from "../Data/notableEvents";
import { recentEvents } from "../Data/recentEvents";
import { majorEvents } from "../Data/majorEvents";
import { voiceIt } from "../Data/voiceIt";
import Card from "../components/card";

function Test() {
  return (
    <div>
      {/* <Gallery /> */}
      <RecentEvents />
    </div>
  );
}

export default Test;

const RecentEvents = () => {
  const generateCards = () =>
    voiceIt.map((item) => (
      <Card key={item.id} img={item.img} text={item.name} />
    ));

  return (
    <>
      <h1>Recent Events</h1>
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
