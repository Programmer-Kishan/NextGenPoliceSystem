import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import styles from "./faqQuestions.module.css";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2 className={styles.mainHeading}>Frequently asked Questions ( FAQ )</h2>
      <AnimateSharedLayout>
        <Toggle title="What is Next gen Police Complaint system?  ⬇️">
          <div className="answer">
            <p className={styles.answers}>
              In a Next Gen police complaint system using blockchain technology,
              individuals may be able to file a complaint through an online
              platform, and the complaint and any related information would be
              recorded on the blockchain. This record could be accessed and
              verified by authorized parties, such as the police department and
              the individual who filed the complaint, allowing for greater
              transparency and accountability in the complaint process.
            </p>
          </div>
        </Toggle>
        <Toggle title="How does the website work? ⬇️">
          <div className="answer">
            <p className={styles.answers}>
              The specific details of how a police complaint system using
              blockchain technology would work will depend on the specific
              system being implemented and the needs and goals of the police
              department or agency using it. However, here is a general overview
              of how such a system might operate:
              <br /> <br /> An individual files a complaint through an online
              platform, providing information about the incident and any
              relevant details.
              <br /> <br />
              The complaint and related information are recorded on the
              blockchain, creating a secure and transparent record of the
              complaint.
              <br /> <br /> The police department reviews the complaint and
              takes appropriate action, such as launching an investigation or
              providing assistance to the individual who filed the complaint.
              <br /> <br />
              The status of the complaint and any actions taken in response to
              it are recorded on the blockchain, allowing for real-time tracking
              of the complaint process.
              <br /> <br />
              The individual who filed the complaint, as well as authorized
              parties such as the police department, can access and verify the
              information recorded on the blockchain, ensuring transparency and
              accountability in the complaint process.
            </p>
          </div>
        </Toggle>
        <Toggle title="Uses of the website ⬇️">
          <div className="answer">
            <p className={styles.answers}>
              There are several potential uses for blockchain technology in a
              police complaint system. Some potential benefits of using
              blockchain technology in a police complaint system include:
            </p>
            <p className={styles.answers}>
              Increased transparency: By using blockchain technology to record
              and manage the complaint process, it is possible to create a
              transparent and tamper-proof record of all complaints filed and
              the actions taken in response to them. This can help to increase
              accountability and trust in the complaint process.
              <br /> <br />
              Enhanced security: Blockchain technology is highly secure and
              difficult to alter, which can help to protect the confidentiality
              and integrity of the complaint process.
              <br /> <br />
              Greater efficiency: Blockchain technology can automate certain
              aspects of the complaint process, such as tracking the status of a
              complaint or verifying the authenticity of a complaint, which can
              help to streamline the process and reduce the workload for police
              department staff.
              <br /> <br />
              Improved accessibility: An online platform using blockchain
              technology could potentially allow individuals to file complaints
              from any location, making it more convenient for individuals to
              report incidents and seek assistance.
            </p>
          </div>
        </Toggle>
        <Toggle title="Why is the above technology more efficient? ⬇️">
          <div className="answer">
            <p className={styles.answers}>
              There are several potential reasons why a police complaint system
              using blockchain technology could be more efficient than other
              types of systems. Some potential benefits of using blockchain
              technology in a police complaint system include:
              <br /> <br /> Enhanced security: Blockchain technology is highly
              secure and difficult to alter, which can help to protect the
              confidentiality and integrity of the complaint process. This can
              reduce the risk of data breaches or tampering, which can be
              time-consuming and costly to address.
              <br /> <br /> Automation: Blockchain technology can automate
              certain aspects of the complaint process, such as tracking the
              status of a complaint or verifying the authenticity of a
              complaint. This can reduce the workload for police department
              staff and improve the efficiency of the complaint process.
              <br /> <br />
              Improved accessibility: An online platform using blockchain
              technology could potentially allow individuals to file complaints
              from any location, making it more convenient for individuals to
              report incidents and seek assistance. This can reduce the need for
              in-person visits to police stations, which can save time and
              resources.
              <br /> <br />
              Increased transparency: By using blockchain technology to record
              and manage the complaint process, it is possible to create a
              transparent and tamper-proof record of all complaints filed and
              the actions taken in response to them. This can help to increase
              accountability and trust in the complaint process, which can
              improve the overall efficiency of the system.
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  background-color: black;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
