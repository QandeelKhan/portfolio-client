import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";

function App() {
    return (
        <Router>
            <SideNav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </Router>
    );
}

export default App;
