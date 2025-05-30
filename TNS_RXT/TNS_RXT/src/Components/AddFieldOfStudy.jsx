import React, { useState } from "react";

const AddFieldOfStudy = () => {
  const [campus, setCampus] = useState("");
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [fieldOfStudyCode, setFieldOfStudyCode] = useState("Autogenerated"); 

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log({
      campus,
      fieldOfStudy,
      fieldOfStudyCode,
    });
    alert("Field of Study Added (console log for details)!");
    
    setCampus("");
    setFieldOfStudy("");
    setFieldOfStudyCode("Autogenerated");
  };

  return (
    <div className="container-fluid">
      <h3 className="mb-4">Add Field of Study</h3>
      <div className="add-field-of-study-card">
        <form onSubmit={handleSubmit}>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="campusSelect" className="form-label">
                Campus
              </label>
              <select
                id="campusSelect"
                className="form-select"
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                required
              >
                <option value="">Select</option>
                <option value="main">Main Campus</option>
                <option value="north">North Campus</option>
                <option value="south">South Campus</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="fieldOfStudyInput" className="form-label">
                Field of Study
              </label>
              <input
                type="text"
                className="form-control"
                id="fieldOfStudyInput"
                placeholder="Placeholder"
                value={fieldOfStudy}
                onChange={(e) => setFieldOfStudy(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label htmlFor="fieldOfStudyCodeInput" className="form-label">
                Field of Study Code
              </label>
              <input
                type="text"
                className="form-control"
                id="fieldOfStudyCodeInput"
                value={fieldOfStudyCode}
                readOnly 
                disabled 
              />
            </div>
          </div>
          <div className="d-flex justify-content-start">
            <button type="submit" className="btn btn-success px-4 py-2">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFieldOfStudy;
