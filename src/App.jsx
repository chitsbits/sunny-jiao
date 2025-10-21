import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { MobileNav } from "./components/modals/MobileNav";
import { Home } from "./components/Home";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import { ThemeProvider } from "./components/ThemeProvider";
import { About } from "./components/About";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "./components/PageTransition";
import Experience from "./components/Experience";

// AnimatedRoutes component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background overflow-x-hidden">
        <BrowserRouter>
          <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <div className="flex-grow overflow-y-auto">
            <AnimatedRoutes />
          </div>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
};

export default App;
