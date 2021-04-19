import { Fragment } from "react";
import "./UserProfileLabels.css";

const UserProfileLabels = (props) => {
  return (
    <Fragment>
      <span className="User_fields" style={props.style}>{props.children}</span>
    </Fragment>
  );
};
export default UserProfileLabels;
