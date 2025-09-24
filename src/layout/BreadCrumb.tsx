import { FaAngleDoubleRight, FaHome } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  if (location.pathname === "/faqs") {
    return `Freqeuntly asked question`;
  }
  return (
    <div className="flex items-center text-[18px] justify-center gap-2">
      <Link to={'/'}>
            <FaHome />

      </Link>
      {pathnames.map((pathname, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const displayNames =
         pathname.charAt(0).toUpperCase() + pathname.slice(1);
        const isLast = index === pathnames.length - 1;
        
        return (
          <>
          <FaAngleDoubleRight />
            {isLast ? (
              <span key={routeTo} >{displayNames}</span>
            ) : (
              <Link to={routeTo}>{displayNames}</Link>
            )}
          </>
        );
      })}
    </div>
  );
};

export default BreadCrumb;
