import MajorEvents from "./majorEvents";
import PiePods from "./piePods";
import RecentEvents from "./recentEvents";
import VoiceIt from "./voiceIt";
import Desc from "./desc";

const Events = () => {
  return (
    <div>
      <Desc />
      <RecentEvents />
      <MajorEvents />
      <PiePods />
      <VoiceIt />
    </div>
  );
};

export default Events;
