import { ADDNOTE, GETNOTES, SIGNINRESPONSE, UPDATENOTE } from "../constants/index";
import axios from "axios";

export function signInResponse(user) {
  return {
    type: SIGNINRESPONSE,
    user,
  };
}

export function addNote(note) {
  return {
    type: ADDNOTE,
    note,
  };
}

export function getNotes(notes) {
  return {
    type: GETNOTES,
    notes,
  };
}

export function updateNote(updatedNote) {
  return {
    type: UPDATENOTE,
    updatedNote,
  };
}

export const getSignInDetails = (email, password) => {
  return (dispatch) => {
    axios
      .post(
        "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/public/user/login",
        {
          email: email,
          password: password,
        }
      )
      .then((response) => {
        dispatch(signInResponse(response.data));
      })
      .catch((err) => {
        dispatch(signInResponse(null));
        setTimeout(() => {
          alert("Invalid Email and Password");
        }, 2000);
      });
  };
};

export const getUserNoteList = (createdFor, Authorization) => {
  return (dispatch) => {
    axios
      .get(
        "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/followUpNotes",
        {
          params: {
            createdFor: createdFor,
          },
          headers: {
            Authorization: Authorization,
          },
        }
      )
      .then((response) => {
        dispatch(getNotes(response.data.data[0].docs));
      })
      .catch((err) => {
        alert("Not Authorised");
      });
  };
};

export const addNewUserNote = (
  createdFor,
  type = "followup",
  noteText,
  dateTime,
  Authorization
) => {
  const body = {
    createdFor: createdFor,
    type: type,
    noteText: noteText,
    dateTime: dateTime,
  };
  return (dispatch) => {
    axios
      .post(
        "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/followUpNote",
        body,
        {
          headers: {
            Authorization: Authorization,
          },
        }
      )
      .then((response) => {
        dispatch(addNote(response.data));
      })
      .catch((err) => {});
  };
};

export const signOut = (data) => {
  return (dispatch) => {
    dispatch(signInResponse(data));
  };
};

export const editNote = (noteId, noteText, Authorization) => {
  const body = {
    noteText: noteText,
  };
  return (dispatch) => {
    axios
      .put(
        `http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/followUpNote/${noteId}`,
        body,
        {
          headers: {
            Authorization: Authorization,
          },
        }
      )
      .then((response) => { 
           dispatch(updateNote(response));
      })
      .catch((err) => {
        alert("Not Updated , Please Re Login");
      });
  };
};
