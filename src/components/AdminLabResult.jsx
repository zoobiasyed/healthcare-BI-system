import React, { useState, useEffect, useRef } from "react";
import "../css/LabResults.css";
import "../css/PreviousConsultations.css"
import Header from "./Header";
import { useNavigate } from "react-router-dom";

// LabResults Component
const AdminLabResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rows, setRows] = useState(() => {
    const savedResults = localStorage.getItem("labResults");
    return savedResults
      ? JSON.parse(savedResults)
      : [
          {
            id: 1,
            description: "Blood test",
            ahcCardNo: "AHC123456",
            testedOn: "04-08-2023",
            generatedOn: "05-02-2024",
            fileName: "File 1",
            fileContent: null, // Store file content
          },
          {
            id: 2,
            description: "Urine Test Result",
            ahcCardNo: "AHC654321",
            testedOn: "04-08-2023",
            generatedOn: "05-02-2024",
            fileName: "File 2",
            fileContent: null, // Store file content
          },
        ];
  });
  const [newResult, setNewResult] = useState({
    description: "",
    ahcCardNo: "",
    testedOn: "",
    generatedOn: "",
    fileName: "",
    fileContent: null, // To store file data
  });
  const [showAddForm, setShowAddForm] = useState(false);
  const [editMode, setEditMode] = useState(null); // To track editing row
  const [editResult, setEditResult] = useState(null); // To store the result being edited

  const dateRef = useRef(null);
  const timeRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    updateTime();

    return () => clearInterval(intervalId);
  }, []);

  const updateTime = () => {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    if (dateRef.current) dateRef.current.textContent = `Date: ${date}`;
    if (timeRef.current) timeRef.current.textContent = `Time: ${time}`;
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some((val) =>
      val.toString().toLowerCase().includes(searchQuery)
    )
  );

  const handleDownload = (fileContent, fileName) => {
    if (!fileContent) {
      alert("File not available for download.");
      return;
    }
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([fileContent]));
    link.download = fileName;
    link.click();
  };

  const handleAddNewResult = () => {
    setShowAddForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editMode !== null) {
      setEditResult({ ...editResult, [name]: value });
    } else {
      setNewResult({ ...newResult, [name]: value });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const content = event.target.result;
        if (editMode !== null) {
          setEditResult({
            ...editResult,
            fileName: file.name,
            fileContent: content,
          });
        } else {
          setNewResult({
            ...newResult,
            fileName: file.name,
            fileContent: content,
          });
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleAddResultSubmit = (e) => {
    e.preventDefault();
    const newId = rows.length + 1;
    const result = { id: newId, ...newResult };
    const updatedRows = [...rows, result];
    setRows(updatedRows);
    setShowAddForm(false);
    setNewResult({
      description: "",
      ahcCardNo: "",
      testedOn: "",
      generatedOn: "",
      fileName: "",
      fileContent: null,
    });

    localStorage.setItem("labResults", JSON.stringify(updatedRows));
  };

  const handleDeleteResult = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this result?"
    );
    if (confirmed) {
      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
      localStorage.setItem("labResults", JSON.stringify(updatedRows));
    }
  };

  const handleEditResult = (row) => {
    setEditMode(row.id);
    setEditResult({ ...row });
  };

  const handleSaveEdit = () => {
    const updatedRows = rows.map((row) =>
      row.id === editMode ? editResult : row
    );
    setRows(updatedRows);
    setEditMode(null);
    setEditResult(null);

    localStorage.setItem("labResults", JSON.stringify(updatedRows));
  };

  const handleCancelEdit = () => {
    setEditMode(null);
    setEditResult(null);
  };

  return (
    <>
    {/* <div className="container-New">
      <AdminSideBar /> */}
      <main className="main-content-New">
        <Header onSearch={handleSearch}></Header>
        <section className="lab-results">
          <div id="current-date" ref={dateRef}></div>
          <div id="current-time" ref={timeRef}></div>
          <h2>Lab Results</h2>
          <div className="account-actions">
            <button onClick={handleAddNewResult}>Add New Lab Result</button>
          </div>
          {showAddForm && (
            <form onSubmit={handleAddResultSubmit} className="add-form">
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newResult.description}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="ahcCardNo"
                placeholder="AHC Card No."
                value={newResult.ahcCardNo}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="testedOn">Tested On:</label>
              <input
                type="date"
                id="testedOn"
                name="testedOn"
                value={newResult.testedOn}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="generatedOn">Generated On:</label>
              <input
                type="date"
                id="generatedOn"
                name="generatedOn"
                value={newResult.generatedOn}
                onChange={handleInputChange}
                required
              />
              <div className="file-upload-container">
                <label htmlFor="fileUpload">Upload File:</label>
                <input
                  type="file"
                  id="fileUpload"
                  name="file"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit">Add Result</button>
            </form>
          )}
          <table className="table">
            <thead>
              <tr>
                <th className="th">No</th>
                <th className="th">AHC Card No.</th>
                <th className="th">Description</th>
                <th className="th">Tested on</th>
                <th className="th">Generated on</th>
                <th className="th">File</th>
                <th className="th">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.id}>
                  <td className="td">{index + 1}</td>
                  <td className="td">
                    {editMode === row.id ? (
                      <input
                        type="text"
                        name="ahcCardNo"
                        value={editResult.ahcCardNo}
                        onChange={handleInputChange}
                      />
                    ) : (
                      row.ahcCardNo
                    )}
                  </td>
                  <td className="td">
                    {editMode === row.id ? (
                      <input
                        type="text"
                        name="description"
                        value={editResult.description}
                        onChange={handleInputChange}
                      />
                    ) : (
                      row.description
                    )}
                  </td>
                  <td className="td">
                    {editMode === row.id ? (
                      <input
                        type="date"
                        name="testedOn"
                        value={editResult.testedOn}
                        onChange={handleInputChange}
                      />
                    ) : (
                      row.testedOn
                    )}
                  </td>
                  <td className="td">
                    {editMode === row.id ? (
                      <input
                        type="date"
                        name="generatedOn"
                        value={editResult.generatedOn}
                        onChange={handleInputChange}
                      />
                    ) : (
                      row.generatedOn
                    )}
                  </td>
                  <td className="td">
                    <span className="file-icon">📄</span> {row.fileName}
                    <span
                      className="download-icon"
                      onClick={() =>
                        handleDownload(row.fileContent, row.fileName)
                      }
                    >
                      ⬇️
                    </span>
                  </td>
                  <td className="td">
                    {editMode === row.id ? (
                      <>
                        <button
                          onClick={handleSaveEdit}
                          className="edit-button"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="edit-button"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEditResult(row)}
                          className="edit-button"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteResult(row.id)}
                          className="delete-button"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>
    {/* </div> */}
    </>
  );
};

export default AdminLabResults;
