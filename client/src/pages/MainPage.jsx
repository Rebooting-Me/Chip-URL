import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Hero from '../components/hero/Hero';
import './Common.css'

const MainPage = ({isAuthenticated}) => {
    return (
      <div className="main-page">
        <Navbar isAuthenticated={isAuthenticated} />
        <Hero isAuthenticated={isAuthenticated} />
        {/* <div className="foot"><Footer /></div> */}
        
      </div>
    );
}

export default MainPage;

//style={{marginBottom: '0px', position: 'absolute', left: '50%', transform: 'translate(-50%, 0%)'}}