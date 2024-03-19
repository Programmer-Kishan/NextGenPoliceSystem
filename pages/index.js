import Head from "next/head";
import Link from "next/link";
import ComplaintReg from "/components/ComplaintReg";
import Admin from "/components/Admin";
import Button from "react-bootstrap/Button";
import Header from "/components/Header";
import Status from "/components/Status";
import styles from "./index.module.css";
import Features from "/components/features";
import FaqQuestions from "/components/faqQuestions";
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";

export default function Home() {
  const address = useAddress();

  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer");

  return (
    <div className={styles.mainContainer}>
      <Head>
        <title>Complaint App</title>
        <meta name="description" content="This is a police complaint app" />
        <link rel="icon" href="/logoTitle.png" />
      </Head>
      <Header />
      <div className={styles.contentDiv}>
        <div className={styles.tagline}>
          <h2 className={styles.motto}>
            "Secure, Transparent, and Accountable"
          </h2>
          <p className={styles.subHeading}>
            A police complaint system for the 21st century. Making justice
            accessible and transparent through the power of the blockchain.
          </p>
          <Link href="/Complaint">
            <Button className={styles.contentBtn1} variant="light">
              Register Complaint
            </Button>
          </Link>
          <Link href="/StatusCheck">
            <Button className={styles.contentBtn2} variant="light">
              Check status
            </Button>
          </Link>
        </div>
        <img className={styles.mainImg} src="/mainImg2.png" alt="" />
      </div>
      <Features />
      <div className={styles.faq}>
        <FaqQuestions />
      </div>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>
      <df-messenger
        intent="WELCOME"
        chat-title="ComplaintBot"
        agent-id="facd2057-66f2-4b77-a3b1-4ab31f250072"
        language-code="en"
      ></df-messenger>
    </div>
  );
}
