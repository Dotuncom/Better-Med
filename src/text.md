import { useState } from "react";
import { mainNav, socialLinks } from "./Navigationdata";
import { FaShoppingCart, FaSearch, FaChevronDown, FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Subheader = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="relative">
      {/* Desktop navigation (unchanged) */}
      <div className="hidden lg:block absolute top-full translate-y-8 h-20 w-full px-4">
        <div className="relative w-full flex items-center rounded-2xl justify-between gap-4 bg-primary h-full px-4">
          <div className="w-full flex items-center gap-4 ">
            {mainNav.map((navItem) => (
              <div
                key={navItem.name}
                className="relative flex text-white items-center group"
              >
                {navItem.icon && <navItem.icon />}
                <Link to={navItem.href}>{navItem.name}</Link>
                {navItem.dropdown && <FaChevronDown className="ml-1" />}
                {navItem.dropdown && (
                  <div className="hidden group-hover:block  transition delay-350 duration-500 ease-in-out absolute top-0 mt-14 w-48 bg-white/90 py-2 rounded-lg shadow-lg z-10">
                    {navItem.dropdown.map((item, index) => (
                      <Link
                        className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white transition-colors"
                        key={index}
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center h-full space-x-3">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return IconComponent ? (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-white hover:bg-blue-700 p-2 rounded transition-color hover:rotate-y-360 duration-300"
                  aria-label={social.name}
                >
                  <IconComponent className="h-4 w-4" />
                </a>
              ) : null;
            })}
            <div className=" border-l h-full border-r p-4 border-gray-100/50">
              <div className="relative ">
                <button className="text-white hover:bg-primary p-2 rounded transition-colors">
                  <FaShoppingCart className="h-5 w-5" />
                </button>
                <span className="absolute -top-1 right-0 bg-white text-accent text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
            <button className=" text-white hover:bg-blue-700 p-2 rounded transition-colors">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation header */}
      <div className="lg:hidden flex items-center justify-between bg-primary p-4">
        <button
          onClick={toggleMobileMenu}
          className="text-white p-2 rounded-lg"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button className="text-white p-2 rounded transition-colors">
              <FaShoppingCart className="h-5 w-5" />
            </button>
            <span className="absolute -top-1 -right-1 bg-white text-accent text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </div>
          
          <button className="text-white p-2 rounded transition-colors">
            <FaSearch className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      <div className={`lg:hidden bg-accent w-full min-h-screen z-90 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} absolute`}>
        <div className="p-4">
          <div className="w-full flex flex-col gap-6 mt-4">
            {mainNav.map((navItem) => (
              <div key={navItem.name} className="border-b border-white/20 pb-4 last:border-b-0">
                {navItem.dropdown ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => toggleDropdown(navItem.name)}
                      className="w-full flex items-center justify-between text-white p-2 rounded-lg transition-colors"
                      aria-expanded={openDropdown === navItem.name}
                    >
                      <div className="flex items-center gap-2">
                        {navItem.icon && <navItem.icon className="text-lg" />}
                        <span className="font-semibold text-lg">{navItem.name}</span>
                      </div>
                      <FaChevronDown
                        className={`transition-transform duration-300 ${
                          openDropdown === navItem.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {openDropdown === navItem.name && (
                      <div className="mt-2 ml-6 bg-white/10 py-2 rounded-lg">
                        {navItem.dropdown.map((item, index) => (
                          <Link
                            className="block px-4 py-3 text-white hover:bg-white/20 transition-colors"
                            key={index}
                            to={item.href}
                            onClick={closeMobileMenu}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={navItem.href}
                    className="flex items-center gap-2 text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    {navItem.icon && <navItem.icon className="text-lg" />}
                    <span className="font-semibold text-lg">{navItem.name}</span>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Social links in mobile menu */}
            <div className="flex justify-center gap-6 mt-8 pt-6 border-t border-white/20">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return IconComponent ? (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent className="h-5 w-5" />
                  </a>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subheader;