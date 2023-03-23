import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import styled from "styled-components";
const Star = ({stars}) => {


    const ratingStar= Array.from({ length: 5 }, (elem, index) => {
        // to show stars like 2.5,3.5,4.5
        let number =index+0.5;
    
        return(
            <span key={index}> 
                 {stars >= index + 1 ? (
              <FaStar className="icon fill-icon" />
            ) : stars >= number ? (
              <FaStarHalfAlt className="icon half-icon" />
            ) : (
              <AiOutlineStar className="icon nofill-icon" />
            )}
            </span>
        )
    
      });


  return (
    <>
       <StarWrapper>
        <div className="star-style">
            {/*  */}
            {ratingStar}
        </div>
       </StarWrapper>
    </>
  )
}

const StarWrapper=styled.div`
  .icon{
    margin: 0 0.1rem;
  }
  .fill-icon{
    color: #fcbf49;
  }
  .half-icon{
    color: #fcbf49;
  }

  .nofill-icon{
    color: #fcbf49 !important;
  }
  

`;




export default Star