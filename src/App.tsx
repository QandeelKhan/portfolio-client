import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function App() {
    return (
        <Router>
            <SideNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
