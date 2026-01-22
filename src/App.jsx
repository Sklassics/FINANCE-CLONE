import React from "react";
import { Routes, Route } from 'react-router-dom';
import './index.css';
import Home from "./pages/Home";
import Hire from "./pages/Hire"
import Apply from "./pages/Apply";
import Cases from "./pages/Cases";
import ContactUs from "./pages/ContactUs";
import News from "./pages/News";
import WorkForUs from "./pages/WorkForUs";
import About from "./pages/About";


function App() {
  return (
   <>
   
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hire" element={<Hire  />} />
      <Route path="/apply" element={<Apply  />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/news" element={<News />} />
      <Route path="/work-for-us" element={<WorkForUs />} />
      <Route path="/about" element={<About />} />

      
      
    </Routes>
   </>
  );
}
export default App;