import React from "react";
import "./Address.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from '../../assets/fonts/iconsLib'
const contactData = [
  {id:"1",address:"tel:+16312294822", title:"(631) 229-4822", icon:'faPhoneAlt'},
  {id:"2",address:"mailto:chupina>elen@gmail.com", title:"chupina.elen@gmail.com", icon:'faEnvelope'},
  {id:"3",address:"https://www.twitter.com", title:"Twitter", subtitle:"https://www.twitter.com", icon:'faTwitter'},
  {id:"4",address:"https://www.facebook.com", title:"Facebook", subtitle:"https://www.facebook.com", icon:'faFacebookF'},
  {id:"5",address:"skype:echo123?chat", title:"Skype", subtitle:"my.name",icon:'faSkype'},
]
  

const Address = () => {
  return (
    <div>
      {
        contactData.map(({id, title, address, icon, subtitle})=>{
          return(
            <address key={id}>
            <FontAwesomeIcon icon={icons[`${icon}`]} className="media__icon" />
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
