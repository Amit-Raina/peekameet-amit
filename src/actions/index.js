import {
  ADDNOTE,
  USERDETAILS,
  GETNOTES,
  SIGNINRESPONSE,
} from "../constants/index";
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
        console.log(response.data);
        dispatch(signInResponse(response.data));
      })
      .catch((err) => {
        alert("Invalid Email and Password \n" + err);
      });
  };
};
