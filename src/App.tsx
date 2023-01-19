import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PortfolioDetail from "./pages/PortfolioDetail";
import Layout from "./pages/Layout";
import { useEffect } from "react";

function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-detail" element={<BlogDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
