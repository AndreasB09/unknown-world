import styles from './Header.module.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className={styles.container}>
        <h1 className={styles.title}>This is the Head</h1>
        <div className={styles.btncontainer}>
          <Link to="/" className={styles.button}>
            Home
          </Link>
          <Link to="/faction-one" className={styles.button}>
            Faction One
          </Link>
          <Link to="/faction-two" className={styles.button}>
            Faction Two
          </Link>
          <Link to="/faction-three" className={styles.button}>
            Faction Three
          </Link>
        </div>
      </header>
    );
}

export default Header;