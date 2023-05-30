import Git from "./../../assets/github.svg";
import Linked from "./../../assets/linkedin.svg";
import "./Footer.css";

function Footer() {
    return (
      <footer>
        <div style={{width: '50%', margin: '0 auto', border: '0.07em solid #FF5E3A', marginBottom: '2em'}}></div>
        <p className="created">Created by</p>
        <p className="name" style={{color: '#FF5E3A', fontFamily: 'Inter'}}>Aditya Raj Sharma</p>
        <div>
          <a href="https://github.com/Rebooting-Me" target="blank"><img style={{display: 'inline-block'}} src={Git} alt="github-logo" /></a>
          <a href="https://www.linkedin.com/in/aditya-raj-sharma-/" target="blank"><img style={{display: 'inline-block'}} src={Linked} alt="linkedin-logo" /></a>
        </div>
      </footer>
    );
  }
  
  export default Footer;