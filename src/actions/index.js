import { SIGNIN, ADDNOTE, USERDETAILS, GETNOTES } from "../constants/index";

export function signIn(user) {
  return {
    type: SIGNIN,
    user
  };
}

export function addNote(note) {
  return {
    type: ADDNOTE,
    note
  };
}

// export function userDetails() {
//   return {
//     type: USERDETAILS,
//   };
// }

export function getNotes(notes) {
  return {
    type: GETNOTES,
    notes
  };
}
