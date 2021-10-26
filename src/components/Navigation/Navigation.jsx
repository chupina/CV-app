import React, { useEffect } from "react";
import "./Navigation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/fonts/iconsLib";
import { Link, Events } from "react-scroll";

const navigationData = [
  { text: "About me", icon: "faUser", path: "about" },
  { text: "Education", icon: "faGraduationCap", path: "education" },
  { text: "Experience", icon: "faPen", path: "experience" },
  { text: "Skills", icon: "faGem", path: "skills" },
  { text: "Portfolio", icon: "faBriefcase", path: "portfolio" },
  { text: "Contacts", icon: "faPaperPlane", path: "contacts" },
  { text: "Feedbacks", icon: "faComment", path: "feedbacks" },
];

const SCROLL_DURATION = 500;

const Navigation = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {});
    Events.scrollEvent.register("end", function () {});
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  return (
    <nav>
      <ul className="navigation">
        {navigationData.map(({ icon, text, path }) => (
          <li className="navigation__item" key={path}>
            <Link
              activeClass="navigation__link_active"
              className="navigation__link"
              to={path}
              spy
              smooth
              duration={SCROLL_DURATION}
              offset={-150}
            >
              <span className="icon">
                <FontAwesomeIcon icon={icons[`${icon}`]} />
              </span>
              <span className="navigation__text">{text}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
