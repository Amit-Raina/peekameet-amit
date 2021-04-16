import React, { Fragment } from "react";
import "./Notes.css";
import { Link } from "react-router-dom";
import Footer from '../../Reusable_Components/Footer/Footer';
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";

import nav_contacts from "../../assets/nav-contacts.png";
import nav_messages from "../../assets/nav-messages.png";
import user_back from "../../assets/userbackground.png";
import profile_picture from "../../assets/user.png";
import more_options from "../../assets/more_options.png";
import Edit_Notes from "../../assets/edit_notes.png";
import dots from "../../assets/3-dot.png";

const UserNotes = () => {
  return (
    <Fragment>
      <div className="MainUser">
        <HeaderUser/>  
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
              <Link to="/user-details">
                <div className="User_details">
                  <p>Details</p>
                </div>
              </Link>

              <div className="User_notes">
                <p>Notes</p>
              </div>
            </div>

            <hr />

            <div className="Notes_Holder">
              <div className="Edit_Notes">
                <img src={Edit_Notes} alt="edit_notes" />
                &nbsp;&nbsp;
                <p className="Edit_Notes_title">Add Notes</p>
              </div>

              <div className="Notes_list">
                <div className="Display_Single_note">
                  <div className="Display_Content">
                    <div className="Inside_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="Inside_3dots">
                      <img src={dots} alt="3_dots" />
                    </div>
                  </div>
                  <div className="Inside_date">
                    <p>9:30 AM, 29 Nov</p>
                  </div>
                </div>

                <div className="Display_Single_note">
                  <div className="Display_Content">
                    <div className="Inside_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="Inside_3dots">
                      <img src={dots} alt="3_dots" />
                    </div>
                  </div>
                  <div className="Inside_date">
                    <p>9:30 AM, 29 Nov</p>
                  </div>
                </div>

                <div className="Display_Single_note">
                  <div className="Display_Content">
                    <div className="Inside_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="Inside_3dots">
                      <img src={dots} alt="3_dots" />
                    </div>
                  </div>
                  <div className="Inside_date">
                    <p>9:30 AM, 29 Nov</p>
                  </div>
                </div>

                <div className="Display_Single_note">
                  <div className="Display_Content">
                    <div className="Inside_text">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
                    </div>
                    <div className="Inside_3dots">
                      <img src={dots} alt="3_dots" />
                    </div>
                  </div>
                  <div className="Inside_date">
                    <p>9:30 AM, 29 Nov</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    </Fragment>
  );
};
export default UserNotes;
