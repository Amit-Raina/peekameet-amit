import React, { Fragment } from "react";
import "./Notes.css";

import Footer from '../../Reusable_Components/Footer/Footer';
import HeaderUser from "../../Reusable_Components/Header/HeaderUser/HeaderUser";
import Usercard from "../../Reusable_Components/Usercard/Usercard";
import DisplayNotes from '../../Reusable_Components/DisplayNotes/DisplayNotes';

import Edit_Notes from "../../assets/edit_notes.png";
import { NavLink } from "react-router-dom";

const UserNotes = () => {
  return (
    <Fragment>
      <div className="MainUser">
        <HeaderUser/>  

        <Usercard>
        <div className="Notes_Holder">
              <div className="Edit_Notes">
                <img src={Edit_Notes} alt="edit_notes" />
                &nbsp;&nbsp;
                <NavLink to="/user-add-notes" style={{textDecoration:"none"}}>
                <p className="Edit_Notes_title">Add Notes</p>
                </NavLink>
              </div>

              <div className="Notes_list">
                <DisplayNotes/>
                <DisplayNotes/>
                <DisplayNotes/>
                <DisplayNotes/>
              </div>
            </div>
        </Usercard>
        <Footer/>
      </div>
    </Fragment>
  );
};
export default UserNotes;
