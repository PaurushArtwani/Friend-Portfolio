import {
  BsFacebook,
  BsLinkedin,
  BsInstagram,
  BsFillEnvelopeFill,
  BsCalendarDayFill,
} from "react-icons/bs";

import styled from "styled-components";

const Copyright = () => {
  return (
    <>
      <Footer id="contact" className="footer row p-4">
        <div className="col-md-12 text-center social-links">
          <div className="social-media-links">
            <a
              className="socials"
              target={"_blank"}
              title="Mail Me"
              href="https://calendar.google.com/calendar/embed?src=paurushartwani09%40gmail.com&ctz=Asia%2FKolkata"
            >
              <BsFillEnvelopeFill />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Linkdin"
              href="https://calendar.google.com/calendar/embed?src=paurushartwani09%40gmail.com&ctz=Asia%2FKolkata"
            >
              <BsLinkedin />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Calender"
              href="https://calendar.google.com/calendar/embed?src=paurushartwani09%40gmail.com&ctz=Asia%2FKolkata"
            >
              <BsCalendarDayFill />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Instagram"
              href="https://www.instagram.com/paurush_artwani09/"
            >
              <BsInstagram />
            </a>
            &nbsp;
            <a
              className="socials"
              target={"_blank"}
              title="Facebook"
              href="https://www.facebook.com/people/Paurush-Artwani/pfbid0Q6zvzkYCdbzufnuktnkkKWm6Qt2M9euCX2yNpqA4MikDcQWhkWgBPMNNpJFTXtRRl/"
            >
              <BsFacebook />
            </a>
            &nbsp;
          </div>
        </div>
        <div className="col-md-12 text-center  p-3">
          <p className="mb-0 text-center  ">Copyright © Akshay Jain</p>
        </div>
      </Footer>
    </>
  );
};
const Footer = styled.div`
  svg {
    font-size: 30px;
    color: #004b91;
  }
  .socials {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 60px;
    text-align: center;
    background: #d2d2d26b;
    padding: 14px;
    transition: 0.6s;
    box-shadow: 0 5px 4px rgba(0, 0, 0, 0.5);
    margin-right: 6px;
  }
  .socials:hover {
    transform: translate(0, -10px);
  }
  .social-media-links {
    margin-top: -40px;
  }
`;
export default Copyright;
