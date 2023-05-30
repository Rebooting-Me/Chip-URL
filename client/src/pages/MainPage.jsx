import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const MainPage = ({isAuthenticated}) => {
    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} />
            <Footer />
        </div>
    )
}

export default MainPage;