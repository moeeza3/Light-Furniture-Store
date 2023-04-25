import React, { useState } from "react";
import styled from "styled-components";
import FsLightbox from "fslightbox-react";
const Singleimage = ({ slideimg }) => {
  const [image, setImage] = useState(0);
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <ImgWrapper>
        <div className="img">
          <div className="imgcontainer">
            <div className="img-preview" onClick={() => setToggler(!toggler)}>
              {slideimg.images ? (
                <img
                  src={process.env.PUBLIC_URL + `/${slideimg.images[image]}`}
                />
              ) : null}
            </div>

            <FsLightbox
              toggler={toggler}
              sources={
                slideimg.images
                  ? slideimg.images.map((cur) => (
                      <img src={process.env.PUBLIC_URL + `/${cur}`} />
                    ))
                  : null
              }
            />
            <div className="smallimg">
              {slideimg.images
                ? slideimg.images.map((cur, index) => {
                    return (
                      <div
                        className="smallimg-container"
                        key={index}
                        onClick={() => setImage(index)}
                      >
                        <img
                          src={process.env.PUBLIC_URL + `/${cur}`}
                          alt={slideimg.name}
                        />
                      </div>
                    );
                  })
                : "null"}
            </div>
          </div>
        </div>
      </ImgWrapper>
    </>
  );
};
const ImgWrapper = styled.div`
  .img {
    width: 500px;
    height: 500px;
  }
  .smallimg {
    width: inherit;
    display: flex;
  }
  .smallimg-container {
    width: 100px;
    height: 100px;
  }
  .smallimg img {
    width: inherit;
    height: inherit;
  }
  .img-preview {
    width: 500px;
    height: 400px;
  }
  .img-preview img {
    width: inherit;
    height: inherit;
  }
`;
export default Singleimage;
