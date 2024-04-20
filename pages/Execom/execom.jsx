import ExecomCard from "../../components/ExecomCard";
import styles from "./Execom.module.css";
import ExeCard from "../../components/ExeCard";
function Execom() {
  return (
    <div className={styles.main}>
      <div className={styles.execomImg}>
        <img className={styles.image} src="/execom.png" alt="" />
      </div>
      <div>
        <h1>Core Team</h1>
      </div>
      <ExecomCard />
      <ExeCard />

    </div>
  );
}

export default Execom;
