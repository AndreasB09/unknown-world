import Layout from '../../components/Layout/Layout';
import styles from './FactionOne.module.css';

function FactionOne() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.circle}></div>
        </div>
      </Layout>
    );
}

export default FactionOne;