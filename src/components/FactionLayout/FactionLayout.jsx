import Layout from "../../components/Layout/Layout";
import styles from "./FactionLayout.module.css";

function FactionLayout() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
        <div className={styles.card}></div>
      </div>
    </Layout>
  );
}

export default FactionLayout;
