import React, { useRef } from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import PrintButton from './printbutton';
import './invoice.css';

const Invoice = () => {
  const printRef = useRef();

  return (
    <div>
      <div ref={printRef} className="invoice">
        <Header />
        <Main />
        <Footer/>
      </div>
      <PrintButton targetRef={printRef} />
    </div>
  );
};

export default Invoice;
