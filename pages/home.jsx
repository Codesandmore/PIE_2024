import styles from "./Home.module.css";

const Home = () => {
  return (
    <div>
      <div>
        <section className={styles.hero}>
          <div className={styles.imagesParent}>
            <div className={styles.images}>
              <img
                className={styles.image12Icon}
                loading="lazy"
                alt=""
                src="/image-12@2x.png"
              />
              <img
                className={styles.image11Icon}
                alt=""
                src="/image-11@2x.png"
              />
              <img
                className={styles.image10Icon}
                alt=""
                src="/image-10@2x.png"
              />
              <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
              <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
            </div>
            <img className={styles.group11} alt="" src="/group-1-1@2x.png" />
          </div>
        </section>
      </div>
      {/* About */}
      <div className="about">
        <section className={styles.aboutUs}>
          <div className={styles.textContainer}>
            <h2>About Us</h2>
            <div className={styles.imageContainer}>
              <img
                className={styles.leftImage}
                src="/image-15@2x.png"
                alt="About Us - Left Image"
              />
              <img
                className={styles.centerImage}
                src="/image-13@2x.png" // Replace with actual image path
                alt="About Us - Center Image"
              />
              <img
                className={styles.rightImage}
                src="/image-14@2x.png"
                alt="About Us - Right Image"
              />
            </div>
            <p>
              Promotion of Innovation and Entrepreneurship intends to support
              engineers in pursuing entrepreneurship, have a better
              understanding of Startups and supports them by giving them access
              to the right platforms and resources.
            </p>
          </div>
        </section>
      </div>
      {/* Events */}
      <div className="events">
        <section className={styles.homeInner}>
          <div className={styles.frameParent}>
            <div className={styles.notableEventsWrapper}>
              <div className={styles.notableEvents}>
                <h1>NOTABLE EVENTS</h1>
              </div>
            </div>
            <div className={styles.eventCardParent}>
              <img
                className={styles.eventCardIcon}
                loading="lazy"
                alt=""
                src="/event-card@2x.png"
              />
              <img
                className={styles.eventCardIcon1}
                loading="lazy"
                alt=""
                src="/event-card-1@2x.png"
              />
              <img
                className={styles.eventCardIcon2}
                loading="lazy"
                alt=""
                src="/event-card-2@2x.png"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
