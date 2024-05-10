import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Navbar,
  Hero,
  About,
  Experience,
  TechStack,
  Works,
  Feedbacks,
  Contact,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <Router>
      <div className="relative <-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Routes>
          <Route path="/about" exact element={<About />} />
          <Route path="/experience" component={<Experience />} />
          <Route path="/works" component={<Works />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>

        <About />
        <Experience />
        <TechStack />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          {/* 3d星空背景 */}
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
};

export default App;
