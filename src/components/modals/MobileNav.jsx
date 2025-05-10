import { XIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const ListItem = ({ menuOpen, setMenuOpen, text, link }) => {
  const location = useLocation();
  const isActive = location.pathname === link;

  return (
    <Link
      to={link}
      className={`text-2xl font-semibold my-4 transform transition-all duration-300 ${
        isActive ? "text-primary" : "text-white hover:text-accent"
      } ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
      onClick={() => setMenuOpen(false)}
    >
      {text}
    </Link>
  );
};

export const MobileNav = ({ menuOpen, setMenuOpen }) => (
  <>
    <div
      className={`fixed top-0 left-0 w-full min-h-[calc(100vh)] bg-black/50 backdrop-blur-lg z-50 transition-all duration-200 ease-in-out
    ${menuOpen ? "min-h-[calc(100vh)] opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        className="absolute top-6 right-6 text-white cursor-pointer"
        onClick={() => setMenuOpen(false)}
      >
        <XIcon className="w-6 h-6" />
      </button>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh)] space-y-4">
        <ListItem
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          text="Home"
          link="/"
        />
        <ListItem
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          text="About"
          link="/about"
        />
        <ListItem
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          text="Projects"
          link="/projects"
        />
      </div>
    </div>
  </>
);
