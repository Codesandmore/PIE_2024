import MajorEvents from "./majorEvents";
import PiePods from "./piePods";
import RecentEvents from "./recentEvents";
import VoiceIt from "./voiceIt";

const Events = () => {
  return (
    <>
      <div>
        <h1>Events</h1>
      </div>
      <RecentEvents />
      <MajorEvents />
      <PiePods />
      <VoiceIt />
    </>
  );
};

export default Events;
