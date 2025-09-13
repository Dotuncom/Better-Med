
import { useState } from "react";
import { mainNav, socialLinks } from "./Navigationdata";
import { FaShoppingCart, FaSearch, FaChevronDown, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SubheaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

interface NavItem {
  name: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  dropdown?: { name: string; href: string }[];
}

const Subheader = ({ isMobileMenuOpen, toggleMobileMenu }: SubheaderProps) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden lg:block  absolute top-full -translate-y-10 left-0 right-0 h-20 w-full px-4 z-50">
        <div className="container mx-auto">
          <div className="relative w-full flex items-center rounded-2xl justify-between gap-4 bg-primary h-full px-4">
            <div className="w-full flex items-center gap-6">
              {mainNav.map((navItem: NavItem) => (
                <div
                  key={navItem.name}
                  className="relative group flex text-white items-center group"
                >
                  {navItem.icon && <navItem.icon className="mr-1" />}
                  <Link 
                    to={navItem.href} 
                    className="flex items-center hover:text-blue-200 transition-colors"
                  >
                    {navItem.name}
                  </Link>
                  {navItem.dropdown && <FaChevronDown className="ml-1" />}
                  {navItem.dropdown && (
                    <div className="hidden group-hover:block transition delay-750 duration-500 ease-in-out absolute top-full  w-48 bg-white/95 py-2 rounded shadow-lg z-10">
                      {navItem.dropdown.map((item, index) => (
                        <Link
                          className="block px-4 py-2 text-gray-800 hover:bg-blue-500  hover:text-white transition-colors"
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
                    className="text-white hover:bg-blue-700 p-2 rounded transition-all hover:rotate-y-360 duration-00 ease-in-out"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-4 w-4" />
                  </a>
                ) : null;
              })}
              <div className="border-l h-full border-r p-4 border-gray-100/50">
                <div className="relative">
                  <button className="text-white hover:bg-blue-700 p-2 rounded transition-colors">
                    <FaShoppingCart className="h-5 w-5" />
                  </button>
                  <span className="absolute -top-1 right-0 bg-white text-accent text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>
              <button className="text-white hover:bg-blue-700 p-2 rounded transition-colors">
                <FaSearch className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      >
        <div
          className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-accent/95 text-white text-2xl z-60 transform transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={toggleMobileMenu}
            className="absolute top-4 right-4 p-2 text-white"
          >
            <FaTimes className="h-6 w-6" />
          </button>

          <div className="p-6 pt-16 flex flex-col gap-6 h-full overflow-y-auto">
            {mainNav.map((navItem: NavItem) =>
              navItem.dropdown ? (
                <div
                  key={navItem.name}
                  className="space-y-2 text-white items-center group"
                >
                  <button
                    onClick={() => toggleDropdown(navItem.name)}
                    className="w-full flex items-center justify-between py-3 border-b border-gray-400 gap-2 text-white hover:bg-white/10 rounded transition-colors"
                    aria-expanded={openDropdown === navItem.name}
                  >
                    <div className="flex items-center gap-2">
                      {navItem.icon && <navItem.icon />}
                      <span className="text-xl">{navItem.name}</span>
                    </div>
                    {navItem.dropdown && (
                      <FaChevronDown
                        className={`ml-1 transition-transform duration-300 ${
                          openDropdown === navItem.name ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </button>

                  {openDropdown === navItem.name && (
                    <div className="transition delay-5 duration-500 ease-in-out bg-primary/50 py-2 rounded-lg z-10">
                      {navItem.dropdown.map((item, index) => (
                        <Link
                          onClick={toggleMobileMenu}
                          className="block px-4 py-3 text-white border-b border-accent/10 hover:bg-white/20 transition-colors"
                          key={index}
                          to={item.href}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={navItem.name} className="border-b border-gray-400/50 last:border-0">
                  <Link
                    onClick={toggleMobileMenu}
                    to={navItem.href}
                    className="flex items-center gap-2 py-3 text-xl"
                  >
                    {navItem.icon && <navItem.icon />}
                    {navItem.name}
                  </Link>
                </div>
              )
            )}

            <div className="flex justify-center gap-6 mt-auto pt-8 border-t border-white/20">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return IconComponent ? (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-white p-3 bg-white/10 transform hover:rotate-x-360 duration-00 rounded-full hover:bg-white/20 transition-colors"
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
    </>
  );
};

export default Subheader;