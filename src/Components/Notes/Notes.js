import React, { Fragment } from "react";
import "./Notes.css";

import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";
import Usercard from "../../Reusable_Components/Usercard/Usercard";
import DisplayNotes from "../../Reusable_Components/DisplayNotes/DisplayNotes";

import Edit_Notes from "../../assets/edit_notes.png";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

function timeDateConvetor(dateTime) {
  let hour = dateTime[11] + dateTime[12];
  let minutes = dateTime[14] + dateTime[15];

  hour = parseInt(hour) + 5;
  minutes = parseInt(minutes) + 30;
  let prefix='AM';

  if (minutes >= 60) {
    hour = hour + 1;
    minutes = minutes - 60;
    if (minutes === 0) minutes = "00";
  }

  if(hour > 12){
    prefix = 'PM'
    hour = hour - 12;
  }

  let date = dateTime[8] + dateTime[9];
  let month = dateTime[5] + dateTime[6];

  if (month === "01") month = "Jan";
  else if (month === "02") month = "Feb";
  else if (month === "03") month = "Mar";
  else if (month === "04") month = "Apr";
  else if (month === "05") month = "May";
  else if (month === "06") month = "Jun";
  else if (month === "07") month = "Jul";
  else if (month === "08") month = "Aug";
  else if (month === "09") month = "Sept";
  else if (month === "10") month = "Oct";
  else if (month === "11") month = "Nov";
  else if (month === "12") month = "Dec";
  else month = "Invalid Date";

  return hour + ":" + minutes +" "+prefix+", "+ date +" "+ month;
}

const UserNotes = (props) => {
  return (
    <Fragment>
      <div className="MainUser">
        <HeaderUser />

        <Usercard>
          <div className="Notes_Holder">
            <div className="Edit_Notes">
              <img src={Edit_Notes} alt="edit_notes" />
              &nbsp;&nbsp;
              <NavLink to="/user-add-notes" style={{ textDecoration: "none" }}>
                <p className="Edit_Notes_title">Add Notes</p>
              </NavLink>
            </div>

            <div className="Notes_list">
              {props.noteData.map((data, index) => {
                return (
                  <DisplayNotes
                    key={index}
                    text={data.noteText}
                    date={timeDateConvetor(data.createdAt)}
                  ></DisplayNotes>
                );
              })}
            </div>
          </div>
        </Usercard>
        <Footer />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    noteData: state.notes,
  };
};

export default connect(mapStateToProps, null)(UserNotes);
