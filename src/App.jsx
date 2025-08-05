import React from "react";
import ResumeTemplate from ".component/ResumeTemplate";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ResumeTemplate />
      </BrowserRouter>
    </div>
  );
}

export default App;

