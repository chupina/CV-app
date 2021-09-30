import React, { useEffect } from "react";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faPen, faPaperPlane, faGem, faBriefcase, faComment,  } from "@fortawesome/free-solid-svg-icons";
import { Link,Events, animateScroll as scroll,} from 'react-scroll';

export const Navigation = () => {
useEffect(()=>{
  Events.scrollEvent.register('begin', function () {
    console.log("begin", arguments);
  });

  Events.scrollEvent.register('end', function () {
    console.log("end", arguments);
  });

  return ()=>{
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

});

// const scrollToTop = () =>{
//   scroll.scrollToTop();
// }
  return (
    <nav>
      <ul className='navigation'>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="About me" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className='navigation__text'>About me</span>
        </Link>
        </li>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="Education" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <span className='navigation__text'>Education</span>
        </Link>
        </li>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="Experience" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faPen} />
            </span>
            <span className='navigation__text'>Experience</span>
        </Link>
        </li>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="Skills" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span className='navigation__text'>Skills</span>
        </Link>
        </li>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="Portfolio" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <span className='navigation__text'>Portfolio</span>
        </Link>
        </li>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="Contacts" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span className='navigation__text'>Contacts</span>
        </Link>
        </li>
        <li className='navigation__item'>
        <Link activeClass='navigation__link_active' className='navigation__link' to="Feedbacks" spy={true} smooth={true} duration={500}>
            <span className='icon'>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className='navigation__text'>Feedbacks</span>
        </Link>
        </li>
        
       </ul>
    </nav>
  );
};
