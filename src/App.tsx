import "./App.css";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import PortfolioCardClick from "./PortfolioCardClick";

function App() {
    return (
        <Router>
            {/* <SideNav /> */}

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-detail" element={<BlogDetail />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <PortfolioCardClick />
        </Router>
    );
}

export default App;
