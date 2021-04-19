import { Fragment } from "react";
import "./AddNote.css";

import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";

import profile_picture from "../../assets/user.png";
import note_time from "../../assets/note_time.png";
import note_date from "../../assets/note_date.png";

const AddNote = () => {
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
                <p>Kyle Krukar</p>
              </div>
              <br />
              <div className="NoteDetails">
                <div className="FollowUp_note">
                  <p>Follow Up Date</p>

                  <div className="FollowUp_Border">
                    <input type="text" />
                    <img src={note_date} alt="note-date" />
                  </div>
                </div>
                <div className="Time_note">
                  <p>Time</p>

                  <div className="Time_Border">
                    <input type="text" />
                    <img src={note_time} alt="note-time" />
                  </div>
                </div>
              </div>
              <br />
              <div className="Enter-Note-Text">
                <p>Notes</p>
                <input type="text" placeholder="Write here" />
              </div>
              <br />
              <div className="ButtonDiv">
                <button className="Cancel_Button">Cancel</button>
                &nbsp;&nbsp;&nbsp;
                <button className="Save_Button">Save</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
export default AddNote;
