import Form from '../form/Form';
import Lady from '../../assets/Lady.svg';
import './Hero.css';

const Hero = ({isAuthenticated}) => {
    return (
      <div className="hero">
        <div className="hero-text">
          <h1 id='heading'>
            Effortlessly <span style={{ color: "#FF5E3A" }}>shorten</span> those
            long, pesky URLs with just a{" "}
            <span style={{ color: "#FF5E3A" }}>single click</span>! Say goodbye to
            cluttered links and hello to simplicity.
          </h1>
          <Form isAuthenticated={isAuthenticated} />
        </div>
        <img src={Lady} alt="Lady" />
        {/* <div className="hero-image">
          
        </div> */}
      </div>
    );
}

export default Hero;