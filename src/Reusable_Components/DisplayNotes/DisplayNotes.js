import { Fragment } from "react";
import "./DisplayNotes.css";
import dots from "../../assets/3-dot.png";

const DisplayNotes = () => {
  return (
    <Fragment>
      <div className="Display_Single_note">
        <div className="Display_Content">
          <div className="Inside_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing </p>
          </div>
          <div className="Inside_3dots">
            <img src={dots} alt="3_dots" />
          </div>
        </div>
        <div className="Inside_date">
          <p>9:30 AM, 29 Nov</p>
        </div>
      </div>
    </Fragment>
  );
};
export default DisplayNotes;
