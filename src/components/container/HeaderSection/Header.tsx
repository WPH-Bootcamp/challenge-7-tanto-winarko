import { useState } from "react";
import Button from "../../ui/Button";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Service" },
  { href: "#projects", label: "Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

const xImgSrcLight: string = "./assets/images/x-close_lightmode.svg";
const xImgSrcDark: string = "./assets/images/x-close_darkmode.svg";
const menuImgSrcLight: string = "./assets/images/menu-01-lightmode.svg";
const menuImgSrcDark: string = "./assets/images/menu-01-darkmode.svg";
const logoLight: string = "./assets/images/Logo-lightmode.svg";
const logoDark: string = "./assets/images/Logo-darkmode.svg";

//const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  //console.log(isDarkMode);
  return (
    <header className="backdrop-blur-2xl bg-white/50 dark:bg-black/50 shadow-md sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4 px-4 lg:pl-[140px]">
        {/* Logo */}
        <div className="flex justify-between">
          <img
            className="w-35.25 min-w-35.25 relative visible dark:invisible"
            src={logoLight}
            alt="Logo"
          />
          <img
            className="w-35.25 min-w-35.25 absolute invisible dark:visible"
            src={logoDark}
            alt="Logo"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-4 lg:space-x-11 md:text-sm md:font-semibold">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Let's Talk Button */}
        <div className="hidden md:flex items-center space-x-2">
          <Button name="letstalk" label="Let's Talk"></Button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <div>
                <img
                  src={xImgSrcLight}
                  className="relative items-center text-center visible dark:invisible cursor-pointer"
                />
                <img
                  src={xImgSrcDark}
                  className="relative top-0 items-center text-center invisible dark:visible cursor-pointer"
                />
              </div>
            ) : (
              <div>
                <img
                  src={menuImgSrcLight}
                  className="relative items-center text-center visible dark:invisible cursor-pointer"
                />
                <img
                  src={menuImgSrcDark}
                  className="relative top-0 items-center text-center invisible dark:visible cursor-pointer"
                />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          className="md:hidden bg-white dark:bg-black border-t border-gray-200 shadow-md px-4 py-4 
        space-y-3  font-medium"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-sm font-semibold text-[#0a0d12] dark:text-[#fdfdfd] hover:text-[#ff623e] transition"
              onClick={() => setIsMenuOpen(false)} // Close menu on link click
            >
              {link.label}
            </a>
          ))}
          <div>
            <Button name="letstalk" label="Let's Talk" width="full"></Button>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
