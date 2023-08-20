import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
} from "cdbreact";
import { Link, useLocation } from "react-router-dom";
import { FcHome, FcViewDetails } from "react-icons/fc"; // FcCategory replaced with FcViewDetails
import { useEffect } from "react";

function Sidebar() {
  const location = useLocation();

  const navItems = [
    {
      tab: "Home",
      url: "/",
      icon: <FcHome />,
    },
    {
      tab: "Category",
      url: "/categories",
      icon: <FcViewDetails />, // Use FcViewDetails instead of FcCategory
    },
  ];

  useEffect(() => {
    console.log(location.pathname);
  }, [location]);
  return (
    <CDBSidebar style={{ height: "100vh" }}>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Admin Name <hr />
        <button className="btn btn-outline-light">Logout</button>
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <ul className="nav flex-column">
            {navItems.map((val, key) => (
              <li
                key={key}
                className={`nav-item ${
                  location.pathname == val.url
                    ? "bg-secondary rounded m-2"
                    : null
                }`}
              >
                <Link
                  className="nav-link d-flex align-items-center gap-3"
                  to={val.url}
                >
                  <span>{val.icon}</span>
                  <span>{val.tab}</span>
                </Link>
              </li>
            ))}
          </ul>
        </CDBSidebarMenu>
      </CDBSidebarContent>
    </CDBSidebar>
  );
}

export default Sidebar;
