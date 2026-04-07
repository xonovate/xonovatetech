import { BrowserRouter, Routes, Route } from "react-router-dom";

import SiteLayout from "./components/SiteLayout";
import ComingSoonPage from "./pages/ComingSoonPage";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import SolutionsPage from "./pages/solutions/SolutionsPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import ContactPage from "./pages/contact/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <SiteLayout>
        <Routes>
          <Route path="/" element={<ComingSoonPage />} />
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}

export default App;
