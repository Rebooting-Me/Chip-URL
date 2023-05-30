import Git from "./../../assets/github.svg";
import Linked from "./../../assets/linkedin.svg";
import Figma from "./../../assets/figma.svg";
import "./Footer.css";

function Footer() {
    return (
      <footer>
        <div style={{width: '50%', margin: '0 auto', border: '0.07em solid #FF5E3A'}}></div>
        <p className="created" style={{marginTop: '15px'}}>Created by<span style={{color: '#FF5E3A', fontFamily: 'Inter', fontWeight: '500'}}> Aditya Raj Sharma</span></p>
        <div style={{marginTop: '5px', display: 'flex', gap: '0.5em'}}>
          <a href="https://github.com/Rebooting-Me" target="blank"><img style={{display: 'inline-block'}} src={Git} alt="github-logo" /></a>
          <a href="https://www.linkedin.com/in/aditya-raj-sharma-/" target="blank"><img style={{display: 'inline-block'}} src={Linked} alt="linkedin-logo" /></a>
          <a href="https://www.figma.com/@adityarajsharma" target="blank"><img style={{display: 'inline-block'}} src={Figma} alt="figma-logo" /></a>
        </div>
      </footer>
    );
  }
  
  export default Footer;