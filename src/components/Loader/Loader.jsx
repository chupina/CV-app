import React from "react";
import "./Loader.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
} from "@fortawesome/free-solid-svg-icons";

const Loader = () => <FontAwesomeIcon className='loader' icon={faSyncAlt}/>;

export default Loader;