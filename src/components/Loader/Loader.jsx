import React from "react";
import "./Loader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const Loader = () =><div className='wrapper'><FontAwesomeIcon className='loader' icon={faSyncAlt}/></div> ;

export default Loader;