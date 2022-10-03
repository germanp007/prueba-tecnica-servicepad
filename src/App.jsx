import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Home, About, Contact, Blog, Careers, AddArticles } from "./components";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="careers" element={<Careers />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="addarticles" element={<AddArticles />} />
      </Routes>
    </>
  );
};

export default App;
