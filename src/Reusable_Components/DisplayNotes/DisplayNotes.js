import { Fragment } from "react";
import "./DisplayNotes.css";
import dots from "../../assets/3-dot.png";

const DisplayNotes = (props) => {
  return (
    <Fragment>
      <div className="Display_Single_note">
        <div className="Display_Content">
          <div className="Inside_text">
            <p>{props.text} </p>
          </div>
          <div className="Inside_3dots">
            <img src={dots} alt="3_dots" />
          </div>
        </div>
        <div className="Inside_date">
          <p>{props.date}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default DisplayNotes;
