import { createGlobalStyle } from "styled-components";

export const Globalstyle=createGlobalStyle`


  /*  h1:"36px",
    h2:"30px",
    h3:"24px",
    h4:"18px",
    h5:"14px",
    h6:"12px" */

/* html{
        font-size: 16px;
} */

body{
    overflow-x: hidden !important;
}
h1,.h1{
    font-size: 40px !important;
}
h2,.h2{
    font-size: 30px !important;
}
h3,.h3{
    font-size: 24px !important;
}
h4,.h4{
    font-size: 18px !important;
}
h5,.h4{
    font-size: 14px !important;
}
h6,.h5{
    font-size:12px !important;
}

p,.p{
    font-size: 16px !important;
}
.display-1{
    font-size:96px !important;
}
.display-2{
    font-size:88px !important;  
}
.display-3{
    font-size:72px !important; 
}
.display-4{
    font-size:56px !important;
}

.display-1,.display-2,.display-3,.display-4{
    font-weight: 300 !important;
}

.container{
    margin: 3% 5% !important;
    padding: 3% 0 !important;
}

/* img,.img-fluid{
    width: inherit !important;
    height: inherit !important;
} */
.slick-dots li button:before {
     height: 5px;
     width: 25px;
     text-indent: -9999px;
     overflow:hidden; 
}

.btn{
    padding: 6px 12px;
}

`;