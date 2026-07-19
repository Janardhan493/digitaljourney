import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}

        <a href="#home" className="group">
          <h1 className="text-3xl font-extrabold">
            <span className="text-blue-500 group-hover:text-cyan-400 transition">
              Digital
            </span>
            Journey
          </h1>

          <p className="text-xs text-gray-400">
            From Local to Global
          </p>
        </a>

        {/* Desktop Menu */}

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition font-medium ${
                active === link.href
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-blue-400"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA */}

        <a
          href="#contact"
          className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-105 transition-all duration-300 px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/30"
        >
          Start Project
        </a>

        {/* Mobile Menu Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {isOpen && (
        <div className="md:hidden bg-[#050816]/95 backdrop-blur-xl border-t border-white/10">
          <nav className="flex flex-col p-6 gap-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMenu}
                className={`transition ${
                  active === link.href
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={closeMenu}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl py-3 text-center font-semibold mt-2"
            >
              Start Project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}