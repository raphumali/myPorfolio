import "./Contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/gmail.png";
import Address from "../../img/address.png";
import { useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ThemeContext } from "../../context";

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;


  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ovi405i",
        "template_1bcwrdq",
        formRef.current,
        "a_Z7_3ykDGFIre5Fe"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setIsDisabled(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Contact Me!</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" /> 403-477-3997
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" /> raph.umali@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" /> Calgary, Alberta
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Let's get in touch.</b> I'm currently looking for any entry level
            IT or developer positions within Calgary, or remote work positions.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor : darkMode && "#333"}}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            ></input>
            <input style={{backgroundColor : darkMode && "#333"}}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            ></input>
            <input style={{backgroundColor : darkMode && "#333"}}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            ></input>
            <textarea style={{backgroundColor : darkMode && "#333"}}
              rows="5"
              placeholder="Message"
              name="message"
              required
            ></textarea>
            <button disabled={isDisabled}>Submit</button>
            {done && "   Thank you! I will be in touch."}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
