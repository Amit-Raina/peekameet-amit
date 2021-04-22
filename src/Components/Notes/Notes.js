import React, { Component, Fragment } from "react";
import "./Notes.css";

import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";
import Usercard from "../../Reusable_Components/Usercard/Usercard";
import DisplayNotes from "../../Reusable_Components/DisplayNotes/DisplayNotes";

import Edit_Notes from "../../assets/edit_notes.png";
import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";


class UserNotes extends Component {
  state = {
    limit: 5,
    currentPage: 1,
    Redirect:"/user-notes",
    noteID:null
  };

  timeDateConvetor = (dateTime) => {
    let hour = dateTime[11] + dateTime[12];
    let minutes = dateTime[14] + dateTime[15];

    hour = parseInt(hour) + 5;
    minutes = parseInt(minutes) + 30;
    let prefix = "AM";

    if (minutes >= 60) {
      hour = hour + 1;
      minutes = minutes - 60;
      if (minutes === 0) minutes = "00";
    }

    if (hour > 12) {
      prefix = "PM";
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

    return hour + ":" + minutes + " " + prefix + ", " + date + " " + month;
  };

  editUserNote = (noteId) => {  
    this.setState({
      noteID:noteId
    })
  };

  forwardNav = () => {
    if (
      Math.ceil(this.props.noteData.length / this.state.limit) !==
      this.state.currentPage
    ) {
      let newCurrentPage = this.state.currentPage + 1;
      this.setState({
        currentPage: newCurrentPage,
      });
    } else {
      alert("This is last Page !");
    }
  };

  backNav = () => {
    if (this.state.currentPage > 1) {
      let newCurrentPage = this.state.currentPage - 1;
      this.setState({
        currentPage: newCurrentPage,
      });
    } else {
      alert("This is First Page !");
    }
  };

  render() {

    return (
      <Fragment>
        {this.state.noteID !== null ? <Redirect to={`/user-update-notes/${this.state.noteID}`}/>:""}
        <div className="MainUser">
          <HeaderUser />

          <Usercard>
            <div className="Notes_Holder">
              <div className="Edit_Notes">
                <img src={Edit_Notes} alt="edit_notes" />
                &nbsp;&nbsp;
                <NavLink
                  to="/user-add-notes"
                  style={{ textDecoration: "none" }}
                >
                  <p className="Edit_Notes_title">Add Notes</p>
                </NavLink>
              </div>

              <div className="Notes_list">
                {this.props.noteData.map((data, index) => {
                  if (
                    index >= (this.state.currentPage - 1) * this.state.limit &&
                    index < this.state.currentPage * this.state.limit
                  )
                    return (
                      <DisplayNotes
                        key={index}
                        text={data.noteText}
                        date={this.timeDateConvetor(data.createdAt)}
                        onPress={() => this.editUserNote(data._id)}
                      />
                    );
                  else return null;
                })}
                <div className="notesPagination">
                  <button className="back" onClick={this.backNav}>
                    ⇦
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <button className="forward" onClick={this.forwardNav}>
                    ⇨
                  </button>
                </div>
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
    noteData: state.notes,
    userData:state.user
  };
};

export default connect(mapStateToProps, null)(UserNotes);
