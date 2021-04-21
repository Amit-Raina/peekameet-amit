import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./Usercard.css";

import nav_contacts from "../../assets/nav-contacts.png";
import nav_messages from "../../assets/nav-messages.png";
import user_back from "../../assets/userbackground.png";
import profile_picture from "../../assets/user.png";
import more_options from "../../assets/more_options.png";

import { connect } from "react-redux";

class Usercard extends Component {
  render() {
    return (
      <Fragment>
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
                <h3>
                  {this.props.userData.data[0].customer.firstName}{" "}
                  {this.props.userData.data[0].customer.lastName}
                </h3>
                <h5>{this.props.userData.data[0].customer.jobTitle}</h5>
                <h5>{this.props.userData.data[0].customer.company}</h5>
              </center>
            </div>

            <div className="profile_buttons">
              <button className="button_msg">
                <img src={nav_messages} alt="contact" />
                &nbsp;&nbsp;&nbsp;
                <h4>Message</h4>
              </button>

              <button className="button_save">
                <img src={nav_contacts} alt="contact" />
                &nbsp;&nbsp;&nbsp;
                <h4>Save Contact</h4>
              </button>
            </div>

            <div className="User_toggle_options">
              <NavLink
                to="/user-details"
                style={{ textDecoration: "none" }}
                activeClassName="activeNav"
              >
                <div className="User_details">
                  <p>Details</p>
                </div>
              </NavLink>

              <NavLink
                to="/user-notes"
                style={{ textDecoration: "none" }}
                activeClassName="activeNav"
              >
                <div className="User_notes">
                  <p>Notes</p>
                </div>
              </NavLink>
            </div>

            <hr />
            {this.props.children}
          </div>
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getUserNoteList: (createdFor, Authorization) =>
//       dispatch(getUserNoteList(createdFor, Authorization)),
//   };
// };

export default connect(mapStateToProps, null)(Usercard);
