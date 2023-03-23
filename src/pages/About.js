import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { GiFlexibleLamp,GiDesk,GiFlowerPot,GiPolarBear,GiCrossMark,GiHandSaw } from "react-icons/gi";
import { FaFacebookF,FaTwitter,FaPinterestP,FaLinkedinIn,FaGooglePlusG,FaInstagram } from "react-icons/fa";
import Footer from '../components/Footer';
const About = () => {
  return (
    <>
      <AboutWrapper>
        <div className="about">
          <div className="breadcrumb">
            
                <div className="breadcrumb-container">
                  <h1 className="display-3">About</h1>
                  <p><span className="home-txt"><NavLink className="nav-link">Home</NavLink></span><span className="slash">/</span><span className="about-txt">About</span></p>
                </div>
            
          </div>

          <div className="about-container">
            <div className="about-row">
              <div className="about-col col-1">
                <p className="display-4 about-titles">Wodo-Modern Furniture</p>
                <p className="para-1">Wodo is more than just an online furniture store. We hand pick and curate the best in quality and style for you and your home.Why spend days driving from store to store trying to find that perfect look or unique piece. Find everything you’re looking for and more from the comfort of your own home.</p>
               <h3 className="about-titles">Functionality meets perfection</h3>
               <p className="para-2">But I must explain to you how all this mistaken idea of denouncing sure and praising pain was born and I will give you a complete at the system, expound the actual teachings of the great of the truth, the human happiness was born. teachings of the great of the truth</p>
              </div>
              <div className="about-col col-2">
                <img src="./images/slide1.png" alt="about"/>
              </div>
            </div>
          </div>

           <div className="why-choose">
              <div className="why-choose-txt">
                <p className="h1">Why Should Choose Us?</p>
              </div>  
              <div className="choose-container">
                 <div className="unique-design col">
                    <div className="choose-icon">
                      <GiFlexibleLamp className="display-4"/>
                    </div>
                    <div className="choose-txt">
                      <h3>Unique Design</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit est ipsa quia dicta reprehenderit.</p>
                    </div>
                 </div>
                 <div className="warranty-policy col">
                 <div className="choose-icon">
                      <GiPolarBear className="display-4"/>
                    </div>
                    <div className="choose-txt">
                      <h3>Good Wararanty Policy</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit est ipsa quia dicta reprehenderit.</p>
                    </div>
                 </div>
                 <div className="handcraft-quality col">
                 <div className="choose-icon">
                      <GiHandSaw className="display-4"/>
                    </div>
                    <div className="choose-txt">
                      <h3>Handcrafted Quality</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit est ipsa quia dicta reprehenderit.</p>
                    </div>
                 </div>
                 <div className="dedicated col">
                 <div className="choose-icon">
                      <GiDesk className="display-4"/>
                    </div>
                    <div className="choose-txt">
                      <h3>Dedicated Support</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit est ipsa quia dicta reprehenderit.</p>
                    </div>
                 </div>
                 <div className="features col">
                 <div className="choose-icon">
                      <GiFlowerPot className="display-4"/>
                    </div>
                    <div className="choose-txt">
                      <h3>Amazing Features</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit est ipsa quia dicta reprehenderit.</p>
                    </div>
                 </div>
                 <div className="easy-customize col">
                 <div className="choose-icon">
                      <GiCrossMark className="display-4"/>
                    </div>
                    <div className="choose-txt">
                      <h3>Easy Customized</h3>
                      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae impedit est ipsa quia dicta reprehenderit.</p>
                    </div>
                 </div>

              </div>
           </div> 
             
             <div className="team">
              <div className="our-team-txt">
                <p className="team-text h1">Meet Our Team</p>
              </div>
              <div className="team-container">
                 <div className="our-team team-col">
                  <div className="our-team-img">
                    <img src="./images/team-03.png" alt="ceo/founder"/>
                    <div className="icon-overlay">
                      <div className="icon">
                        <FaFacebookF className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaInstagram className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaPinterestP className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaTwitter className="icon-txt"/>
                      </div>
                    </div>
                  </div>
                  <div className="our-team-container">
                  <h3>Florence Moreno</h3>
                  <p>CEO / Founder</p>
                  </div>
                 </div>
                 <div className="our-team team-col">
                  <div className="our-team-img">
                    <img src="./images/team-02.png" alt="art director"/>
                    <div className="icon-overlay">
                      <div className="icon">
                        <FaFacebookF className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaInstagram className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaPinterestP className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaTwitter className="icon-txt"/>
                      </div>
                    </div>
                  </div>
                  <div className="our-team-container">
                  <h3>Maude Norman</h3>
                  <p>Art Director</p>
                  </div>
                 </div>
                 <div className="our-team team-col">
                  <div className="our-team-img">
                    <img src="./images/team-01.png" alt="manager"/>
                    <div className="icon-overlay" >
                      <div className="icon">
                        <FaFacebookF className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaInstagram className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaPinterestP className="icon-txt"/>
                      </div>
                      <div className="icon">
                        <FaTwitter className="icon-txt"/>
                      </div>
                    </div>
                  </div>
                  <div className="our-team-container">
                  <h3>Jonathan Henry</h3>
                  <p>Manager</p>
                  </div>
                 </div>
              </div>
             </div>
             <Footer/>
        </div>
      </AboutWrapper>
    </>
  )
}
const AboutWrapper=styled.section`
  .about{
    /* background: darkkhaki !important; */
  }
  .breadcrumb{
    width: 100% !important;
    height: 50vh !important;
    /* background: silver; */
    display: flex !important;
    justify-content: center;
    align-items: center;
    background:  ${({theme})=>theme.colors.thirdcolor};
  }
  .nav-link{
    text-decoration: none !important;
    color: ${({theme})=>theme.colors.firstcolor};
  }
  .breadcrumb .slash{
      margin: 0 0.7rem;
      font-style: italic;
  }
  .about-txt{
    color: ${({theme})=>theme.colors.secondcolor} !important;
  }
  .breadcrumb-container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .about-container,.why-choose{
    padding:3% 5% !important;
   
  }
  .about-row{
    height: 70vh;
    display: flex;
    justify-content: space-between;
  }
  .col-1{
    width: 60%;
    height: 100%;
   
    display: flex;
    flex-flow: column wrap;
    justify-content: space-around;
  }
  .col-2{
    width: 40%;
    height: 100% !important;
  }
  .col-2 img{
     width: 100% !important;
     height: 100% !important;
     object-fit: fill;
  }
  .about-container{
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }
  .para-1,.para-2{
    letter-spacing: 1px;
    line-height: 2rem;
    /* margin-top: 1rem;
    margin-bottom: 1rem; */
    margin-top: -1.5rem;
  }
  .why-choose{
    width: 100%;
    height: 100vh !important;
    
    display: flex !important;
    flex-direction:column;
    justify-content: center;
    align-items: center;
   
  }
  .choose-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
 
  .col{
    width: calc(100%/3.2);
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    margin: 1rem 0;
  }
  .choose-icon{
    width: 100%;
    text-align: center;
    padding: 0.5rem 0;
    color: ${({theme})=>theme.colors.secondcolor};
  }
  .choose-txt{
    text-align: center;
    padding: 0.5rem 0;
  }
  .choose-txt h3{
    margin-bottom: 1rem;
    font-weight: 500;
  }

  .choose-txt p{
    line-height: 1.3rem;
    color: ${({theme})=>theme.colors.secondcolor};
    text-align: center;
  }

   .team{
    width: 100%;
    height: 100vh !important;
    display: flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   
  
   }
   .team-container{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
   }
   .team-col{
    width: 400px;
    height: 450px;
    margin: 1rem 0;
    margin-left: 0.8rem;
    margin-right: 0.8rem;
    /* background: blanchedalmond; */
   }
   .our-team-img{
    position: relative !important;
    width: 100%;
    height: 350px;
    background: red;
    transition: ease-in 0.4s;
   }
   .our-team-img img{
    width: inherit;
    height: inherit;
    
   }
  
   .our-team-container{
       display: flex !important;
       flex-direction: column;
       align-items: center;
       justify-content: center;
       height: 100px;
       
   }

   .our-team-container h3{
      margin-bottom: 0.7rem;
      font-weight: 400;
      color: ${({theme})=>theme.colors.firstcolor};
   }

   .our-team-container p{
      color: ${({theme})=>theme.colors.secondcolor};
   }
   .icon-overlay{
    position: absolute;
    bottom: 8px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    opacity: 0;
    transition: ease-in-out 0.5s;
   }
  .team .icon{
      margin: 0 0.5rem;
      width: 30px;
      height: 30px;
      border: 1px solid ${({theme})=>theme.colors.fourthcolor};
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${({theme})=>theme.colors.fourthcolor};
      transition: ease-in 0.4s;
   }

   .icon:hover{
    background: red;
   }
   .our-team-img:hover{
     opacity: 0.9;
  
   }
  
   .our-team-img:hover .icon-overlay{
      opacity: 1;
      
   }
   @media (max-width: ${({theme})=>theme.media.desktop}) {
    .about-container {
      height: 100% !important;
    }
    .about-container .display-4{
      font-size: 36px !important;
    }
   }
   @media (max-width: ${({theme})=>theme.media.tab}) {
    .about-container{
      height: 100% !important;
      padding:3% 2% !important;
    }
    .para-1,.para-2{
      letter-spacing: 1px;
      line-height: 1.5rem;
    /* margin-top: 1rem;
    margin-bottom: 1rem; */
      margin-top: -1.5rem;
    }
    .team,.why-choose{
      height: 100% !important;

    }
  }
@media (max-width: ${({theme})=>theme.media.mobile}) {
    .about-container{
      display: flex !important;
      flex-direction: column !important;
      height: 100vh !important;
      padding:0 2% !important;
    }
    .about-row{
      flex-direction: column !important; 
      justify-content: center !important;
      align-items: center !important;
      height: inherit;
      margin: 1.5rem 0 !important;
    }
    .para-1,.para-2{
    letter-spacing: 1px;
    line-height: 1.0rem;
    
    margin-top: 0rem;
    }
   
   .col-1{
    width: 100%;
    padding: 1rem 0;
   }
   .display-4{
     font-size:36px !important;
   }
   .col-1 .about-titles{
       margin: 0.5rem 0;
       text-align: center;
   }
   .col-1 .para-1,.col-1 .para-2{
       text-align: center;
   }
   .col-2{
    width: 100%;

   }
   .why-choose{
    padding: 3% 2% !important;
    height: 100% !important;
   
   }
   .why-choose-txt,.our-team-txt{
     margin: 1rem 0;
    
   }
  
   .col{
    width: 50%;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin: 1rem 0;
  }

  .team{
    height: 100% !important;
  }
  .team-container{
    flex-flow: column wrap !important;
    justify-content: center;
   }

  }
  @media (max-width: ${({theme})=>theme.media.small}) {
    .why-choose{
    padding: 3% 2% !important;
    
   }
   .col{
    width: 100%;
  }




  }


`;
export default About