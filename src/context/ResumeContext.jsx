"use client";
import React, { createContext, useContext, useState } from "react";

const ResumeContext = createContext();

export const ResumeProvider = ({ children }) => {
  const [resumeData, setResumeData] = useState({
    header: {
      name: "Nancy Aggarwal",
      role: "Frontend Developer",
      email: "nancy@example.com",
      phone: "+91-1234567890",
      linkedin: "linkedin.com/in/nancy",
      location: "Delhi, India",
    },
    summary:
      "A passionate frontend developer with experience in React, Tailwind CSS, and building resume tools.",
    skills: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
    experience: [
      {
        company: "Tech Company A",
        role: "React Developer",
        description: "Built dynamic interfaces using React and Tailwind CSS.",
      },
    ],
    education: [
      {
        institution: "Delhi University",
        degree: "B.Sc Computer Science",
        year: "2023",
      },
    ],
  });

  return (
    <ResumeContext.Provider value={{ resumeData, setResumeData }}>
      {children}
    </ResumeContext.Provider>
  );
};
export default ResumeProvider;

export const useResume = () => useContext(ResumeContext);
