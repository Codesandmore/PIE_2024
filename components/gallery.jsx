import styles from "./Gallery.module.css";

function Gallery() {
  return (
    <div>
      <div className={styles.gallery}>
        <section className={styles.gallery1}>
          <img className={styles.gridIcon} alt="" src="/g_temp.svg" />
        </section>
      </div>
    </div>
  );
}

export default Gallery;
