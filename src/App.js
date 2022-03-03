import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Discography from "./components/Discography/Discography";
import Contact from "./components/Contact/Contact";
import News from "./components/News/News";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/discography" element={<Discography />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;
