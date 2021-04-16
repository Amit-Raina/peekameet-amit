import { Fragment } from "react";
import "./Footer.css";
import yt from "../../assets/yt.png";
import tw from "../../assets/tw.png";
import fb from "../../assets/fb.png";
import ig from "../../assets/ig.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="Footer">
        <h4 className="FooterText">PEEKaMEET©2020</h4>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <h4 className="FooterText">Follow Us:</h4>
        <img src={ig} alt="icon1" />
        <img src={yt} alt="icon2" />
        <img src={fb} alt="icon3" />
        <img src={tw} alt="icon4" />
        <h4 className="FooterText">FAQs</h4>
        <h4 className="FooterText">Terms & Conditins</h4>
        <h4 className="FooterText">Privacy Policy</h4>
        <h4 className="FooterText">About Us</h4>
        <h4 className="FooterText">Press</h4>
        <h4 className="FooterText">Contact Us</h4>
        <h4 className="FooterText">Perks</h4>
        <h4 className="FooterText">Blog</h4>
      </div>
    </Fragment>
  );
};

export default Footer;
