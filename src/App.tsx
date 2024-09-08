import "./App.scss";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Employment from "./components/employement/Employement";
import Skills from "./components/skills/Skills";
import { ColorProvider } from "./ColorContext";
// import NavBar from "./components/navbar/NavBar";
// import SkillConstellation from "./components/skills/SkillConstellation";
// import SkillTree from "./components/skills/SkillTree";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OldWebsite from "./components/oldWebsite/OldWebsite";
function App() {
  return (
    <ColorProvider>
      <Router>
        <div className="app-container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <NavBar /> */}
                  <About />
                  <Employment />
                  <Projects />
                  <Skills />
                  <Contact />
                </>
              }
            />
            <Route path="/old-website" element={<OldWebsite />} />
          </Routes>
        </div>
      </Router>
    </ColorProvider>
  );
}

export default App;