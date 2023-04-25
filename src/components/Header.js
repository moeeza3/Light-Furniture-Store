import React from "react";
import styled from "styled-components";
import Nav from "./Nav";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";
import { opencloseMenu } from "../store/slices/commonSlice";
import Cart from "./Cart";

const Header = () => {
  const dispatch = useDispatch();
  const { activatemenu, cartstatus } = useSelector((state) => state.common);
  return (
    <>
      <HeaderWraper>
        <header>
          <div className={`header-container ${activatemenu} ${cartstatus}`}>
            <div className="logo">
              <h1>Wodo</h1>
            </div>
            <button
              type="button"
              onClick={() => dispatch(opencloseMenu())}
              className="h3 btn mobile-btn"
            >
              <RxHamburgerMenu />
            </button>
            <Nav />
          </div>
          <Cart />
        </header>
      </HeaderWraper>
    </>
  );
};

const HeaderWraper = styled.header`
  header {
    position: relative;
    padding: 20px 20px !important;
  }
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 20%;
  }
  .mobile-btn {
    display: none;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.firstcolor};
    background: ${({ theme }) => theme.colors.fourthcolor} !important;
    border: none;
  }
  .nav {
    display: flex;

    width: 80%;
    /* background: red; */
  }
  .nav-container {
    width: 100%;
    /* background: yellow; */
    display: flex;

    /* background: #1A1A1A; */
  }
  .nav .nav-order {
    /* background:pink; */
    display: flex;
    justify-content: space-evenly;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: 0;
  }
  .nav .order1 {
    width: 80%;
  }
  .nav .order2 {
    width: 30% !important;
  }
  .nav .nav-order .nav-list {
    list-style: none !important;
  }
  .nav .nav-link-item,
  .nav-register {
    color: ${({ theme }) => theme.colors.firstcolor};
    text-decoration: none !important;
    display: inline-block;
    position: relative;
  }

  .nav .nav-link-item::before {
    transition: 300ms;
    height: 1.8px;
    content: "";
    position: absolute;
    background-color: ${({ theme }) => theme.colors.firstcolor} !important;
    width: 100%;
    top: 20px;
    opacity: 0;
  }
  .nav-link-item:hover::before {
    bottom: 10px;
    opacity: 1;
  }

  .add-to-cart {
    position: relative !important;
  }
  .nav-icon {
    font-size: ${({ theme }) => theme.fontSize.h4} !important;
  }

  .total-count {
    position: absolute !important;
    top: -12px;
    left: 4px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e76f51;
    color: white;
    font-size: 10px !important;
  }

  @media screen and (max-width: 992px) {
    header {
      position: relative;
    }

    .nav {
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .nav-container {
      display: flex;
      flex-direction: column;
    }
    .nav-cart {
      font-size: 22px !important;
    }
    .total-count {
      top: -2px;
      font-size: 16px !important;
      width: 18px;
      height: 18px;
    }

    .nav-container .nav-order {
      width: 100% !important;
      height: inherit;
      display: flex;
      flex-direction: column;
      justify-content: center !important;
      align-items: center !important;
      font-size: ${({ theme }) => theme.fontSize.h4} !important;
    }

    .nav-container .nav-order .nav-list {
      padding: 0.6rem 0;
      margin: 0.6rem 1.6rem;
    }
    .nav-link-item,
    .nav-register {
      color: ${({ theme }) => theme.colors.fourthcolor} !important;
    }

    .nav-icon .nav-cart {
      color: ${({ theme }) => theme.colors.fourthcolor} !important;
    }

    .nav .nav-link-item::before {
      background-color: ${({ theme }) => theme.colors.fourthcolor} !important;
    }

    .mobile-btn {
      display: flex;
    }

    .close-btn-cont {
      width: 100%;
      margin: 2.5rem 0;
    }
    .btn-close {
      margin-left: 20px;
      background: transparent !important;
      color: ${({ theme }) => theme.colors.fourthcolor};
      font-size: 30px !important;
    }

    .hidemenu .nav {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10;
      background: gray;
      width: 0%;
      height: 100vh;
      visibility: hidden !important;
      transition: 1s linear;
    }
    .showmenu .nav {
      position: fixed;
      top: 0;
      right: 0;
      z-index: 10;
      background: ${({ theme }) => theme.colors.firstcolor} !important;
      width: 100%;
      height: 100vh;
      transition: 1s linear;
    }

    .nav .nav-order .nav-icon .nav-cart {
      /* display: none; */
      /* color: ${({ theme }) => theme.colors.fourthcolor} !important; */
    }
  }
`;

export default Header;
