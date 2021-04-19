import { Fragment } from "react";
import "./HeaderUser.css";

import Logoimage from "../../../assets/peekameet_logo.png";
import nav_home from "../../../assets/nav-home.png";
import nav_contacts from "../../../assets/nav-contacts.png";
import nav_messages from "../../../assets/nav-messages.png";
import nav_scan from "../../../assets/nav-scan.png";
import nav_movement from "../../../assets/nav-movement.png";
import nav_notification from "../../../assets/nav-notifications.png";
import nav_menu from "../../../assets/nav-menu.png";

import { NavLink } from "react-router-dom";

const HeaderUser = () => {
  return (
    <Fragment>
      <div className="HeaderUser">
        <div className="logoTitle">
          <img src={Logoimage} alt="logo.png" />
          <h3 className="UserTitle">PEEKaMEET</h3>
        </div>

        <div className="Upperbar">
          <NavLink to="user-details" style={{textDecoration:"none"}}>
          <div className="User-home">
            <img src={nav_home} alt="home" />
            &nbsp;&nbsp;
            <h4>Home</h4>
          </div>
          </NavLink>
          <div className="User-contacts">
            <img src={nav_contacts} alt="contact" />
            &nbsp;&nbsp;
            <h4>Contacts</h4>
          </div>

          <div className="User-messages">
            <img src={nav_messages} alt="message" />
            &nbsp;&nbsp;
            <h4>Messages</h4>
          </div>

          <div className="User-scan">
            <img src={nav_scan} alt="scan" />
            &nbsp;&nbsp;
            <h4>Scan</h4>
          </div>

          <div className="User-movement">
            <img src={nav_movement} alt="movement" />
            &nbsp;&nbsp;
            <h4>The Movement</h4>
          </div>

          <div className="User-notifications">
            <img src={nav_notification} alt="notification" />
            &nbsp;&nbsp;
            <h4>Notifications</h4>
          </div>

          <NavLink to="/" style={{textDecoration:"none"}}>
            <div className="User-signout">
              <h4>Sign Out</h4>
            </div>
          </NavLink>

          <div className="User-menu">
            <img src={nav_menu} alt="menu" />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HeaderUser;
