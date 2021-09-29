import React from "react";
import styles from "./Inner.module.scss";
import Box from "../../components/Box/Box";
import TimeLine from "./../../components/TimeLine/TimeLine";
import Expertise from "../../components/Expertise/Expertise";
import { Panel } from "../../components/Panel/Panel";
import Address from "../../components/Address/Address";
import Feedback from "../../components/Feedback/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { Burger } from "../../components/Burger/Burger";
import Card from "../../components/Card/Card";
import Portfolio from "../../components/Portfolio/Portfolio";

export const Inner = () => {
  return (
    <div className={styles.innerPage}>
      <Panel />
      <main className={styles.main__content}>
        <Box title="About me">
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
        <Box title="Education">
          <TimeLine
            data={[
              {
                date: 2001,
                title: "Title 0",
                text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.",
              },
              {
                date: 2010,
                title: "Title 1",
                text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.",
              },
              {
                date: 2012,
                title: "Title 2",
                text: "Labore esse tempor ",
              },
            ]}
          />
        </Box>
        <Box title="Experience">
          <Expertise
            data={[
              {
                date: "2013-2014",
                info: {
                  company: "Google",
                  job: "Front-end developer / php programmer",
                  description:
                    " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
                },
              },
              {
                date: "2012",
                info: {
                  company: "Twitter",
                  job: "Web developer",
                  description:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
                },
              },
            ]}
          />
        </Box>
        <Box title="Portfolio">
                   <Portfolio/>
        </Box>
        <Box title="Contacts">
          <Address />
        </Box>
        <Box title="Feedbacks">
          <Feedback
            data={[
              {
                feedback:
                  " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor",
                reporter: {
                  photoUrl:
                    'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg"',
                  name: "John Doe",
                  citeUrl: "https://www.citeexample.com",
                },
              },
            ]}
          />
        </Box>
        <Burger
          clickHandler={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </Burger>
      </main>
    </div>
  );
};
