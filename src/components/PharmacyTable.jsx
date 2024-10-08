import React, { useState } from 'react';
import '../css/billing.css'

function PharmacyTable() {
  const [rows, setRows] = useState([]);

  const addRow = () => {
    const newRow = { id: rows.length + 1, name: '', mg: 0, quantity: 0, price: 0, editable: true };
    setRows([...rows, newRow]);
  };

  const toggleEditMode = (index) => {
    const newRows = [...rows];
    newRows[index].editable = !newRows[index].editable;
    setRows(newRows);
  };

  const handleInputChange = (e, index, field) => {
    const newRows = [...rows];
    newRows[index][field] = e.target.value;
    setRows(newRows);
  };

  return (
    <div className="container">
      <button className="btn-add" onClick={addRow}>Add Row</button>
      <table id="myTable" className="divtab">
        <thead>
          <tr>
            <th>ID</th>
            <th>Medicine Name</th>
            <th>mg</th>
            <th>Quantity</th>
            <th>Price ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td><input type="text" value={row.id} disabled /></td>
              <td><input type="text" value={row.name} disabled={!row.editable} onChange={(e) => handleInputChange(e, index, 'name')} /></td>
              <td><input type="number" value={row.mg} min="0" disabled={!row.editable} onChange={(e) => handleInputChange(e, index, 'mg')} /></td>
              <td><input type="number" value={row.quantity} min="0" disabled={!row.editable} onChange={(e) => handleInputChange(e, index, 'quantity')} /></td>
              <td><input type="number" value={row.price} step="0.01" min="0" disabled={!row.editable} onChange={(e) => handleInputChange(e, index, 'price')} /></td>
              <td>
                <a href="#" className="edit" onClick={() => toggleEditMode(index)}>
                  {row.editable ? <span>&#10004; Done</span> : <span>&#9998; Edit</span>}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PharmacyTable;
