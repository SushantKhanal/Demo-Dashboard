import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export const sidebarNavs = {
  main: [
    {
      title: "Dashboard",
      icon: <DashboardIcon className="icon" />,
      destination: "/",
    },
  ],
  lists: [
    {
      title: "Users",
      icon: <PersonOutlineIcon className="icon" />,
      destination: "/users",
    },
    {
      title: "Products",
      icon: <StoreIcon className="icon" />,
      destination: "/products",
    },
    {
      title: "Orders",
      icon: <CreditCardIcon className="icon" />,
      destination: "/",
    },
    {
      title: "Delivery",
      icon: <LocalShippingIcon className="icon" />,
      destination: "/",
    },
  ],
  useful: [
    {
      title: "Stats",
      icon: <InsertChartIcon className="icon" />,
      destination: "/",
    },
    {
      title: "Notification",
      icon: <NotificationsNoneIcon className="icon" />,
      destination: "/",
    },
  ],
  // service: [
  //   {
  //     title: "System Health",
  //     icon: <SettingsSystemDaydreamOutlinedIcon className="icon" />,
  //     destination: "/",
  //   },
  //   {
  //     title: "Logs",
  //     icon: <PsychologyOutlinedIcon className="icon" />,
  //     destination: "/",
  //   },
  //   {
  //     title: "Settings",
  //     icon: <SettingsApplicationsIcon className="icon" />,
  //     destination: "/",
  //   },
  // ],
  user: [
    {
      title: "Profile",
      icon: <AccountCircleOutlinedIcon className="icon" />,
      destination: "/",
    },
    {
      title: "Logout",
      icon: <ExitToAppIcon className="icon" />,
      destination: "/",
    },
  ],
};
