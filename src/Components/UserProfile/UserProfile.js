import { Fragment } from "react";
import "./UserProfile.css";

import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";
import Usercard from "../../Reusable_Components/Usercard/Usercard";
import UserProfileLabels from "../../Reusable_Components/UserProfileLabels/UserProfileLabels";

import open_quote from "../../assets/open_quote.png";
import close_quote from "../../assets/close_quote.png";

const UserProfile = () => {
  return (
    <Fragment>
      <div className="MainUser">
        <HeaderUser />

        <Usercard>
          <div className="Inspiration_text">
            <img src={open_quote} alt="open"></img>
            &nbsp;
            <p>Inspired by the world and everything it has to offer.</p>
            &nbsp;
            <img src={close_quote} alt="close"></img> &nbsp;
          </div>

          <div className="demo_text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et
              eros sit amet sem viverra porttitor vel quis justo. Sed tempus,
              lorem suscipit vulputate mollis, mi dolor bibendum mi, non auctor
              nisi est nec nunc. &nbsp;
              <b style={{ color: "#1cb54f" }}>More</b>
            </p>
          </div>

          <div className="Main_user_details">
            <div className="Indusrty_details">
              <p>Industy(s)</p>
              <UserProfileLabels
                style={{
                  color: "#f17c2b",
                  backgroundColor: "rgba(241, 124, 43, 0.18)",
                  marginRight: "3px",
                }}
              >
                Web Development
              </UserProfileLabels>
              <UserProfileLabels
                style={{
                  color: "#f17c2b",
                  backgroundColor: "rgba(241, 124, 43, 0.18)",
                  marginRight: "3px",
                }}
              >
                Fine Arts
              </UserProfileLabels>
            </div>

            <div className="Organization_details">
              <p>Organization and Groups</p>
              <UserProfileLabels
                style={{
                  color: "#96368f",
                  backgroundColor: "rgba(150, 54, 143, 0.18)",
                  marginRight: "3px",
                }}
              >
                IAW
              </UserProfileLabels>
              <UserProfileLabels
                style={{
                  color: "#96368f",
                  backgroundColor: "rgba(150, 54, 143, 0.18)",
                  marginRight: "3px",
                }}
              >
                Denver Ruby
              </UserProfileLabels>
            </div>

            <div className="Intrest__details">
              <p>Intrests and Activites</p>
              <UserProfileLabels
                style={{
                  color: "#1a9691",
                  backgroundColor: "rgba(26, 150, 145, 0.18)",
                  marginRight: "3px",
                }}
              >
                Hiking
              </UserProfileLabels>
              <UserProfileLabels
                style={{
                  color: "#1a9691",
                  backgroundColor: "rgba(26, 150, 145, 0.18)",
                  marginRight: "3px",
                }}
              >
                Professional Speaking
              </UserProfileLabels>
              <UserProfileLabels
                style={{
                  color: "#1a9691",
                  backgroundColor: "rgba(26, 150, 145, 0.18)",
                  marginRight: "3px",
                }}
              >
                Guitar
              </UserProfileLabels>
            </div>

            <div className="Alumni_details">
              <p>Alumni</p>
              <UserProfileLabels
                style={{
                  color: "#e63183",
                  backgroundColor: "rgba(230, 49, 131, 0.18)",
                  marginRight: "3px",
                }}
              >
                Spark Colorado
              </UserProfileLabels>

              <UserProfileLabels
                style={{
                  color: "#e63183",
                  backgroundColor: "rgba(230, 49, 131, 0.18)",
                  marginRight: "3px",
                }}
              >
                UC Technology
              </UserProfileLabels>
            </div>

            <div className="Languages__details">
              <p>Languages</p>
              <UserProfileLabels
                style={{
                  color: "#0080af",
                  backgroundColor: "rgba(0, 128, 175, 0.17)",
                  marginRight: "3px",
                }}
              >
                English
              </UserProfileLabels>
              <UserProfileLabels
                style={{
                  color: "#0080af",
                  backgroundColor: "rgba(0, 128, 175, 0.17)",
                  marginRight: "3px",
                }}
              >
                Spanish
              </UserProfileLabels>
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
        </Usercard>

        <Footer />
      </div>
    </Fragment>
  );
};

export default UserProfile;
