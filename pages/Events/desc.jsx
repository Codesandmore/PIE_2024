const Desc = () => {
  return (
    <div>
      <h2
        style={
          {
            fontSize: "40px",
          }
        }
      >
        Events
      </h2>
      <div className="image-container">
        <img
          src="/images/aboutpic.jpg"
          alt="Who We Are"
          style={{ width: "50%", borderRadius: "10px" }}
        />
      </div>
      <div className="description-container">
        <p>
          PIE is a special interest group of IEEE which focuses on curating a
          vibrant community innovators and entrepreneur. Promotion of Innovation
          and Entrepreneurship, intends to support engineers in pursuing
          entrepreneurship, have a better understanding of Startups and supports
          them by giving them access to the right platforms and resources.
        </p>
      </div>
      <div className="member-container">
        <div data-aos="zoom-in-up">
          <div className="noofm">
            <p className="orange-text">30+</p>
            <p className="white-text">EVENTS</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="noofm">
            <p className="orange-text">300+</p>
            <p className="white-text">PARTICIPANTS</p>
          </div>
        </div>
        <div data-aos="zoom-in-up">
          <div className="noofm">
            <p className="orange-text">6</p>
            <p className="white-text">AWARDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Desc;
