import { MenuIcon } from "lucide-react";
import { useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, useLocation } from "react-router-dom";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();

  // Disable body scroll when menu is open
  useEffect(() => {
    const body = document.querySelector("body");
    if (menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const NavButton = ({ text, url }) => {
    const isActive = location.pathname === url;
    return (
      <Link
        to={url}
        className={`px-3 py-2 rounded-md text-center text-sm font-medium transition-colors ${
          isActive
            ? "bg-primary/10 text-primary"
            : "hover:bg-gray-700 hover:text-white"
        }`}
        onClick={() => setMenuOpen(false)}
      >
        {text}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-lg border-b border-border">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold">
            Sunny Jiao
          </Link>
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <NavButton text={"Home"} url={"/"} />
            <NavButton text={"About"} url={"/about"} />
            <NavButton text={"Experience"} url={"/experience"} />
            <NavButton text={"Projects"} url={"/projects"} />
          </div>
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <MenuIcon
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative cursor-pointer z-40 md:hidden text-text hover:text-accent transition-colors"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};
