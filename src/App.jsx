import {useState} from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ProvidersList from "./pages/ProvidersList";
import ProviderDetail from "./pages/ProviderDetail";

function App() {
  return (
    <Router>
      <div className=" text-gray-800 font-sans">
        <Routes>
          <Route path="/" element={<ProvidersList />} />
          <Route path="/providers/:id" element={<ProviderDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
