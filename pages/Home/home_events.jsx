import styles from "./Event.module.css";

function HomeEvents() {
  return (
    <div>
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
}

export default HomeEvents;
