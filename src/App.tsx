import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Layout from "./pages/Layout";
import PortfolioDetail from "./pages/PortfolioDetail";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";
import { RootState } from "./redux/store";
import { useSelector } from "react-redux";
import ClientPortal from "./pages/auth/ClientPortal";

function App() {
    const { access_token } = useSelector((state: RootState) => state.auth);

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
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/registration" element={<Registration />} />

                    <Route
                        path="/client-portal"
                        element={
                            access_token ? (
                                <ClientPortal />
                            ) : (
                                <Navigate to="/login" />
                            )
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            !access_token ? <Login /> : <Navigate to="/" />
                        }
                    />

                    <Route
                        path="*"
                        element={<h1>Error 404 Page not found !!</h1>}
                    />

                    {/* <Route path="/login" element={<Login />} /> */}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
