import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault(); // to prevent automatic reload

    emailjs
      .handleSubmit(
        "service_zya5rif",
        "template_fz7hki5",
        formRef.current,
        "user_fp8r95z22fEEGAbdBVLpB"
      )
      .then(
        (result) => {
          console.log(result.text);
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
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} className="c-icon" />
              +91 8637839715
            </div>
            <div className="c-info-item">
              <img src={Email} className="c-icon" />
              sahapriyangsu@gmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} className="c-icon" />
              Haldibari, Purbopara, Dist: Coochbehar, West Bengal, Pin: 735122
            </div>
          </div>
        </div>

        <div className="c-right">
          <p className="c-desc">
            <b>What's your story?</b> Get in touch. Always happy to work and
            learn
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input typeof="text" placeholder="Name" name="user_name"></input>
            <input
              typeof="text"
              placeholder="subject"
              name="user_subject"
            ></input>
            <input typeof="text" placeholder="Email" name="user_email"></input>
            <textarea
              rows="5"
              placeholder="Message"
              name="user_message"
            ></textarea>
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
