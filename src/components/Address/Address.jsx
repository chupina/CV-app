import React from "react";
import "./Address.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faSkype,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const contactData = [
  {address:"tel:+16312294822", title:"(631) 229-4822", icon:faPhoneAlt},
  {address:"mailto:chupina>elen@gmail.com", title:"chupina.elen@gmail.com", icon:faEnvelope},
  {address:"https://www.twitter.com", title:"Twitter", subtitle:"https://www.twitter.com", icon:faTwitter},
  {address:"https://www.facebook.com", title:"Facebook", subtitle:"https://www.facebook.com", icon:faFacebookF},
  {address:"skype:echo123?chat", title:"Skype", subtitle:"my.name", icon:faSkype},
]
  

const Address = () => {
  return (
    <div>
      {
        contactData.map(({title, address, icon, subtitle})=>{
          return(
            <address>
            <FontAwesomeIcon icon={icon} className="media__icon" />
            <a className="address" href={address}>
              <span className="address__title">{title}</span>
              {subtitle? <span className="address__url">{subtitle}</span> : <></> }
            </a>
          </address>
          )
        })
      }
     
  </div>
  );
};

export default Address;
