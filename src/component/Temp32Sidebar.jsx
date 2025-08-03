import React, { useState } from "react";
import {
  FaDownload,
  FaSave,
  FaPalette,
  FaBars,
  FaTimes,
  FaFont,
  FaShare,
  FaUpload,
  FaRobot,
  FaUserEdit,
  FaMagic,
  FaBriefcase,
  FaProjectDiagram,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Temp11Sidebar = ({
  onDownload,
  onSave,
  onColorChange,
  onFontChange,
  currentColor,
  currentFont,
  onShare,
  onManualEdit,
  onAIEdit,
  onAIProfile,
  onAIExperience,
  onAIProjects,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [uploadDropdownOpen, setUploadDropdownOpen] = useState(false);
  const [aiDropdownOpen, setAiDropdownOpen] = useState(false);

  const colorOptions = [
    { name: "Blue", value: "#1976d2" }, // Professional blue
    { name: "Green", value: "#2e7d32" }, // Professional green
    { name: "Slate", value: "#455a64" }, // Neutral slate
    { name: "Teal", value: "#00796b" }, // Professional teal
    { name: "Navy", value: "#0d47a1" }, // Dark blue
    { name: "Burgundy", value: "#880e4f" }, // Professional burgundy
  ];

  const fontOptions = [
    { name: "Roboto", value: "'Roboto', sans-serif" }, // ATS-friendly
    { name: "Open Sans", value: "'Open Sans', sans-serif" }, // ATS-friendly
    { name: "Lato", value: "'Lato', sans-serif" }, // ATS-friendly
    { name: "Arial", value: "Arial, sans-serif" }, // Universal
    { name: "Calibri", value: "Calibri, sans-serif" }, // Windows standard
    { name: "Times New Roman", value: "'Times New Roman', serif" }, // Classic
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleUploadDropdown = () => {
    setUploadDropdownOpen(!uploadDropdownOpen);
    if (aiDropdownOpen) setAiDropdownOpen(false);
  };

  const toggleAIDropdown = () => {
    setAiDropdownOpen(!aiDropdownOpen);
    if (uploadDropdownOpen) setUploadDropdownOpen(false);
  };

  return (
    <>
      <button
        className="temp11-sidebar-toggle"
        onClick={toggleSidebar}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className={`temp11-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="temp11-sidebar-header">
          <h3>Resume Builder</h3>
          <p>Template 11 - ATS Optimized</p>
        </div>

        <div className="temp11-sidebar-actions">
          {/* Updated Upload Resume Dropdown */}
          <div className="temp11-dropdown" data-open={uploadDropdownOpen}>
            <button
              className="temp11-sidebar-btn primary"
              onClick={toggleUploadDropdown}
            >
              <FaUpload /> Upload Resume
              <span className="temp11-dropdown-chevron">
                {uploadDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {uploadDropdownOpen && (
              <div className="temp11-dropdown-menu">
                <button
                  className="temp11-dropdown-item"
                  onClick={() => {
                    onManualEdit();
                    setUploadDropdownOpen(false);
                  }}
                >
                  <FaUserEdit /> Manual Edit
                </button>
                <button
                  className="temp11-dropdown-item"
                  onClick={() => {
                    onAIEdit();
                    setUploadDropdownOpen(false);
                  }}
                >
                  <FaRobot /> AI Edit
                </button>
              </div>
            )}
          </div>

          {/* Updated AI Assistant Dropdown */}
          <div className="temp11-dropdown" data-open={aiDropdownOpen}>
            <button
              className="temp11-sidebar-btn primary"
              onClick={toggleAIDropdown}
            >
              <FaRobot /> AI Assistant
              <span className="temp11-dropdown-chevron">
                {aiDropdownOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {aiDropdownOpen && (
              <div className="temp11-dropdown-menu">
                <button
                  className="temp11-dropdown-item"
                  onClick={() => {
                    onAIProfile();
                    setAiDropdownOpen(false);
                  }}
                >
                  <FaMagic /> Improve Profile with AI
                </button>
                <button
                  className="temp11-dropdown-item"
                  onClick={() => {
                    onAIExperience();
                    setAiDropdownOpen(false);
                  }}
                >
                  <FaBriefcase /> Enhance Experience with AI
                </button>
                <button
                  className="temp11-dropdown-item"
                  onClick={() => {
                    onAIProjects();
                    setAiDropdownOpen(false);
                  }}
                >
                  <FaProjectDiagram /> AI-Powered Projects Description
                </button>
              </div>
            )}
          </div>

          <button className="temp11-sidebar-btn secondary" onClick={onSave}>
            <FaSave /> Save Resume
          </button>

          <button className="temp11-sidebar-btn secondary" onClick={onShare}>
            <FaShare /> Share Resume
          </button>

          <button className="temp11-sidebar-btn primary" onClick={onDownload}>
            <FaDownload /> Download PDF
          </button>
        </div>

        <div className="temp11-sidebar-section">
          <h4>Design Options</h4>
          <div className="temp11-design-options">
            <div className="temp11-color-options">
              <h5>
                <FaPalette /> Color Theme
              </h5>
              <div className="temp11-color-grid">
                {colorOptions.map((color) => (
                  <button
                    key={color.value}
                    className={`temp11-color-option ${
                      currentColor === color.value ? "active" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => onColorChange(color.value)}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            <div className="temp11-font-options">
              <h5>
                <FaFont /> Font Family
              </h5>
              <select
                className="temp11-font-select"
                value={currentFont}
                onChange={(e) => onFontChange(e.target.value)}
              >
                {fontOptions.map((font) => (
                  <option key={font.value} value={font.value}>
                    {font.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="temp11-sidebar-footer">
          <p>ATS Score: 95% - Optimized for applicant tracking systems</p>
        </div>
      </div>
    </>
  );
};

export default Temp11Sidebar;
