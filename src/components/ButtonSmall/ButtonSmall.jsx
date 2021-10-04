import React from "react";
import  './ButtonSmall.scss';

 const ButtonSmall=({clickHandler, children})=><button className='burger'  onClick={clickHandler}>{children}</button>

 export default ButtonSmall;