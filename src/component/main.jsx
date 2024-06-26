import React, { useState } from 'react';
import './main.css';

const Main = () => {
  const initialRows = 10;
  const [items, setItems] = useState(Array.from({ length: initialRows }, () => ({ description: '', km: '', rate: '', total: '' })));
  const [partyName, setPartyName] = useState('');
  const [address, setAddress] = useState('');
  const [billNo, setBillNo] = useState('');
  const [date, setDate] = useState('');
  const [grandTotal, setGrandTotal] = useState(0);

  const handleItemChange = (index, field, value) => {
    const updatedItems = items.map((item, i) => 
      i === index ? { ...item, [field]: value, total: field === 'km' || field === 'rate' ? (item.km * item.rate) || 0 : item.total } : item
    );
    setItems(updatedItems);
    calculateGrandTotal(updatedItems);
  };

  
  const calculateGrandTotal = (items) => {
    const total = items.reduce((acc, item) => acc + (parseFloat(item.total) || 0), 0);
    setGrandTotal(total);
  };

  return (
    <div className="main">
      <div className="main-content-wrapper">
        <div className="party-details">
          <div className="party-info">
            <div><strong>Name:</strong> <input value={partyName} onChange={(e) => setPartyName(e.target.value)} /></div>
            <div><strong>Address:</strong> <input value={address} onChange={(e) => setAddress(e.target.value)} /></div>
          </div>
          <div className="bill-info">
            <div><strong>Bill No.:</strong> <input value={billNo} style={{ borderBottom: "0px" }} onChange={(e) => setBillNo(e.target.value)} /></div>
            <div><strong>Date:</strong> <input value={date} style={{ borderBottom: "0px" }} onChange={(e) => setDate(e.target.value)} /></div>
          </div>
        </div>
        <table className="item-table">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Description</th>
              <th>K/m</th>
              <th>Rate</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td><input value={item.description} onChange={(e) => handleItemChange(index, 'description', e.target.value)} /></td>
                <td><input value={item.km} onChange={(e) => handleItemChange(index, 'km', e.target.value)} /></td>
                <td><input value={item.rate} onChange={(e) => handleItemChange(index, 'rate', e.target.value)} /></td>
                <td><input value={item.total} readOnly /></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="footer">
          <div className="footer-left">
            <strong>Rs. In Worlds.</strong>
          </div>
          <div className="footer-right">
            <strong>Total:</strong> <span>{grandTotal}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
