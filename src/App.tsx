import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Layout from "./pages/Layout";
import { AnimatePresence } from "framer-motion";
import PortfolioDetail from "./pages/PortfolioDetail";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route
                        path="/portfolio-detail"
                        element={<PortfolioDetail />}
                    />
                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog-detail" element={<BlogDetail />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
