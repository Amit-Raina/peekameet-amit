import axios from "axios";

// const data = {
//   email: "pragyanshu.sharma@daffodilsw.com",
//   password: "Qwerty123@",
// };

export function signIn(email,password) {
  axios
    .post(
      "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/public/user/login",
      {
        email:email,
        password:password
      }
    )
    .then((response) => {
      console.log(response);
        // return response.data;
    })
    .catch((err) => console.log("SignIn Error :" + err));
}

export function getUserDetails(userId, Authorization) {
  axios
    .get(
      "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/user/nearby",
      {
        params: {
          userId: userId,
        },
        headers: {
          Authorization: Authorization,
        },
      }
    )
    .then((response) => {
      console.log(response);
    }).catch((err) => console.log("getUserDetails Error :" + err));
}

export function getFollowUpNotes(createdFor, Authorization) {
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
      console.log(response);
    }).catch((err) => console.log("getFollowUpNotes Error :" + err));
}

export function addNote(
  createdFor,
  type = "followup",
  noteText,
  dateTime,
  Authorization
) {
  const body = {
    createdFor: createdFor,
    type: type,
    noteText: noteText,
    dateTime: dateTime,
  };

  axios
    .post(
      "http://apipeekameet.cloudzmall.com:3001/peekameet/api/v1/followUpNote",
      body,
      {
        headers:{
            Authorization:Authorization
        }
      }
    )
    .then((response) => {
      console.log(response);
    }).catch((err) => console.log("addNote Error :" + err));
}
