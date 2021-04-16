import { Fragment } from "react";
import "./SignIn.css";
import Mainimage from "../../assets/screenPhoto.png";
import { Link } from "react-router-dom";
import Footer from '../../Reusable_Components/Footer/Footer';
import HeaderSignIn from '../../Reusable_Components/Header/HeaderSignIn/HeaderSignIn';

const SignIn = () => {
  return (
    <Fragment>
      <div className="Main">
        <HeaderSignIn/>
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
              style={{
                width: "100%",
                border: "solid 1px #1cb54f",
                height: "25px",
                borderRadius: "3px",
              }}
            />
            <br />
            <label style={{ fontSize: "10px" }}>
              <b>Password</b>
            </label>
            <br />
            <input
              type="password"
              style={{
                width: "100%",
                border: "solid 1px #1cb54f",
                height: "25px",
                borderRadius: "3px",
              }}
            />
            <br />
            <br />
            <Link to="/user-details">
              <button className="ButtonSignin">Sign In</button>
            </Link>

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
          </div>
        </div>
        <Footer/>
        {/* <footer>
          <h4 className="footerText">PEEKaMEET©2020</h4>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h4 className="footerText">Follow Us:</h4>
          <img src={ig} alt="icon1" />
          <img src={yt} alt="icon2" />
          <img src={fb} alt="icon3" />
          <img src={tw} alt="icon4" />
          <h4 className="footerText">FAQs</h4>
          <h4 className="footerText">Terms & Conditins</h4>
          <h4 className="footerText">Privacy Policy</h4>
          <h4 className="footerText">About Us</h4>
          <h4 className="footerText">Press</h4>
          <h4 className="footerText">Contact Us</h4>
          <h4 className="footerText">Perks</h4>
          <h4 className="footerText">Blog</h4>
        </footer> */}
      </div>
    </Fragment>
  );
};

export default SignIn;
