import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Form from '../components/form/Form';

const MainPage = ({isAuthenticated}) => {
    return (
        <div>
            <Navbar isAuthenticated={isAuthenticated} />
            <Form isAuthenticated={isAuthenticated} />
            <Footer />
        </div>
    )
}

export default MainPage;