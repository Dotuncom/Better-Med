import { FaHome } from "react-icons/fa"
import { Link, useLocation } from "react-router-dom"

const BreadCrumb = () => {
    const location = useLocation()
    const pathnames = location.pathname.split('/').filter(x=>x)

  return (
    <div className="flex items-center justify-center gap-2">
        <FaHome/>
        {pathnames.map((pathname,index)=>{
            const routeTo = `/${pathnames.slice(0,index +1).join('/')}`
            return(
                <Link to={routeTo}>
                            {pathname.charAt(0).toLocaleUpperCase() + pathname.slice(1)}
                </Link>
            )

        })}
    </div>
  )
}

export default BreadCrumb