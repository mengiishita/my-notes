import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <div className="m-6 text-3xl font-bold">
      <Routes>
        <Route path="/" element={<h1>HI</h1>} />
        <Route path="/new" element={<h1>New</h1>} />
        <Route path="/:id">
          <Route index element={<h1>Show</h1>} />
          <Route path="edit" element={<h1>Edit</h1>} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
