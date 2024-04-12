import Card from "../../components/card";
import { voiceIt } from "../../Data/voiceIt";

const VoiceIt = () => {
  const generateCards = () => voiceIt.map((item) => <Card />);

  return (
    <>
      <h1>Voice It</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100vw",
        }}
      >
        {generateCards()}
      </div>
    </>
  );
};

export default VoiceIt;
