import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="rules">
       
        <ul className="rules-list">
          <li>24/7 Available</li>
          <li>Local Available</li>
          <li>Pickup & Drop Available</li>
          <li>One Way & Round Trip Available</li>
        </ul>
      </div>
      <div className="signature">
        <div>
          <span>For, HARVI TAXI SERVICE</span>
        </div>
        <div className="signature-line">Proprietor</div>
      </div>
    </div>
  );
};

export default Footer;
