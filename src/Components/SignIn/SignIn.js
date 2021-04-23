import { Fragment, Component } from "react";
import "./SignIn.css";
import Mainimage from "../../assets/screenPhoto.png";
import Spinner from "../../Spinner/Spinner";
import { Redirect } from "react-router-dom";
import Footer from "../../Reusable_Components/Footer/Footer";
import HeaderSignIn from "../../Reusable_Components/Header/HeaderSignIn/HeaderSignIn";
import { getSignInDetails, getUserNoteList } from "../../actions/index";

import { connect } from "react-redux";

class SignIn extends Component {
  state = {
    email: "pragyanshu.sharma@daffodilsw.com",
    password: "Qwerty123@",
    redirect: "/",
    loading: false,
  };

  checkSignValidity = () => {
    if (this.state.email === "") {
      alert("Please Enter email !");
      return false;
    }

    if (this.state.password === "") {
      alert("Please Enter password !");
      return false;
    } else if (this.state.password.length >= 8) {
      if (this.state.password.includes("1")) return true;
      else if (this.state.password.includes("2")) return true;
      else if (this.state.password.includes("3")) return true;
      else if (this.state.password.includes("4")) return true;
      else if (this.state.password.includes("5")) return true;
      else if (this.state.password.includes("6")) return true;
      else if (this.state.password.includes("7")) return true;
      else if (this.state.password.includes("8")) return true;
      else if (this.state.password.includes("9")) return true;
      else if (this.state.password.includes("0")) return true;
      else {
        alert("Password must contain a number !");
        return false;
      }
    }
    else{
      alert("Password must be atleast 8 characters long !")
    }
  };

  getEmail = (value) => {
    this.setState({
      email: value,
    });
  };

  getPassword = (value) => {
    this.setState({
      password: value,
    });
  };

  getUserDetails = () => {
    try {
      if (this.checkSignValidity()) {
        this.props.getSignInDetails(this.state.email, this.state.password);
        this.setState({
          loading: true,
        });
        setTimeout(() => {
          if (
            this.props.userData !== null &&
            this.props.userData.httpCode === 200
          ) {
            this.props.getUserNoteList(
              this.props.userData.data[0].customer._id,
              this.props.userData.data[0].token
            );
            this.setState({
              redirect: "/user-details",
              loading: false,
            });
          } else {
            this.setState({
              redirect: "/",
              loading: false,
            });
          }
        }, 3000);
      } else {
      }
    } catch (e) {
      alert("Server took long to respond ! Login again");
    }
  };

  render() {
    return (
      <Fragment>
        <div className="Main">
          <HeaderSignIn />
          <div className="Screen">
            <div className="UserInfo">
              <h3 className="PEEKaMEET-lets-you-n">
                <b style={{ fontSize: "24px" }}>PEEKaMEET</b> lets you network
                more effectively to achieve your business and career goals
              </h3>

              <div style={{ marginTop: "15px" }}>
                <center>
                  <span
                    className="Fields"
                    style={{
                      color: "#f17c2b",
                      backgroundColor: "rgba(241, 124, 43, 0.18)",
                    }}
                  >
                    Freelancer
                  </span>
                  <span
                    className="Fields"
                    style={{
                      color: "#96368f",
                      backgroundColor: "rgba(150, 54, 143, 0.18)",
                    }}
                  >
                    Job Seeker
                  </span>
                  <span
                    className="Fields"
                    style={{
                      color: "#1a9691",
                      backgroundColor: "rgba(26, 150, 145, 0.18)",
                    }}
                  >
                    Enterpreneur
                  </span>
                  <span
                    className="Fields"
                    style={{
                      color: "#e63183",
                      backgroundColor: "rgba(230, 49, 131, 0.18)",
                    }}
                  >
                    Mompreneur
                  </span>
                  <span
                    className="Fields"
                    style={{
                      color: "#0080af",
                      backgroundColor: "rgba(0, 128, 175, 0.17)",
                    }}
                  >
                    Internship Seeker
                  </span>
                  <span
                    className="Fields"
                    style={{
                      color: "#e7212c",
                      backgroundColor: "rgba(231, 33, 44, 0.18)",
                    }}
                  >
                    Environmental Change Maker
                  </span>
                </center>
              </div>

              <br />

              <h3 className="PEEKaMEET-lets-you-n">
                Build and manage your network with PEEKaMEET
              </h3>

              <br />
              <label style={{ fontSize: "10px" }}>
                <b>Email</b>
              </label>
              <br />
              <input
                type="email"
                onChange={(event) => this.getEmail(event.target.value)}
                value={this.state.email}
                style={{
                  width: "100%",
                  border: "solid 1px #1cb54f",
                  height: "25px",
                  borderRadius: "3px",
                  padding: "4px",
                }}
              />
              <br />
              <label style={{ fontSize: "10px" }}>
                <b>Password</b>
              </label>
              <br />
              <input
                type="password"
                onChange={(event) => this.getPassword(event.target.value)}
                value={this.state.password}
                style={{
                  width: "100%",
                  border: "solid 1px #1cb54f",
                  height: "25px",
                  borderRadius: "3px",
                  padding: "4px",
                }}
              />
              <br />
              <br />

              <Redirect to={this.state.redirect}></Redirect>
              <button className="ButtonSignin" onClick={this.getUserDetails}>
                Sign In
              </button>

              <div
                style={{
                  display: "flex",
                  marginTop: "4px",
                  alignItems: "center",
                }}
              >
                <input type="checkbox" /> &nbsp;
                <label className="Remember-Me">Remember Me</label>
                <h5 className="Forgot-Password">Forgot Password</h5>
              </div>
              <center className="Dont-have-an-account">
                Don’t have an account? &nbsp;
                <b style={{ color: "#152d4e" }}>Sign Up</b>
              </center>
            </div>

            <div className="ScreenImage">
              <img src={Mainimage} alt="Workimage" />
              {this.state.loading ? <Spinner></Spinner> : ""}
            </div>
          </div>
          <Footer />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSignInDetails: (email, password) =>
      dispatch(getSignInDetails(email, password)),
    getUserNoteList: (createdFor, Authorization) =>
      dispatch(getUserNoteList(createdFor, Authorization)),
  };
};

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
