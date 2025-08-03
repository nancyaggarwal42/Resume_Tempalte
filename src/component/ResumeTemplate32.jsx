import React, { useState, useRef, useEffect } from "react";
import { FaCog, FaPlus, FaTrash, FaDownload, FaSave } from "react-icons/fa";
import Temp11Sidebar from "./Temp32Sidebar";
import "./Temp32.css";
import "./Temp32Sidebar.css";

const Temp11 = () => {
  const [resume, setResume] = useState({
    name: "JOHN DOE",
    title: "SOFTWARE ENGINEER",
    contact: {
      phone: "(123) 456-7890",
      email: "john.doe@example.com",
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
      location: "San Francisco, CA",
    },
    summary:
      "Results-driven software engineer with 5+ years of experience in full-stack development. Specialized in JavaScript frameworks and cloud technologies. Passionate about creating efficient, scalable solutions that drive business growth.",
    experience: [
      {
        position: "Senior Software Engineer",
        company: "Tech Solutions Inc.",
        duration: "2019 - Present",
        location: "San Francisco, CA",
        responsibilities: [
          "Led a team of 5 developers to deliver a SaaS product with 50,000+ active users",
          "Reduced API response time by 40% through optimization techniques",
          "Implemented CI/CD pipeline reducing deployment time by 60%",
        ],
      },
      {
        position: "Software Developer",
        company: "Digital Innovations LLC",
        duration: "2016 - 2019",
        location: "Austin, TX",
        responsibilities: [
          "Developed responsive web applications using React and Node.js",
          "Collaborated with UX team to improve customer satisfaction by 35%",
          "Mentored junior developers in best practices and code reviews",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Computer Science",
        institution: "Stanford University",
        duration: "2014 - 2016",
        gpa: "3.8/4.0",
      },
      {
        degree: "Bachelor of Science in Computer Engineering",
        institution: "University of Texas",
        duration: "2010 - 2014",
        gpa: "3.6/4.0",
      },
    ],
    skills: [
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "AWS", level: "Advanced" },
    ],
    certifications: [
      "AWS Certified Solutions Architect - Associate",
      "Google Cloud Professional Developer",
      "Scrum Master Certification",
    ],
    projects: [
      {
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution with payment integration",
        technologies: "React, Node.js, MongoDB, Stripe API",
      },
    ],
  });

  const [designOptions, setDesignOptions] = useState({
    color: "#1976d2", // Default to a professional green
    font: "'Roboto', sans-serif", // ATS-friendly font
  });

  const [activeSection, setActiveSection] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const [visibleFields, setVisibleFields] = useState({
    name: true,
    title: true,
    contact: true,
    summary: true,
    experience: true,
    education: true,
    skills: true,
    certifications: true,
    projects: true,
  });
  const settingsRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--primary-color",
      designOptions.color
    );
    document.documentElement.style.setProperty(
      "--primary-color-light",
      `${designOptions.color}80`
    );
    document.documentElement.style.setProperty(
      "--font-family",
      designOptions.font
    );
  }, [designOptions]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (settingsRef.current && !settingsRef.current.contains(event.target)) {
        setShowSettings(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handler functions
  const handleColorChange = (color) => {
    setDesignOptions((prev) => ({ ...prev, color }));
  };

  const handleFontChange = (font) => {
    setDesignOptions((prev) => ({ ...prev, font }));
  };

  const handleFieldChange = (field, value) => {
    setResume((prev) => ({ ...prev, [field]: value }));
  };

  const handleContactChange = (field, value) => {
    setResume((prev) => ({
      ...prev,
      contact: { ...prev.contact, [field]: value },
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resume.experience];
    updatedExperience[index][field] = value;
    setResume((prev) => ({ ...prev, experience: updatedExperience }));
  };

  const handleResponsibilityChange = (expIndex, respIndex, value) => {
    const updatedExperience = [...resume.experience];
    updatedExperience[expIndex].responsibilities[respIndex] = value;
    setResume((prev) => ({ ...prev, experience: updatedExperience }));
  };

  const addExperience = () => {
    setResume((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        {
          position: "New Position",
          company: "Company Name",
          duration: "YYYY - YYYY",
          location: "City, State",
          responsibilities: ["Responsibility description"],
        },
      ],
    }));
  };

  const removeExperience = (index) => {
    setResume((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const addSkill = () => {
    setResume((prev) => ({
      ...prev,
      skills: [...prev.skills, { name: "New Skill", level: "Basic" }],
    }));
  };

  const removeSkill = (index) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index),
    }));
  };

  const handleSkillChange = (index, field, value) => {
    setResume((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) =>
        i === index ? { ...skill, [field]: value } : skill
      ),
    }));
  };

  const addEducation = () => {
    setResume((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        {
          degree: "New Degree",
          institution: "Institution Name",
          duration: "YYYY - YYYY",
          gpa: "GPA",
        },
      ],
    }));
  };

  const removeEducation = (index) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setResume((prev) => ({
      ...prev,
      education: prev.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      ),
    }));
  };

  const addCertification = () => {
    setResume((prev) => ({
      ...prev,
      certifications: [...prev.certifications, "New Certification"],
    }));
  };

  const removeCertification = (index) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.filter((_, i) => i !== index),
    }));
  };

  const handleCertificationChange = (index, value) => {
    setResume((prev) => ({
      ...prev,
      certifications: prev.certifications.map((cert, i) =>
        i === index ? value : cert
      ),
    }));
  };

  const addProject = () => {
    setResume((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "New Project",
          description: "Project description",
          technologies: "Technologies used",
        },
      ],
    }));
  };

  const removeProject = (index) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }));
  };

  const handleProjectChange = (index, field, value) => {
    setResume((prev) => ({
      ...prev,
      projects: prev.projects.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      ),
    }));
  };

  return (
    <div className="temp11-container">
      <Temp11Sidebar
        onDownload={() => console.log("Download PDF")}
        onSave={() => console.log("Save Resume")}
        onColorChange={handleColorChange}
        onFontChange={handleFontChange}
        currentColor={designOptions.color}
        currentFont={designOptions.font}
      />

      <div className="temp11-resume">
        {/* Header Section */}
        <header
          className="temp11-header"
          onClick={() => setActiveSection("header")}
        >
          {activeSection === "header" && (
            <FaCog
              className="temp11-settings-icon"
              onClick={(e) => {
                e.stopPropagation();
                setShowSettings(!showSettings);
              }}
            />
          )}

          {showSettings && activeSection === "header" && (
            <div ref={settingsRef} className="temp11-settings-panel">
              {Object.keys(visibleFields).map((field) => (
                <div key={field} className="temp11-setting-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={visibleFields[field]}
                      onChange={() =>
                        setVisibleFields((prev) => ({
                          ...prev,
                          [field]: !prev[field],
                        }))
                      }
                    />
                    Show {field}
                  </label>
                </div>
              ))}
            </div>
          )}

          {visibleFields.name && (
            <h1
              className="temp11-name"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleFieldChange("name", e.target.textContent)}
            >
              {resume.name}
            </h1>
          )}

          {visibleFields.title && (
            <h2
              className="temp11-title"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleFieldChange("title", e.target.textContent)}
            >
              {resume.title}
            </h2>
          )}

          {visibleFields.contact && (
            <div className="temp11-contact-info">
              {Object.entries(resume.contact).map(([key, value]) => (
                <div
                  key={key}
                  className="temp11-contact-item"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) => handleContactChange(key, e.target.textContent)}
                >
                  {value}
                </div>
              ))}
            </div>
          )}
        </header>

        <hr className="temp11-divider" />

        {/* Summary Section */}
        {visibleFields.summary && (
          <section
            className="temp11-section"
            onClick={() => setActiveSection("summary")}
          >
            <h3 className="temp11-section-title">SUMMARY</h3>
            <p
              className="temp11-summary-text"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => handleFieldChange("summary", e.target.textContent)}
            >
              {resume.summary}
            </p>
          </section>
        )}

        {/* Professional Experience Section */}
        {visibleFields.experience && (
          <section
            className="temp11-section"
            onClick={() => setActiveSection("experience")}
          >
            <h3 className="temp11-section-title">EXPERIENCE</h3>
            {resume.experience.map((exp, expIndex) => (
              <div key={expIndex} className="temp11-experience-item">
                <div className="temp11-experience-header">
                  <div>
                    <span
                      className="temp11-position"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleExperienceChange(
                          expIndex,
                          "position",
                          e.target.textContent
                        )
                      }
                    >
                      {exp.position}
                    </span>
                    {exp.company && (
                      <span
                        className="temp11-company"
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleExperienceChange(
                            expIndex,
                            "company",
                            e.target.textContent
                          )
                        }
                      >
                        , {exp.company}
                      </span>
                    )}
                  </div>
                  <div className="temp11-experience-meta">
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleExperienceChange(
                          expIndex,
                          "duration",
                          e.target.textContent
                        )
                      }
                    >
                      {exp.duration}
                    </span>
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleExperienceChange(
                          expIndex,
                          "location",
                          e.target.textContent
                        )
                      }
                    >
                      {exp.location}
                    </span>
                  </div>
                </div>
                <ul className="temp11-responsibilities">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex}>
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleResponsibilityChange(
                            expIndex,
                            respIndex,
                            e.target.textContent
                          )
                        }
                      >
                        {resp}
                      </span>
                      {activeSection === "experience" && (
                        <button
                          className="temp11-remove-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeExperience(expIndex);
                          }}
                        >
                          <FaTrash />
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
                {activeSection === "experience" && (
                  <div className="temp11-actions">
                    <button
                      className="temp11-add-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        addExperience();
                      }}
                    >
                      <FaPlus /> Add Experience
                    </button>
                  </div>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education Section */}
        {visibleFields.education && (
          <section
            className="temp11-section"
            onClick={() => setActiveSection("education")}
          >
            <h3 className="temp11-section-title">EDUCATION</h3>
            {resume.education.map((edu, eduIndex) => (
              <div key={eduIndex} className="temp11-education-item">
                <div className="temp11-education-header">
                  <div>
                    <span
                      className="temp11-degree"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleEducationChange(
                          eduIndex,
                          "degree",
                          e.target.textContent
                        )
                      }
                    >
                      {edu.degree}
                    </span>
                    <span
                      className="temp11-institution"
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleEducationChange(
                          eduIndex,
                          "institution",
                          e.target.textContent
                        )
                      }
                    >
                      , {edu.institution}
                    </span>
                  </div>
                  <div className="temp11-education-meta">
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleEducationChange(
                          eduIndex,
                          "duration",
                          e.target.textContent
                        )
                      }
                    >
                      {edu.duration}
                    </span>
                    {edu.gpa && (
                      <span
                        contentEditable
                        suppressContentEditableWarning
                        onBlur={(e) =>
                          handleEducationChange(
                            eduIndex,
                            "gpa",
                            e.target.textContent
                          )
                        }
                      >
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>
                </div>
                {activeSection === "education" && (
                  <div className="temp11-actions">
                    <button
                      className="temp11-remove-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeEducation(eduIndex);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                )}
              </div>
            ))}
            {activeSection === "education" && (
              <div className="temp11-actions">
                <button
                  className="temp11-add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    addEducation();
                  }}
                >
                  <FaPlus /> Add Education
                </button>
              </div>
            )}
          </section>
        )}

        {/* Skills Section */}
        {visibleFields.skills && (
          <section
            className="temp11-section"
            onClick={() => setActiveSection("skills")}
          >
            <h3 className="temp11-section-title">SKILLS</h3>
            <div className="temp11-skills-container">
              {resume.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="temp11-skill-item">
                  <div className="temp11-skill-name">
                    <span
                      contentEditable
                      suppressContentEditableWarning
                      onBlur={(e) =>
                        handleSkillChange(
                          skillIndex,
                          "name",
                          e.target.textContent
                        )
                      }
                    >
                      {skill.name}
                    </span>
                  </div>
                  <div className="temp11-skill-level">
                    <select
                      value={skill.level}
                      onChange={(e) =>
                        handleSkillChange(skillIndex, "level", e.target.value)
                      }
                    >
                      <option value="Basic">Basic</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                      <option value="Expert">Expert</option>
                    </select>
                  </div>
                  {activeSection === "skills" && (
                    <button
                      className="temp11-remove-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeSkill(skillIndex);
                      }}
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
            </div>
            {activeSection === "skills" && (
              <div className="temp11-actions">
                <button
                  className="temp11-add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    addSkill();
                  }}
                >
                  <FaPlus /> Add Skill
                </button>
              </div>
            )}
          </section>
        )}

        {/* Certifications Section */}
        {visibleFields.certifications && (
          <section
            className="temp11-section"
            onClick={() => setActiveSection("certifications")}
          >
            <h3 className="temp11-section-title">CERTIFICATIONS</h3>
            <ul className="temp11-certifications">
              {resume.certifications.map((cert, certIndex) => (
                <li key={certIndex}>
                  <span
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={(e) =>
                      handleCertificationChange(certIndex, e.target.textContent)
                    }
                  >
                    {cert}
                  </span>
                  {activeSection === "certifications" && (
                    <button
                      className="temp11-remove-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeCertification(certIndex);
                      }}
                    >
                      <FaTrash />
                    </button>
                  )}
                </li>
              ))}
            </ul>
            {activeSection === "certifications" && (
              <div className="temp11-actions">
                <button
                  className="temp11-add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    addCertification();
                  }}
                >
                  <FaPlus /> Add Certification
                </button>
              </div>
            )}
          </section>
        )}

        {/* Projects Section */}
        {visibleFields.projects && (
          <section
            className="temp11-section"
            onClick={() => setActiveSection("projects")}
          >
            <h3 className="temp11-section-title">PROJECTS</h3>
            {resume.projects.map((project, projIndex) => (
              <div key={projIndex} className="temp11-project-item">
                <h4
                  className="temp11-project-name"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleProjectChange(projIndex, "name", e.target.textContent)
                  }
                >
                  {project.name}
                </h4>
                <p
                  className="temp11-project-description"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleProjectChange(
                      projIndex,
                      "description",
                      e.target.textContent
                    )
                  }
                >
                  {project.description}
                </p>
                <p
                  className="temp11-project-tech"
                  contentEditable
                  suppressContentEditableWarning
                  onBlur={(e) =>
                    handleProjectChange(
                      projIndex,
                      "technologies",
                      e.target.textContent
                    )
                  }
                >
                  <strong>Technologies:</strong> {project.technologies}
                </p>
                {activeSection === "projects" && (
                  <div className="temp11-actions">
                    <button
                      className="temp11-remove-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeProject(projIndex);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                )}
              </div>
            ))}
            {activeSection === "projects" && (
              <div className="temp11-actions">
                <button
                  className="temp11-add-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    addProject();
                  }}
                >
                  <FaPlus /> Add Project
                </button>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  );
};

export default Temp11;
