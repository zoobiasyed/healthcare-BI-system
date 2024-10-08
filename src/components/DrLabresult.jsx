import React, { useState, useEffect, useRef } from "react";
import "../css/LabResults.css";
import Drsidebar from "./Drsidebar";
// import Sidebar from "./Sidebar";
import HeaderAim from "./HeaderAim";

// LabResults Component
const LabResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rows, setRows] = useState([
    {
      id: 1,
      description: "Blood test",
      testedOn: "04-08-2023",
      generatedOn: "05-02-2024",
      fileName: "File 1",
    },
    {
      id: 2,
      description: "Urine Test Result",
      testedOn: "04-08-2023",
      generatedOn: "05-02-2024",
      fileName: "File 2",
    },
    // Add more rows as needed
  ]);

  // Create refs for date and time
  const dateRef = useRef(null);
  const timeRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 1000);
    updateTime(); // Initialize the time immediately on load

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

  const handleDownload = () => {
    alert("Download functionality not implemented yet.");
  };

  return (
    <div className="container-New">
      <Drsidebar />
      <main className="main-content-New">
        <HeaderAim onSearch={handleSearch}></HeaderAim>
        <section className="lab-results">
          <div id="current-date" ref={dateRef}></div>
          <div id="current-time" ref={timeRef}></div>
          <h2>Lab Results</h2>
          <table className="table">
            <thead>
              <tr>
                <th className="th">No</th>
                <th className="th">Description</th>
                <th className="th">Tested on</th>
                <th className="th">Generated on</th>
                <th className="th">File</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((row, index) => (
                <tr key={row.id}>
                  <td className="th">{index + 1}</td>
                  <td className="th">{row.description}</td>
                  <td className="th">{row.testedOn}</td>
                  <td className="th">{row.generatedOn}</td>
                  <td className="th">
                    <span className="file-icon">📄</span> {row.fileName}
                    <span className="download-icon" onClick={handleDownload}>
                      ⬇️
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        //{" "}
      </main>
      //{" "}
    </div>
  );
};

export default LabResults;
