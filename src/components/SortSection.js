import React,{useEffect} from 'react'
import styled from 'styled-components';
import { RiLayoutGridFill } from "react-icons/ri";
import { FaThList } from "react-icons/fa";
import { useSelector, useDispatch} from 'react-redux';
import { sorting,sortproducts,changeLayout } from '../store/slices/filterSlice';
const SortSection = () => {
   const dispatch=useDispatch();
  const {sorting_value,grid,filterProducts,showingCount,filters,show}=useSelector(state=>state.filter)

  useEffect(()=>{
    dispatch(sortproducts());
  },[sorting_value])
  
  // const checkVal=()=>{
    // if(filterProducts.length>6){
    //   console.log("showing: "+showingCount+" of "+filterProducts.length)
    // } else{
    //   console.log("showin all "+filterProducts.length+" Prodcuts")
    // }  

      //  {filterProducts.length>=8? }


  // }

  // useEffect(()=>{
  // checkVal();
  // },[filters])
    
  return (
    <>
        <SortWrapper>
            <div className="sort">
                <div className="sort-container">
                    <div className="layout">
                      <button className="layout-icon-grid layout-icon p" >
                        <RiLayoutGridFill onClick={()=>dispatch(changeLayout(true))}/>
                      </button>
                      <button className="layout-icon-list layout-icon p" onClick={()=>dispatch(changeLayout(false))}>
                        <FaThList />
                      </button>
                    </div>
                    <div className="count-show">
                      {/* <p>Showing: {filterProducts.length>=6?{{filterProducts?1:0} to {showingCount} of {filterProducts.length}:{filterProducts.length}}</p> */}
                      {/* <p>Showing: {filterProducts.length>=6?<span>{}</span>}</p> */}
                     {filterProducts.length>=6 ?<div>
                      <div>Showing: <span>{filterProducts?1:0}</span><span> to </span>{showingCount} of {filterProducts.length}</div>
                     </div>:<div>
                      <div>Showing all {filterProducts.length} Products</div>
                     </div>}

                    </div>
                   <div className="select">
                        <form>
            <select name="sort" id="sort" className="p form-select sort-select" onClick={(e)=>{
              let val=e.target.value;
              dispatch(sorting(val));
            }}>
            <option value="lowest">Price (lowest)</option>
            
            <option value="highest">Price (highest)</option>
            
            <option value="a-z">Product (a-z)</option>
           
            <option value="z-a">Product (z-a)</option>
            <option value="popularity">Popularity</option>
                            </select>
                        </form>
                    </div> 
                    
                </div>
            </div>
        </SortWrapper>
    </>
  )
}
const SortWrapper=styled.div`
 
  .sort{
      width: inherit !important;
      height: inherit !important;
     
  }

  .sort-container{
      display:flex !important;
      justify-content: space-between !important;
      align-items: center !important;
  }
  .layout{
     display: flex;

  }
  .layout-icon{
    display: flex;
    justify-content: center;
    align-items:center;
    padding: 0.6rem 1.2rem !important;
    color: ${({theme})=>theme.colors.firstcolor} !important;
    background: ${({theme})=>theme.colors.fourthcolor} !important;
    border: 1px solid ${({theme})=>theme.colors.secondcolor};

  }
  .layout-icon-list{
    margin-left: 1rem;
  }
  .select{
    width: 200px !important;
    
  }
  .select .sort-select{
    width: 100% !important;
    padding: 0.6rem 1rem !important;
    
  }

  @media screen and (max-width: ${({theme})=>theme.media.tab}) {
    
    .sort{
       width: 100% !important;
    }

  }

  @media screen and (max-width: ${({theme})=>theme.media.small}) {
    
    .sort{
       width: 100% !important;
    }
    .sort-container{
      display:flex !important;
      flex-direction: column;
      justify-content: center !important;
      align-items: center !important;
  }
  .count-show{
    margin: 1rem 0;
  }

  }

  /* .sort{
    width: 100%;
  }
  .sort-container{
    display: flex;
    justify-content: space-between;
  }
  
  .layout{
    display: flex;
    
    font-size: 20px;
  }
  .layout-icon{
      display: flex;
      justify-content: center;
      align-items: center;
      background: #90e0ef;
      color: #1d3557;
      padding: 10px 15px;
      margin: 0 15px;
  }
  .select{
    margin: 0 15px;
  }
  .sort-select{
    width: 200px;
    padding: 10px 15px;
    outline: none;
  }
  .sort-select option{
    padding: 15px !important;
  } */

`;
export default SortSection