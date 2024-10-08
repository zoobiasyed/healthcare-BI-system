import React, { useState } from 'react';

import '../css/billing.css'; 

import Header from './Header';

const Billing = () => {
  const [rows, setRows] = useState([]);
  const [totals, setTotals] = useState({ subtotal: 0, discount: 0, total: 0 });

  const addRow = () => {
    const newRow = {
      id: rows.length + 1,
      name: '',
      quantity: 1,
      price: 0,
    };
    setRows([...rows, newRow]);
    updateTotals([...rows, newRow]);
  };

  const updateTotals = (updatedRows) => {
    const subtotal = updatedRows.reduce((acc, row) => acc + row.quantity * row.price, 0);
    const discount = 0.1 * subtotal; // Assuming 10% discount
    const total = subtotal - discount;

    setTotals({ subtotal, discount, total });
  };

  const handleInputChange = (index, key, value) => {
    const updatedRows = [...rows];
    updatedRows[index][key] = key === 'quantity' || key === 'price' ? parseFloat(value) || 0 : value;
    setRows(updatedRows);
    updateTotals(updatedRows);
  };

  let time = new Date(); 

  return (
    
        <div className="column-2">
          <div className="div-19">
            

            <Header name='Billing'></Header>

            <div className="head">
              <div className="item">
                <div className="text">Client No:</div>
                <input type="number" id="clientNo" name="clientNo" />
              </div>
              <div className="item">
                <div className="text">Name:</div>
                <input type="text" id="name" name="name" />
              </div>
              <div className="item">
                <div className="text">Date:{time.toLocaleDateString()}</div>
                
              </div>

              <div className="item">
                <div className="text">Time:{time.toLocaleTimeString()}</div>
                
              </div>
            </div>

            <div className="container">
              <button className="btn-add" onClick={addRow}>
                Add Row
              </button>

              <div className='table-container'>
              <table className='scrollable-table'>
                <thead>
                  <tr className=''>
                    <th className=''>ID</th>
                    <th className=''>Name</th>
                    <th className=''>Quantity</th>
                    <th BclassName=''>Price ($)</th>
                  </tr>
                </thead>
                <tbody className='scroll'>
                  {rows.map((row, index) => (
                    <tr key={index}>
                      <td className=''>{row.id}</td>
                      <td className=''>
                        <input
                          type="text"
                          value={row.name}
                          onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                        />
                      </td>
                      <td className=''>
                        <input
                          type="number"
                          min="1"
                          value={row.quantity}
                          onChange={(e) => handleInputChange(index, 'quantity', e.target.value)}
                        />
                      </td>
                      <td className=''>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={row.price}
                          onChange={(e) => handleInputChange(index, 'price', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right' }}>Subtotal:</td>
                    <td><span id="subtotal">{totals.subtotal.toFixed(2)}</span></td>
                  </tr>
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right' }}>Discount (10%):</td>
                    <td><span id="discount">{totals.discount.toFixed(2)}</span></td>
                  </tr>
                  <tr>
                    <td colSpan="3" style={{ textAlign: 'right' }}>Total:</td>
                    <td><span id="total">{totals.total.toFixed(2)}</span></td>
                  </tr>
                </tfoot>
              </table>
              </div>

              
            </div>
          </div>
        </div>
    
  );
};

export default Billing;
