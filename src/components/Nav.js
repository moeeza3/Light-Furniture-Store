import React from 'react';
import { NavLink,useLocation } from 'react-router-dom';
import { GrFavorite,GrCart,GrClose } from "react-icons/gr";
import { useSelector,useDispatch } from 'react-redux';
import { opencloseMenu,opencloseCart } from '../store/slices/commonSlice';
import { AiOutlineClose,AiOutlineShoppingCart } from "react-icons/ai";
const Nav = () => {
  const dispatch=useDispatch();
  const {activatemenu}=useSelector(state=>state.common)
  const {totalCount}=useSelector(state=>state.cart);
  return (
    <>
        
         <nav className="nav respMenu">
         <div className="close-btn-cont">
         <button type="button" className="btn-close mobile-btn" onClick={()=>dispatch(opencloseMenu())} ><AiOutlineClose className="close-icon"/></button>
         </div>
            <div className="nav-container">
              <ul className="nav-order order1">
                <li className="nav-list"><NavLink to="/" className="nav-link-item">Home</NavLink></li>
                <li className="nav-list"><NavLink to="/about" className="nav-link-item">About</NavLink></li>
                <li className="nav-list"><NavLink to="/shop" className="nav-link-item">Shop</NavLink></li>
                <li className="nav-list"><NavLink to="/contact" className="nav-link-item">Contact</NavLink></li>
              </ul>
              <ul className="nav-order order2">
                {/* <li className="nav-listicon nav-list"><NavLink  className="nav-icon"><GrFavorite className="/></NavLink></li> */}
                <li className="nav-listicon add-to-cart nav-list" onClick={()=>dispatch(opencloseCart())}>
                <NavLink className="nav-icon"><AiOutlineShoppingCart className="nav-cart"/><span className="total-count">{totalCount}</span></NavLink></li>
                <li className="nav-list"><NavLink  className="nav-register">Login/Register</NavLink></li>
                
              </ul>
              </div>
          </nav>
        
    </>
  )
}


export default Nav