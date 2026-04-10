import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/mohd-amaan-siddiqui-678a4a203/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — mohdamaansiddiqui
              </a>
            </p>
            <h4>Education</h4>
            {/* <p>
              PGPWE (MBA), Indian Institute of Management, Lucknow — 2021–2023
            </p> */}
            <p>
              B.Tech Mechanical Engineering, MJP Rohilkhand University —
              2020
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mohdamaansiddiqui"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/mohd-amaan-siddiqui-678a4a203/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            {/* <a
              href="https://www.youtube.com/@Leftbraincoder"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              YouTube <MdArrowOutward />
            </a> */}
            <a
              href="https://www.instagram.com/itsamaansid?igsh=NGFwaWptZzBicmZs&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Amaan Siddiqui</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
