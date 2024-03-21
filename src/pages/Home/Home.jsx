import Layout from '../../components/Layout/Layout';
import styles from './Home.module.css';

function Home() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.square}></div>
        </div>
      </Layout>
    );
}

export default Home;