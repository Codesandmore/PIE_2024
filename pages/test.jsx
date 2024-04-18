import Gallery from "../components/gallery";
import { awards } from "../Data/awards";
import { notableEvents } from "../Data/notableEvents";
import { recentEvents } from "../Data/recentEvents";
import { majorEvents } from "../Data/majorEvents";
import { voiceIt } from "../Data/voiceIt";
import Card from "../components/card";
import RecentEvents from "./Events/recentEvents";

function Test() {
  return (
    <div>
      <Gallery />
      <RecentEvents />
    </div>
  );
}

export default Test;
