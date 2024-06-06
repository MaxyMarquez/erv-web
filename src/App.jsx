import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Navbar from "./components/Navbar";
import Intendencia from "./pages/Intendencia";

import axios from "axios";

// axios.defaults.baseURL = "https://admin.ervzla.com/api";
axios.defaults.baseURL = "http://localhost:8000/api";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intendencia" element={<Intendencia />} />
      </Routes>
    </>
  );
}

export default App;
