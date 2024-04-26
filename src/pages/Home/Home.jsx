import Layout from '../../components/Layout/Layout';
import styles from './Home.module.css';
import deciduousTree from "../../assets/deciduous-tree.svg";
import githubLogo from "../../assets/github_logo.svg";

function Home() {
    return (
      <Layout>
        <div className={styles.container}>
          <div className={styles.square}>
            <img src={deciduousTree} alt="aTree" />
            <img src={githubLogo} alt="logoOfGithub" />
          </div>
        </div>
      </Layout>
    );
}

export default Home;