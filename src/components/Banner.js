import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Banner = () => {
  return (
    <>
      <BannerWrapper>
        <div
          className="banner"
          style={{
            backgroundImage: `url(${
              process.env.PUBLIC_URL + "/images/banner_large.png"
            })`,
          }}
        >
          <div className="container">
            <div className="banner-txt">
              <h1>Best Interior Collection</h1>
              <p>Free shipping over Rs 50000 for orders</p>
              <NavLink to="/shop" className="shop h3">
                Discover Now
              </NavLink>
            </div>
          </div>
        </div>
      </BannerWrapper>
    </>
  );
};
const BannerWrapper = styled.div`
  .banner {
    /* background: url("/images/slide1.png"); */
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    height: 50vh;
    margin-top: 40px;
  }

  .banner .img-container {
    width: 100% !important;
    height: 100%;
    position: relative;
  }
  .container {
    height: 100%;
    display: flex !important;
    align-items: center !important;
  }
  .banner-txt p {
    margin-top: 0.5rem !important;
    margin-bottom: 2rem;
  }
  .banner-txt .shop {
    text-decoration: none;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.firstcolor};
  }
  @media (max-width: ${({ theme }) => theme.media.tab}) {
    background: url("./images/banner_large.png");
    background-size: cover;
    background-position: left center !important;
    background-repeat: no-repeat;
  }
`;
export default Banner;
