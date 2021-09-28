import React from "react";
import './Address.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser,faEnvelope, faPhoneAlt, faDove, faGrinBeam, faFaucet,  } from "@fortawesome/free-solid-svg-icons";

const Address =()=>{
  return (<div>
    <address> <FontAwesomeIcon icon={faPhoneAlt} /><a href="tel:631-229-2422">631-229-4822</a></address>
    <address> <FontAwesomeIcon icon={faEnvelope} /><a href="mailto:chupina>elen@gmail.com">chupina.elen@gmail.com</a></address>
    <address> <FontAwesomeIcon icon={faDove} /> <a href="https://www.twitter.com">Twitter</a></address>
    <address> <FontAwesomeIcon icon={faFaucet} /> <a href="https://www.facebook.com/facebook">Facebook</a></address>
    <address> <FontAwesomeIcon icon={faGrinBeam} /><a href="skype:echo123?chat">Skype</a></address>
  </div>
    
  )
}

export default Address;