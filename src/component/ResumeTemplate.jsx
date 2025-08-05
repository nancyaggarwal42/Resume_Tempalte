"use client";
import React, { useState, useRef, useEffect } from "react";
import { useResume } from "./context/ResumeContext";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

const Edit = () => {
  const { resumeData, setResumeData } = useResume();
  const resumeRef = useRef();
  const [isEditing, setIsEditing] = useState(false);
  const [localData, setLocalData] = useState(resumeData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    setLocalData(resumeData);
  }, [resumeData]);

  const handleFieldChange = (section, field, value) => {
    setLocalData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const handleArrayChange = (section, index, field, value) => {
    const updatedArray = [...localData[section]];
    updatedArray[index][field] = value;
    setLocalData((prev) => ({ ...prev, [section]: updatedArray }));
  };

  const handleAddItem = (section, defaultItem) => {
    setLocalData((prev) => ({
      ...prev,
      [section]: [...prev[section], defaultItem],
    }));
  };

  const handleDeleteItem = (section, index) => {
    const updated = [...localData[section]];
    updated.splice(index, 1);
    setLocalData((prev) => ({ ...prev, [section]: updated }));
  };

  const handleSave = () => {
    setResumeData(localData);
    setIsEditing(false);
  };

  return (
    <div>
      <Navbar />

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          resumeRef={resumeRef}
        />

        {/* Resume Content */}
        <div
          className={`transition-all flex-1 px-4 md:px-8 py-10 ${
            isSidebarOpen ? "ml-[60px] md:ml-[280px]" : "ml-[60px]"
          }`}
        >
          <div
            ref={resumeRef}
            className="bg-white text-gray-900 p-8 w-full max-w-4xl mx-auto rounded shadow-md"
          >
            {/* HEADER */}
            <div className="mb-6">
              {isEditing ? (
                <input
                  value={localData.header.name}
                  onChange={(e) =>
                    handleFieldChange("header", "name", e.target.value)
                  }
                  className="block text-3xl text-center font-bold w-full mb-2 border border-gray-300 p-2 rounded"
                />
              ) : (
                <h1 className="text-3xl font-bold">{resumeData.header.name}</h1>
              )}

              {isEditing ? (
                <input
                  value={localData.header.role}
                  onChange={(e) =>
                    handleFieldChange("header", "role", e.target.value)
                  }
                  className="block text-xl text-center w-full mb-2 border border-gray-300 p-2 rounded"
                />
              ) : (
                <h2 className="text-xl">{resumeData.header.role}</h2>
              )}

              <div className="flex flex-wrap gap-4 mt-4">
                {["phone", "email", "linkedin", "location"].map((field) =>
                  isEditing ? (
                    <input
                      key={field}
                      value={localData.header[field]}
                      onChange={(e) =>
                        handleFieldChange("header", field, e.target.value)
                      }
                      className="block text-sm w-full md:w-auto border border-gray-300 p-2 rounded"
                    />
                  ) : (
                    <p key={field} className="text-sm">
                      {resumeData?.header?.[field]}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* SUMMARY */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Summary</h3>
              {isEditing ? (
                <textarea
                  value={localData.summary}
                  onChange={(e) =>
                    setLocalData((prev) => ({
                      ...prev,
                      summary: e.target.value,
                    }))
                  }
                  className="w-full border border-gray-300 p-2 rounded"
                />
              ) : (
                <p>{resumeData.summary}</p>
              )}
            </div>

            {/* SKILLS */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {localData.skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    {isEditing ? (
                      <>
                        <input
                          value={skill}
                          onChange={(e) => {
                            const updatedSkills = [...localData.skills];
                            updatedSkills[index] = e.target.value;
                            setLocalData((prev) => ({
                              ...prev,
                              skills: updatedSkills,
                            }));
                          }}
                          className="border border-gray-300 p-1 rounded"
                        />
                        <button
                          className="text-red-600"
                          onClick={() => handleDeleteItem("skills", index)}
                        >
                          ✕
                        </button>
                      </>
                    ) : (
                      <span className="bg-gray-200 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    )}
                  </div>
                ))}
              </div>
              {isEditing && (
                <button
                  className="mt-2 text-blue-600"
                  onClick={() => handleAddItem("skills", "")}
                >
                  + Add Skill
                </button>
              )}
            </div>

            {/* EXPERIENCE */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Experience</h3>
              {localData.experience.map((exp, index) => (
                <div key={index} className="mb-4">
                  {isEditing ? (
                    <>
                      <input
                        value={exp.company}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            index,
                            "company",
                            e.target.value
                          )
                        }
                        className="block w-full mb-1 border border-gray-300 p-2 rounded"
                      />
                      <input
                        value={exp.role}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            index,
                            "role",
                            e.target.value
                          )
                        }
                        className="block w-full mb-1 border border-gray-300 p-2 rounded"
                      />
                      <textarea
                        value={exp.description}
                        onChange={(e) =>
                          handleArrayChange(
                            "experience",
                            index,
                            "description",
                            e.target.value
                          )
                        }
                        className="block w-full mb-1 border border-gray-300 p-2 rounded"
                      />
                      <button
                        className="text-red-600"
                        onClick={() => handleDeleteItem("experience", index)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <div>
                      <h4 className="font-semibold">
                        {exp.role} at {exp.company}
                      </h4>
                      <p className="text-sm text-gray-700">{exp.description}</p>
                    </div>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  className="text-blue-600"
                  onClick={() =>
                    handleAddItem("experience", {
                      company: "",
                      role: "",
                      description: "",
                    })
                  }
                >
                  + Add Experience
                </button>
              )}
            </div>

            {/* EDUCATION */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Education</h3>
              {localData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  {isEditing ? (
                    <>
                      <input
                        value={edu.institution}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            index,
                            "institution",
                            e.target.value
                          )
                        }
                        className="block w-full mb-1 border border-gray-300 p-2 rounded"
                      />
                      <input
                        value={edu.degree}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            index,
                            "degree",
                            e.target.value
                          )
                        }
                        className="block w-full mb-1 border border-gray-300 p-2 rounded"
                      />
                      <input
                        value={edu.year}
                        onChange={(e) =>
                          handleArrayChange(
                            "education",
                            index,
                            "year",
                            e.target.value
                          )
                        }
                        className="block w-full mb-1 border border-gray-300 p-2 rounded"
                      />
                      <button
                        className="text-red-600"
                        onClick={() => handleDeleteItem("education", index)}
                      >
                        Delete
                      </button>
                    </>
                  ) : (
                    <div>
                      <h4 className="font-semibold">
                        {edu.degree} - {edu.institution}
                      </h4>
                      <p className="text-sm text-gray-700">{edu.year}</p>
                    </div>
                  )}
                </div>
              ))}
              {isEditing && (
                <button
                  className="text-blue-600"
                  onClick={() =>
                    handleAddItem("education", {
                      institution: "",
                      degree: "",
                      year: "",
                    })
                  }
                >
                  + Add Education
                </button>
              )}
            </div>

            <button
              className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              onClick={isEditing ? handleSave : () => setIsEditing(true)}
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
