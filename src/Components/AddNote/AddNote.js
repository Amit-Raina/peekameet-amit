import { Component, Fragment } from "react";
import "./AddNote.css";

import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";

import profile_picture from "../../assets/user.png";
import note_time from "../../assets/note_time.png";
import note_date from "../../assets/note_date.png";

import { addNewUserNote, getUserNoteList } from "../../actions/index";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

class AddNote extends Component {
  state = {
    messageData: "",
    messageFollowUp: "",
    messageTime: "",
  };

  getUserMessage = (value) => {
    this.setState({
      messageData: value,
    });
  };

  getUserMessageFollowUp = (value) => {
    this.setState({
      messageFollowUp: value,
    });
  };

  getUserMessageTime = (value) => {
    this.setState({
      messageTime: value,
    });
  };

  checkValidity = () => {
    if (this.state.messageFollowUp === "") {
      alert("Please Enter Note Follow Up !");
      return false;
    }

    if (this.state.messageTime === "") {
      alert("Please Enter Note Time !");
      return false;
    }
    if (this.state.messageData === "") {
      alert("Please Enter Note Message !");
      return false;
    }

    return true;
  };

  sendNoteRequest = () => {
    if (this.checkValidity()) {
      this.props.addNewUserNote(
        this.props.userData.data[0].customer._id,
        "followup",
        this.state.messageData,
        1576488098421,
        this.props.userData.data[0].token
      );
      this.props.getUserNoteList(
        this.props.userData.data[0].customer._id,
        this.props.userData.data[0].token
      );
      this.setState({
        messageData: "",
        messageFollowUp: "",
        messageTime: "",
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="MainAddNote">
          <HeaderUser />
          <div className="scroll">
            <div className="UserCard">
              <div className="NoteTitle">
                <p>Add Note</p>
              </div>
              <div className="AddNoteScreen">
                <div className="UserInfoNote">
                  <img src={profile_picture} alt="profile" />
                  <p>
                    {this.props.userData.data[0].customer.firstName}{" "}
                    {this.props.userData.data[0].customer.lastName}
                  </p>
                </div>
                <br />
                <div className="NoteDetails">
                  <div className="FollowUp_note">
                    <p>Follow Up Date</p>

                    <div className="FollowUp_Border">
                      <input
                        type="text"
                        onChange={(event) =>
                          this.getUserMessageFollowUp(event.target.value)
                        }
                        required
                        value={this.state.messageFollowUp}
                      />
                      <img src={note_date} alt="note-date" />
                    </div>
                  </div>
                  <div className="Time_note">
                    <p>Time</p>

                    <div className="Time_Border">
                      <input
                        type="text"
                        onChange={(event) =>
                          this.getUserMessageTime(event.target.value)
                        }
                        required
                        value={this.state.messageTime}
                      />
                      <img src={note_time} alt="note-time" />
                    </div>
                  </div>
                </div>
                <br />
                <div className="Enter-Note-Text">
                  <p>Notes</p>
                  <input
                    type="text"
                    placeholder="Write here"
                    onChange={(event) =>
                      this.getUserMessage(event.target.value)
                    }
                    required
                    value={this.state.messageData}
                  />
                </div>
                <br />
                <div className="ButtonDiv">
                  <NavLink to="/user-notes">
                    <button className="Cancel_Button">Cancel</button>
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="Save_Button"
                    onClick={this.sendNoteRequest}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    addNewUserNote: (createdFor, type, noteText, dateTime, Authorization) =>
      dispatch(
        addNewUserNote(createdFor, type, noteText, dateTime, Authorization)
      ),
    getUserNoteList: (createdFor, Authorization) =>
      dispatch(getUserNoteList(createdFor, Authorization)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
