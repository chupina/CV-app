import React, { useEffect } from "react";
import styles from "./Navigation.module.scss";
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
// const scrollTo = ()=>{
//   scroller.scrollTo('scroll-to-element', {
//     duration: 800,
//     delay: 0,
//     smooth: 'easeInOutQuart'
//   })
// }
// const scrollToWithContainer = ()=> {

//   let goToContainer = new Promise((resolve, reject) => {

//     Events.scrollEvent.register('end', () => {
//       resolve();
//       Events.scrollEvent.remove('end');
//     });

//     scroller.scrollTo('scroll-container', {
//       duration: 800,
//       delay: 0,
//       smooth: 'easeInOutQuart'
//     });

//   });

//   goToContainer.then(() =>
//     scroller.scrollTo('scroll-container-second-element', {
//       duration: 800,
//       delay: 0,
//       smooth: 'easeInOutQuart',
//       containerId: 'scroll-container'
//     }));
// }


  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="About me" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={styles.navigation__text}>About me</span>
            </Link>
        </li>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="Education" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <span className={styles.navigation__text}>Education</span>
            </Link>
        </li>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="Experience" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faPen} />
            </span>
            <span className={styles.navigation__text}>Experience</span>
            </Link>
        </li>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="Skills" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span className={styles.navigation__text}>Skills</span>
            </Link>
        </li>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="Portfolio" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faBriefcase} />
            </span>
            <span className={styles.navigation__text}>Portfolio</span>
            </Link>
        </li>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="Contacts" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span className={styles.navigation__text}>Contacts</span>
            </Link>
        </li>
        <li className={styles.navigation__item}>
        <Link activeClass={styles.navigation__link_active} className={styles.navigation__link} to="Feedbacks" spy={true} smooth={true} duration={500}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className={styles.navigation__text}>Feedbacks</span>
            </Link>
        </li>
        
          
      </ul>
    </nav>
  );
};
