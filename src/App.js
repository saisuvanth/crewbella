import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  const [user, setUser] = useState(null);

  return (
    <Routes>
      <Route path="/" element={<Home user={user} />} />
      <Route path="/login" element={<Login set={setUser} />} />
    </Routes>
  );
}

export default App;
