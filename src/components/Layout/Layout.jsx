import Footer from "../Footer/Footer"
import Header from "../Header/Header"


const Layout = ({children}) => {
    return (
      <div>
        <Header />
        <Footer />
        {children}
      </div>
    );
}

export default Layout;