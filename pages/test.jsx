import PodCard from "../components/podcard";
import { piePods } from "../Data/piepods";

function Test() {
  return (
    <div>
      <RecentEventsSpotify />
    </div>
  );
}

export default Test;

const RecentEventsSpotify = () => {
  const generateCards = () =>
    piePods.map((item) => <PodCard key={item.id} src={item.src} />);

  return (
    <div>
      <h1>PIE PODS</h1>
      <div
        style={{
          display: "flex",
          justifyContent:
            window.innerHeight > window.innerWidth
              ? "flex-start"
              : "space-around",
          width: "100vw",
          alignItems: "center",
          // ...(window.innerWidth <= 768 && { flexWrap: "wrap" }),
        }}
      >
        {generateCards()}
      </div>
    </div>
  );
};
