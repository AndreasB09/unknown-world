import styles from './Header.module.css'

function Header() {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>This is the Head</h1>
            <div className={styles.btncontainer}>
                <button>Home</button>
                <button>About</button>
                <button>Contact</button>
            </div>
        </header>
    )
}

export default Header;