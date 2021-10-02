import React, { useState } from "react";
import "./Inner.scss";
import Box from "../../components/Box/Box";
import TimeLine from "./../../components/TimeLine/TimeLine";
import Expertise from "../../components/Expertise/Expertise";
import { Panel } from "../../components/Panel/Panel";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight} from "@fortawesome/free-solid-svg-icons";
import Portfolio from "../../components/Portfolio/Portfolio";
import data from '../../utils/data';
import ButtonSmall from './../../components/ButtonSmall/ButtonSmall';
import Skills from "../../components/Skills/Skills";


export const Inner = () => {
  const [isOpen, setIsOpen] = useState(true);
  const togglePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='innerPage'>
      <Panel isOpen={isOpen} toggle={togglePanel} />
      <main className={`main__content ${isOpen? 'narrow' : 'wide'} `} >
        <Box title="About me" id="about">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
          augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam
          rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam
          semper libero, sit amet adipiscing sem neque
        </Box>
        <Box title="Education" id="education">
          <TimeLine data={data.education}/>
        </Box >
        <Box title="Experience" id="experience">
          <Expertise data={data.expertise}/>
        </Box>
        <Box title="Skills" id="skills">
          <Skills/>
        </Box>
        <Box title="Portfolio" id="portfolio">
          <Portfolio/>
        </Box>
        <Box title="Contacts" id="contacts">
          <Address />
        </Box>
        <Box title="Feedbacks" id="feedbacks">
          <Feedback
            data={data.feedbacks}
          />
        </Box>
        <div className='scrollUp'>
          <ButtonSmall
        clickHandler={() => {window.scrollTo({ top: 0, behavior: "smooth" });}}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </ButtonSmall>
        </div>
      </main>
    </div>
  );
};
