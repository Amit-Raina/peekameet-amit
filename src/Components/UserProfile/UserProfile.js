import { Fragment } from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";

import nav_contacts from "../../assets/nav-contacts.png";
import nav_messages from "../../assets/nav-messages.png";
import user_back from "../../assets/userbackground.png";
import profile_picture from "../../assets/user.png";
import more_options from "../../assets/more_options.png";
import open_quote from "../../assets/open_quote.png";
import close_quote from "../../assets/close_quote.png";

const UserProfile = () => {
  return (
    <Fragment>
      <div className="MainUser">
        <HeaderUser />

        <div className="scroll">
          <div
            className="UserCard"
            style={{ background: `url(${user_back}) no-repeat` }}
          >
            <div>
              <center>
                <img
                  src={profile_picture}
                  alt="profile.png"
                  className="user_profile"
                />
              </center>
            </div>

            <div className="more_options">
              <img src={more_options} alt="options" />
            </div>

            <div className="User_Name_card">
              <center>
                <h3>Robert Smith</h3>
                <h5>CEO</h5>
                <h5>Gold Brands</h5>
              </center>
            </div>

            <div className="profile_buttons">
              <button className="button_msg">
                <img src={nav_messages} alt="contact" />
                &nbsp;&nbsp;&nbsp;
                <h4>Mesage</h4>
              </button>

              <button className="button_save">
                <img src={nav_contacts} alt="contact" />
                &nbsp;&nbsp;&nbsp;
                <h4>Save Contact</h4>
              </button>
            </div>

            <div className="User_toggle_options">
              <div className="User_details">
                <p>Details</p>
              </div>

              <Link to="/user-notes">
                <div className="User_notes">
                  <p>Notes</p>
                </div>
              </Link>
            </div>

            <hr />

            <div className="Inspiration_text">
              <img src={open_quote} alt="open"></img>
              &nbsp;
              <p>Inspired by the world and everything it has to offer.</p>
              &nbsp;
              <img src={close_quote} alt="close"></img> &nbsp;
            </div>

            <div className="demo_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et eros sit amet sem viverra porttitor vel quis justo. Sed
                tempus, lorem suscipit vulputate mollis, mi dolor bibendum mi,
                non auctor nisi est nec nunc.{" "}
                <b style={{ color: "#1cb54f" }}>More</b>
              </p>
            </div>

            <div className="Main_user_details">
              <div className="Indusrty_details">
                <p>Industy(s)</p>
                <span
                  className="User_fields"
                  style={{
                    color: "#f17c2b",
                    backgroundColor: "rgba(241, 124, 43, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Web Development
                </span>
                <span
                  className="User_fields"
                  style={{
                    color: "#f17c2b",
                    backgroundColor: "rgba(241, 124, 43, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Fine Arts
                </span>
              </div>

              <div className="Organization_details">
                <p>Organization and Groups</p>
                <span
                  className="User_fields"
                  style={{
                    color: "#96368f",
                    backgroundColor: "rgba(150, 54, 143, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  IAW
                </span>
                <span
                  className="User_fields"
                  style={{
                    color: "#96368f",
                    backgroundColor: "rgba(150, 54, 143, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Denver Ruby
                </span>
              </div>

              <div className="Intrest__details">
                <p>Intrests and Activites</p>
                <span
                  className="User_fields"
                  style={{
                    color: "#1a9691",
                    backgroundColor: "rgba(26, 150, 145, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Hiking
                </span>
                <span
                  className="User_fields"
                  style={{
                    color: "#1a9691",
                    backgroundColor: "rgba(26, 150, 145, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Professional Speaking
                </span>
                <span
                  className="User_fields"
                  style={{
                    color: "#1a9691",
                    backgroundColor: "rgba(26, 150, 145, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Guitar
                </span>
              </div>

              <div className="Alumni_details">
                <p>Alumni</p>
                <span
                  className="User_fields"
                  style={{
                    color: "#e63183",
                    backgroundColor: "rgba(230, 49, 131, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  Spark Colorado
                </span>
                <span
                  className="User_fields"
                  style={{
                    color: "#e63183",
                    backgroundColor: "rgba(230, 49, 131, 0.18)",
                    marginRight: "3px",
                  }}
                >
                  UC Technology
                </span>
              </div>

              <div className="Languages__details">
                <p>Languages</p>
                <span
                  className="User_fields"
                  style={{
                    color: "#0080af",
                    backgroundColor: "rgba(0, 128, 175, 0.17)",
                    marginRight: "3px",
                  }}
                >
                  English
                </span>
                <span
                  className="User_fields"
                  style={{
                    color: "#0080af",
                    backgroundColor: "rgba(0, 128, 175, 0.17)",
                    marginRight: "3px",
                  }}
                >
                  Spanish
                </span>
              </div>
              <div className="email_content">
                <h4>Exchange Phone Number & Email</h4>
              </div>
              <div className="Bussiness_Address_details">
                <p>Business Address</p>
                <h5 style={{ color: "#152d4e" }}>A Digital Agency</h5>
                <h5 style={{ color: "#1cb54f" }}>123 Sycamore Dr</h5>
                <h5 style={{ color: "#1cb54f" }}>Torrington CT, 06790</h5>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default UserProfile;
