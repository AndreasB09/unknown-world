import styles from './Footer.module.css';
import githubLogo from '../../assets/github_logo.svg';
import deciduousTree from '../../assets/deciduous-tree.svg';

function Footer() {
    return (
      <footer className={styles.container}>
        <img src={githubLogo} alt="githublogo" />
        <img src={deciduousTree} alt="aTree" />
      </footer>
    );
}

export default Footer