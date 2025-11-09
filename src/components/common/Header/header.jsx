import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 w-full h-[90px] z-[100] flex justify-between items-center px-[10%] backdrop-blur-sm bg-transparent"
    >
      {/* Logo */}
      <div className="flex items-center h-full">
        <img
          src="/legacylogo.svg"
          alt="Construct Edge Logo"
          className="max-h-[150px] w-auto object-contain cursor-pointer"
        />
      </div>

      {/* Desktop Navigation */}
      <nav
        className={`hidden md:flex items-center gap-6 text-[1.1rem] transition-all duration-300`}
      >
        {["Home", "Team", "Season 1", "Partners", "News & Media"].map(
          (item, i) => (
            <span
              key={i}
              className="text-black hover:text-yellow-400 cursor-pointer transition-all duration-300 drop-shadow-md"
            >
              {item}
            </span>
          )
        )}
      </nav>

      {/* Hamburger for Mobile */}
      <div
        className={`md:hidden flex flex-col-reverse justify-center items-center gap-[5px] h-[30px] w-[30px] cursor-pointer transition-transform duration-300 z-[110] ${
          menuOpen ? "rotate-90" : ""
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span
          className={`w-[25px] h-[3px] rounded bg-white transition-all duration-400 ${
            menuOpen ? "rotate-45 translate-y-[8px]" : ""
          }`}
        ></span>
        <span
          className={`w-[25px] h-[3px] rounded bg-white transition-all duration-400 ${
            menuOpen ? "opacity-0 -translate-x-5" : ""
          }`}
        ></span>
        <span
          className={`w-[25px] h-[3px] rounded bg-white transition-all duration-400 ${
            menuOpen ? "-rotate-45 -translate-y-[8px]" : ""
          }`}
        ></span>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] right-0 w-full flex flex-col items-center gap-4 bg-black/70 backdrop-blur-md py-5 transform transition-all duration-300 ${
          menuOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "-translate-y-5 opacity-0 pointer-events-none"
        } md:hidden`}
      >
        {["Home", "Team", "Season 1", "Partners", "News & Media"].map(
          (item, i) => (
            <span
              key={i}
              className="text-white text-[1.1rem] cursor-pointer hover:text-yellow-400 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </span>
          )
        )}
      </div>
    </header>
  );
};

export default Header;
