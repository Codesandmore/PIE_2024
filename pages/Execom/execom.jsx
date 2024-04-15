import styles from "./Execom.module.css";
function Execom() {
  return (
    <div className={styles.main}>
      <div className={styles.execomImg}>
        <img className={styles.image} src="/execom.png" alt="" />
      </div>
      <div>
        <h1>Core Team</h1>
      </div>
    </div>
  );
}

export default Execom;
