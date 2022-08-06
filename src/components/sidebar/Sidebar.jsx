import "./sidebar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { Fragment, useContext, useState } from "react";
import { sidebarNavs } from "./navData";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [currentElement, setCurrentElement] = useState("");

  return (
    <>
      <div className="sidebar">
        <div className="top"></div>
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
        <div className="bottom">
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
