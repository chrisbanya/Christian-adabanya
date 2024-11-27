import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 max-w-screen-xl mx-auto dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
