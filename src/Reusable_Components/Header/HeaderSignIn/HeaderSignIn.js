import { Fragment } from "react";
import Logoimage from '../../../assets/peekameet_logo.png';
import "./HeaderSignIn.css";

const HeaderSignIn = () => {
  return (
    <Fragment>
      <div className="HeaderSign">
        <img src={Logoimage} alt="logo.img" className="Logoimg" />
        <h3 className="Title">PEEKaMEET</h3>

        <button className="Sign-In Rectangle1">Sign In</button>
        <button className="Sign-Up Rectangle2">Sign Up</button>
      </div>
    </Fragment>
  );
};

export default HeaderSignIn;
