import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import themeMode from '../contextapi/themeMode';

const Navbar = () => {
  const { theme, darkMode, lightMode } = useContext(themeMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggle = () => {
    if (theme === "light") {
      lightMode();
    } else {
      darkMode();
    }
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    "business", "crime", "domestic", "education",
    "entertainment", "food", "health", "lifestyle", "politics"
  ];

  return (
    <header className="bg-white dark:bg-black shadow-md">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href=""><img src="https://cdn-icons-png.freepik.com/256/668/668618.png?ga=GA1.1.47276942.1743000520&semt=ais_hybrid" className='h-9' alt="" /></a>
          <div className="flex items-center gap-12">
            <NavLink className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <svg className="h-8" viewBox="0 0 28 24" fill="currentColor">
                {/* [icon path omitted for brevity] */}
              </svg>
            </NavLink>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center capitalize gap-6 text-sm">
                {navLinks.map((link) => (
                  <li key={link}>
                    <NavLink
                      to={link}
                      className={({ isActive }) =>
                        `${isActive ? "text-rose-600 underline font-bold" : "text-gray-500"} transition hover:text-rose-600`
                      }
                    >
                      {link}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <label
              htmlFor="AcceptConditions"
              className="relative block h-8 w-14 rounded-full bg-gray-300 transition-colors has-checked:bg-green-500"
            >
              <input type="checkbox" onClick={toggle} id="AcceptConditions" className="peer sr-only" />
              <span className="absolute inset-y-0 start-0 m-1 size-6 rounded-full bg-white transition-all peer-checked:start-6"></span>
            </label>

            <span className='mt-[2px]'>
              {theme === 'light' ? (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="..." />
                </svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24">
                  <path d="..." />
                </svg>
              )}
            </span>

            <NavLink className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm" to="#">
              Login
            </NavLink>

            {/* Mobile Menu Button */}
            <div className="block md:hidden">
              <button onClick={handleMobileMenu} className="p-2 text-gray-600 rounded bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-2">
            <ul className="space-y-2 text-sm capitalize">
              {navLinks.map((link) => (
                <li key={link}>
                  <NavLink
                    to={link}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `${isActive ? "text-rose-600 underline font-bold" : "text-gray-700 dark:text-gray-300"} block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded`
                    }
                  >
                    {link}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
