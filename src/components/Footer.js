import React from 'react'
import styled from 'styled-components'
import {IoMdCall } from "react-icons/io";
import {IoLocationSharp } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaInstagram,FaPinterestP,FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
<FooterWrapper>
<footer>
  <div class="footer-content-wrapper container">
    <div class="footer-col large-25 small-50 tiny-100 ta-l flt">
      <h1>Wodo</h1>
      <p className="location common"><IoLocationSharp className="icon"/> <span>Wodo, Rawalpindi, Pakistan</span></p>
      <p className="common"><IoMdCall className="icon"/> <span>+923161114727</span></p>
    </div>
     <div class="footer-col large-25 small-50 tiny-100 ta-l flt">
      <h3>Quick Links</h3>
       <div className="link-list">
        <NavLink className="nav-link">Home</NavLink>
        <NavLink className="nav-link">About</NavLink>
        <NavLink className="nav-link">Shop</NavLink>
        <NavLink className="nav-link">Contact</NavLink>
       </div>
    </div>
    <div class="footer-col large-25 small-50 tiny-100 ta-l flt">
      <h3>Others</h3>
        <NavLink className="nav-link">Term & Conditions</NavLink>
        <NavLink className="nav-link">Policy</NavLink>
        <NavLink className="nav-link">Map</NavLink>
        
    </div>
    <div class="footer-col large-25 small-50 tiny-100 ta-l flt">
      <h3>Social Links</h3>
      <div className="social-list">
        <NavLink className="social-icon-cont p"><FaFacebookF/></NavLink>
        <NavLink className="social-icon-cont p"><FaInstagram/></NavLink>
        <NavLink className="social-icon-cont p"><FaPinterestP/></NavLink>
        <NavLink className="social-icon-cont p"><FaLinkedinIn/></NavLink>
      </div>
    </div>
  </div>
  <div class="clearfix"></div>
</footer>
  
  </FooterWrapper>

    </>
  )
}

const FooterWrapper=styled.div`

/* body,h1,h2,h3,h4 {
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,p,a {
  text-decoration: none;
  color: black;
  font-family: PT Sans, sans-serif;
} */
footer{
    /* background: #bbb; */
    width: 100%;
    height: 45vh;
    /* background: #bbb; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px !important;
    /* margin-top: 0px !important; */
    /* background: #bbb; */
}
a{
    text-decoration: none;
}
.footer-col a {
  color: rgba(0,0,0,0.75);
}
.common{
    margin: 1rem 0 !important;
    display: flex !important;
    align-items: center !important;
    /* margin-right: 1rem !important; */
}
.icon{
   font-size: 1.4rem;
}

/* .content {
  
  background: greenyellow !important;
} */
.nav-link{
     margin: 1rem 0 !important;
}
.footer-content-wrapper {
  width: 100%;
  margin: 1em auto;  
}

.footer-col {
  /* display: inline-block; */
  /* display: inline-block; */
  display: block !important;
  padding: 0.5em 0.1em 0.5em 1em;
  box-sizing: border-box;
  border-right: solid 1px #bbb;
}
.social-list{
    display: flex !important;
    justify-content: space-between !important;
    flex-wrap: wrap !important;
}
.social-icon-cont{
    background: ${({theme})=>theme.colors.firstcolor};
    color: ${({theme})=>theme.colors.fourthcolor} !important;
    width: 40px !important;
    height: 40px !important;
    border-radius: 50%;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}
.footer-col:nth-child(4) {
  border: none;
}

.ta-l {
  text-align: left;
}
.flt {
  float: left;
}

.flt:nth-child(4):after {
   content: " "; 
   visibility: hidden; 
   display: block; 
   height: 1em; 
   clear: both;
}

.large-25 {
  width: 25%;
}

.footer-col a {
  display: block;
  margin: 0.3em 0;
}

@media (max-width: ${({theme})=>theme.media.mobile}) {
  footer{
    height: 75vh;
   
  }
  .small-50 {
    width: 50%;  
  }
  .footer-col:nth-child(2) {
    border: none;
  }
}

@media (max-width:  ${({theme})=>theme.media.small}) {
  footer{
    height: 120vh;
   
  }
  .tiny-100 {
    width: 100%;
  }
  .footer-col { 
    border: none;
  }
}

`;

export default Footer