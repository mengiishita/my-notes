import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NewNote from "./components/notes/NewNote";

function App() {
  return (
    <div className="m-6">
      <Routes>
        <Route path="/" element={<h1>HI</h1>} />
        <Route path="/new" element={<NewNote />} />
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
