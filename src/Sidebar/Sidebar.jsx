"use client";

import React, { useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaRobot,
  FaFilePdf,
  FaShareAlt,
  FaChevronDown,
  FaChevronUp,
  FaUserCircle,
} from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [showEnhanceDropdown, setShowEnhanceDropdown] = useState(false);

  return (
    <div className="fixed top-[10vh] left-0 h-full z-50 flex">
      {/* Sidebar Container */}
      <div
        className={`transition-all duration-300 ease-in-out shadow-lg overflow-hidden bg-white  text-gray-900
        ${isOpen ? "w-[240px] md:w-[280px]" : "w-[48px] md:w-[15px]"}`}
      >
        {/* Profile */}
        {isOpen && (
          <div className="flex items-center gap-2 p-4 border-b border-[#181A1B]">
            <FaUserCircle className="text-3xl" />
            <span className="text-lg font-semibold">My Profile</span>
          </div>
        )}

        {/* Options */}
        {isOpen && (
          <div className="p-3 flex-col items-start justify-start md:p-4 space-y-4">
            {/* Enhance with AI */}
            <div className="border-white px-3 md:px-4 py-2  rounded-2xl border-2">
              <button
                className="flex items-center justify-between w-full text-sm md:text-base"
                onClick={() => setShowEnhanceDropdown(!showEnhanceDropdown)}
              >
                <span className="flex items-center gap-2">
                  <FaRobot /> Enhance with AI
                </span>
                {showEnhanceDropdown ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {showEnhanceDropdown && (
                <div className="ml-2 mt-2 space-y-1 text-xs md:text-sm">
                  <button className="block w-full text-left cursor-pointer">
                    ⚪ Rewrite Summary
                  </button>
                  <button className="block w-full text-left cursor-pointer">
                    ⚪ Suggest Skills
                  </button>
                  <button className="block w-full text-left cursor-pointer">
                    ⚪ Improve Experience
                  </button>
                  <button className="block w-full text-left cursor-pointer">
                    ⚪ Add Keywords
                  </button>
                  <button className="block w-full text-left cursor-pointer">
                    ⚪ AI Cover Letter
                  </button>
                </div>
              )}
            </div>

            {/* Download PDF */}
            <div className="border-white px-3 md:px-4 py-2   rounded-2xl border-2">
              <button className="flex items-center  gap-2 w-full text-sm md:text-base cursor-pointer">
                <FaFilePdf /> Download PDF
              </button>
            </div>

            {/* Share PDF */}
            <div className="border-white px-3 md:px-4 py-2 rounded-2xl border-2">
              <button className="flex items-center  gap-2 w-full text-sm md:text-base cursor-pointer">
                <FaShareAlt /> Share PDF
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Toggle Button */}
      <div
        className="bg-transparent text-black p-2 rounded-r shadow-md cursor-pointer"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaArrowLeft /> : <FaArrowRight />}
      </div>
    </div>
  );
};

export default Sidebar;
