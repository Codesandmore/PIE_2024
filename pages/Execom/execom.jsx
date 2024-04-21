import ExecomCard from "../../components/ExecomCard";
import styles from "./Execom.module.css";
import ExeCard from "./cards/ExeCard";
import CoreTeam from "./cards/core";
function Execom() {
  return (
    <div className={styles.main}>
      <div className={styles.execomImg}>
        <img className={styles.image} src="/execom.png" alt="" />
      </div>
      <CoreTeam />
      <CoreTeam />
    </div>
  );
}

export default Execom;
