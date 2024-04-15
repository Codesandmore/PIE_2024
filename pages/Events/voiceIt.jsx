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

export default VoiceIt;
