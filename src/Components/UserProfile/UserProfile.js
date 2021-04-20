import { Fragment, Component } from "react";
import "./UserProfile.css";

import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";
import Usercard from "../../Reusable_Components/Usercard/Usercard";
import UserProfileLabels from "../../Reusable_Components/UserProfileLabels/UserProfileLabels";

import open_quote from "../../assets/open_quote.png";
import close_quote from "../../assets/close_quote.png";

import { connect } from "react-redux";

class UserProfile extends Component {
  render() {
    return (
      <Fragment>
        <div className="MainUser">
          <HeaderUser />

          <Usercard>
            <div className="Inspiration_text">
              <img src={open_quote} alt="open"></img>
              &nbsp;
              <p>{this.props.userData.data[0].customer.tagline}</p>
              &nbsp;
              <img src={close_quote} alt="close"></img> &nbsp;
            </div>

            <div className="demo_text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                et eros sit amet sem viverra porttitor vel quis justo. Sed
                tempus, lorem suscipit vulputate mollis, mi dolor bibendum mi,
                non auctor nisi est nec nunc. &nbsp;
                <b style={{ color: "#1cb54f" }}>More</b>
              </p>
            </div>

            <div className="Main_user_details">
              <div className="Indusrty_details">
                <p>Industy(s)</p>
                {this.props.userData.data[0].customer.industry.map(
                  (userInfo) => (
                    <UserProfileLabels
                      style={{
                        color: "#f17c2b",
                        backgroundColor: "rgba(241, 124, 43, 0.18)",
                        marginRight: "3px",
                      }}
                    >
                      {userInfo}
                    </UserProfileLabels>
                  )
                )}
              </div>

              <div className="Organization_details">
                <p>Organization and Groups</p>
                {this.props.userData.data[0].customer.organisationGroups.map(
                  (userInfo) => (
                    <UserProfileLabels
                      style={{
                        color: "#96368f",
                        backgroundColor: "rgba(150, 54, 143, 0.18)",
                        marginRight: "3px",
                      }}
                    >
                      {userInfo}
                    </UserProfileLabels>
                  )
                )}
              </div>

              <div className="Intrest__details">
                <p>Intrests and Activites</p>
                {this.props.userData.data[0].customer.interestActivities.map(
                  (userInfo) => (
                    <UserProfileLabels
                      style={{
                        color: "#1a9691",
                        backgroundColor: "rgba(26, 150, 145, 0.18)",
                        marginRight: "3px",
                      }}
                    >
                      {userInfo}
                    </UserProfileLabels>
                  )
                )}
              </div>

              <div className="Alumni_details">
                <p>Alumni</p>
                {this.props.userData.data[0].customer.alumni.map((userInfo) => (
                  <UserProfileLabels
                    style={{
                      color: "#e63183",
                      backgroundColor: "rgba(230, 49, 131, 0.18)",
                      marginRight: "3px",
                    }}
                  >
                    {userInfo}
                  </UserProfileLabels>
                ))}
              </div>

              <div className="Languages__details">
                <p>Languages</p>
                {this.props.userData.data[0].customer.languages.map(
                  (userInfo) => (
                    <UserProfileLabels
                      style={{
                        color: "#0080af",
                        backgroundColor: "rgba(0, 128, 175, 0.17)",
                        marginRight: "3px",
                      }}
                    >
                      {userInfo}
                    </UserProfileLabels>
                  )
                )}
              </div>
              <div className="user_contact_content">
                <h4 className="phone_contact">
                  {this.props.userData.data[0].customer.businessPhone}
                </h4>
                <h4 className="email_contact">
                  {this.props.userData.data[0].customer.email}
                </h4>
              </div>
              <div className="Bussiness_Address_details">
                <p>Business Address</p>
                <h5 style={{ color: "#152d4e" }}>
                  {this.props.userData.data[0].customer.businessAddress}
                </h5>
                <h5 style={{ color: "#1cb54f" }}>123 Sycamore Dr</h5>
                <h5 style={{ color: "#1cb54f" }}>Torrington CT, 06790</h5>
              </div>
            </div>
          </Usercard>

          <Footer />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, null)(UserProfile);
