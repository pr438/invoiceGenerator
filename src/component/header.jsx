import React, { useState } from 'react';
import './header.css';

const Header = () => {
  const [companyName, setCompanyName] = useState('HARVI TAXI SERVICE');
  const [services, setServices] = useState('All A.C. & Non A.C. Car Rent Available\nMarriage & Rajkot & Ahmedabad Airport Pickup & Drop');
  const [location, setLocation] = useState('MORBI (GUJARAT) INDIA');
  const [contact1, setContact1] = useState('+91 97148 57777');
  const [contact2, setContact2] = useState('+91 99259 02909');

  return (
    <div className="header">
      <div className="cash-memo">CASH MEMO</div>
      <div className="contacts">
        <div className="contact">
          <strong>Mo.:</strong> <input className="contact-input" value={contact1} onChange={(e) => setContact1(e.target.value)} /><br />
          <input className="contact-input" value={contact2} onChange={(e) => setContact2(e.target.value)} />
        </div>
      </div>
      <div className="company-name">
        <h1><input className="company-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} /></h1>
      </div>
      <div className="services">
        <textarea className="services-input" value={services} onChange={(e) => setServices(e.target.value)} rows="2" />
      </div>
      <div className="location">
        <input className="location-input" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
    </div>
  );
};

export default Header;
