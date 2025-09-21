import React from "react";
import ResumeUpload from "./components/ResumeUpload";
import JobPost from "./components/JobPost";
import JobList from "./components/JobList";
import MatchList from "./components/MatchList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Internship Portal</h1>

      {/* Container with grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <ResumeUpload />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <JobPost />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <JobList />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <MatchList />
        </div>
      </div>
    </div>
  );
}

export default App;
