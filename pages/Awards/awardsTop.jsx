const AwardTop = () => {
  return (
    <>
      <h1>WHAT ARE AWARDS?</h1>
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
        }}
      >
        <div style={{ width: "40%" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed suscipit
          est leo, ac vulputate ante dignissim eget. Morbi sed nisi quis nunc
          pellentesque lobortis vitae id metus. Maecenas blandit libero sit amet
          sem dictum porttitor. Sed maximus, nisi non accumsan luctus, velit
          urna varius lacus, vel elementum lectus lorem non.
        </div>
        <img
          src="/images/aboutpic.jpg"
          alt="Who We Are"
          style={{
            width: "45%",
            borderRadius: "10px",
          }}
        />
      </div>
    </>
  );
};

export default AwardTop;
