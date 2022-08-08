import "./navbar.scss";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const sidebarToggleHandler = () => {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = sidebarVisible ? "none" : "block";
    const menuIcon = document.querySelector(".wrapper .menu .icon");
    menuIcon.style.left = "2%";
    const homeContainer = document.querySelector(".homeContainer");
    homeContainer.maxWidth = !sidebarVisible
      ? "85vw!important"
      : "100vw!important";
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="menu">
          <MenuIcon className="icon" onClick={() => sidebarToggleHandler()} />
        </div>
        <div className="items">
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              onClick={() => dispatch({ type: "TOGGLE" })}
            />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
