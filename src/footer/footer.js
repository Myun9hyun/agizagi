import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-section1">
        {/* <Link to="/team" className="button-link"> */}
        ver 4.5.&copy; 둥둥향 <br/>Poster designed by 릎샴<br/>
        
        {/* </Link>   */}
      </div>
    </div>
  );
};

export default Footer;