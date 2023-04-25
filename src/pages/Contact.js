import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

import Footer from "../components/Footer";
const Contact = () => {
  return (
    <ContactWrapper>
      <div className="contact">
        <div className="breadcrumb">
          <div className="breadcrumb-container">
            <h1 className="display-3">Contact</h1>
            <p>
              <span className="home-txt">
                <NavLink className="nav-link">Home</NavLink>
              </span>
              <span className="slash">/</span>
              <span className="contact-txt">Contact</span>
            </p>
          </div>
        </div>

        <div className="contact-container">
          <div className="info">
            <div className="info-col">
              <div className="info-icon">
                <AiOutlinePhone className="icon-dir icon-txt h2" />
              </div>
              <div className="info-txt">
                <div className="info-title h3">Phone Number</div>
                <p>(504) 586 256 23</p>
                <p>(306) 574 326 56</p>
              </div>
            </div>
            <div className="info-col">
              <div className="info-icon">
                <AiOutlineMail className=" icon-txt h2" />
              </div>
              <div className="info-txt">
                <div className="info-title h3">Our Email</div>
                <p>office@Wodo.com</p>
                <p>Info@Wodo.com</p>
              </div>
            </div>
            <div className="info-col">
              <div className="info-icon">
                <GrLocation className=" icon-txt icon-loc h2" />
              </div>
              <div className="info-txt">
                <div className="info-title h3">Our Location</div>

                <p className="address">
                  1102 Helen Estates, Guys <br />
                  Store, San Diego, USA.
                </p>
              </div>
            </div>
          </div>

          <div className="form-container">
            <form className="form">
              <input
                type="text"
                className="customer-name form-input"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="customer-email form-input"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="customer-website form-input"
                placeholder="Your Website"
              />
              <textarea
                className="customer-message form-text-area"
                placeholder="Your Message"
              ></textarea>
              <input
                type="button"
                value="Send Message"
                className="form-btn p"
              />
            </form>
          </div>
        </div>
        <Footer />
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.section`
  .breadcrumb {
    width: 100% !important;
    height: 50vh !important;
    display: flex !important;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.thirdcolor};
  }

  .nav-link {
    text-decoration: none !important;
    color: ${({ theme }) => theme.colors.firstcolor};
  }
  .breadcrumb .slash {
    margin: 0 0.7rem;
    font-style: italic;
  }
  .contact-txt {
    color: ${({ theme }) => theme.colors.secondcolor} !important;
  }
  .breadcrumb-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-container {
    padding: 3% 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info {
    width: 100% !important;
    height: 100% !important;

    padding: 1rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-col {
    width: 30%;
    display: flex;
    justify-content: center;
    padding: 1rem 0;
  }

  .icon-dir {
    transform: scaleX(-1) !important;
  }
  .info-icon {
    margin-right: 1rem;
  }

  .info-title,
  .icon-txt {
    color: ${({ theme }) => theme.colors.firstcolor};
  }
  .info-col p {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.secondcolor};
  }
  .address {
    line-height: 1.5rem;
  }
  .form-container {
    width: 100% !important;
    height: 100% !important;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .form-input {
    width: 100%;
    height: 3.5rem;
  }

  .form-text-area {
    width: 100%;
    height: 8rem;
  }
  .form-input,
  .form-text-area {
    font-size: 16px;
    border: none;
    border-bottom: 2px solid ${({ theme }) => theme.colors.firstcolor};
    outline: none;
    color: ${({ theme }) => theme.colors.firstcolor};
    margin-bottom: 2rem !important;
  }
  .form-btn {
    width: 100% !important;
    height: 4rem;
    background: ${({ theme }) => theme.colors.firstcolor};
    color: ${({ theme }) => theme.colors.fourthcolor};
    border: none;
    outline: none;
    text-transform: uppercase;
  }
  /* @media (max-width: ${({ theme }) => theme.media.desktop}) {
    

   } */
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    .contact-container {
      padding: 3% 2%;
    }
    .info {
      flex-flow: column wrap !important;
      justify-content: space-around !important;
      align-items: center !important;
    }
    .info-col {
      width: 100% !important;
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      text-align: center;
    }
  }

  /* @media (max-width: ${({ theme }) => theme.media.mobile}) {
  } */
`;

export default Contact;
