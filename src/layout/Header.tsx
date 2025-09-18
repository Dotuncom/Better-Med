import { FaBars, FaHeadset, } from "react-icons/fa";
import Subheader from "./Subheader";
import logo from "../assets/logo-logistic.png";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

const Header = ({ isMobileMenuOpen, toggleMobileMenu }: HeaderProps) => {
  return (
    <div className="z-90 sticky  bg-white shadow-2xl w-full lg:h-40">
      <div className="container mx-auto py-2 lg:py-8 px-4">
        <div className="flex items-center justify-between">
          <div className="w-54 h-14 lg:h-20 lg:w-54">
            <img src={logo} className="w-full h-full" alt="med logo" />
          </div>

          <div className="hidden lg:flex justify-center items-center gap-8">
            <div className="flex items-center gap-x-4 justify-center">
              <FaHeadset className="text-accent/60 " size={40} />
              <div className="flex flex-col ml-2">
                <h1 className="font-bold text-sm">
                  Phone: <span> +234 813 866 2406</span>
                </h1>
                <h1 className="font-bold text-sm">
                  Email: <span> info@example.com</span>
                </h1>
              </div>
            </div>
            <button className="bg-accent/70 h-12 w-60 rounded-2xl py-2 px-4 text-white font-semibold hover:bg-accent transition-colors">
              Make an Appointment
              
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden w-12 h-12 bg-primary text-white rounded flex items-center justify-center"
          >
            <FaBars size={20} />
          </button>
        </div>
      </div>

      <Subheader
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
    </div>
  );
};

export default Header;