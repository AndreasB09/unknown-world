import Layout from "../../components/Layout/Layout";
import styles from "./FactionFour.module.css";

function FactionFour() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.circle}>
          <div className={styles.innerCircle} />
        </div>
      </div>
    </Layout>
  );
}

export default FactionFour;
