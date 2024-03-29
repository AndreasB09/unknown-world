import styles from './Footer.module.css';
//import githubLogo from '../../assets/ghithub_logo.svg';
// import decidiousTree from '../../assets/decidious-tree.svg'

function Footer() {
    return (
        <footer className={styles.container}>
            <img src={githubLogo}></img>
        </footer>
    )
}

export default Footer