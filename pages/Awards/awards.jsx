const Awards = () => {
  const generateCards = () =>
    recentEvents.map((item) => (
      <div>
        <Card />
      </div>
    ));
  return (
    <>
      <h1>Our Awards</h1>
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

export default Awards;
