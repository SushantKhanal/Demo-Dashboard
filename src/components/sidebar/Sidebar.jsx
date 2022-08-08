import "./sidebar.scss";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import { sidebarNavs } from "./navData";

const Sidebar = () => {
  const [currentElement, setCurrentElement] = useState("");

  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="pp">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>
        </div>
        <hr />
        <div className="center">
          <ul>
            {Object.keys(sidebarNavs).map((key) => {
              return (
                <Fragment key={key}>
                  <p className="title">{key.toLocaleUpperCase()}</p>
                  {sidebarNavs[key].map((nav) => (
                    <Link
                      to={nav.destination}
                      style={{ textDecoration: "none" }}
                      key={nav.title}
                    >
                      <li
                        onClick={() => {
                          setCurrentElement(nav.title);
                        }}
                        className={
                          currentElement === nav.title ? "activate" : ""
                        }
                      >
                        {nav.icon}
                        <span>{nav.title}</span>
                      </li>
                    </Link>
                  ))}
                </Fragment>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
