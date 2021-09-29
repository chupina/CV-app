import React from "react";
import './Address.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faSkype, faTwitter} from '@fortawesome/free-brands-svg-icons';
const Address =()=>{
  return (<div>
    <address> <FontAwesomeIcon icon={faPhoneAlt} className='media__icon' /><a className='address' href="tel:631-229-2422"><span className='address__title'>631-229-4822</span></a></address>
    <address> <FontAwesomeIcon icon={faEnvelope} className='media__icon' /><a className='address' href="mailto:chupina>elen@gmail.com"><span className='address__title'>chupina.elen@gmail.com</span></a></address>
    <address> <FontAwesomeIcon icon={faTwitter} className='media__icon' /> <a className='address' href="https://www.twitter.com"><span className='address__title'>Twitter</span><span className='address__url'>https://www.twitter.com</span></a></address>
    <address> <FontAwesomeIcon icon={faFacebookF} className='media__icon' /> <a className='address' href="https://www.facebook.com/facebook"><span className='address__title'>Facebook</span><span className='address__url'>https://www.facebook.com/facebook</span></a></address>
    <address> <FontAwesomeIcon icon={faSkype} className='media__icon' /><a className='address' href="skype:echo123?chat"><span className='address__title'>Skype</span><span className='address__url'>Personal.name</span></a></address>
  </div>
    
  )
}

export default Address;