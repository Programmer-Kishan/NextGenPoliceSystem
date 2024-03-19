import React from "react";
import styles from "./features.module.css";
function features() {
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.mainHeading}>Key Features</h1>
      <div className={styles.mainDiv}>
        <div className={styles.element}>
          <h1 className={styles.divHeading}>Secure and immutable record-keeping</h1>
          <p className={styles.divContent}>The blockchain provides a secure and tamper-proof way to store and track complaints and related information. This could help to ensure that records are accurate and cannot be altered or deleted.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Smart contracts</h1>
          <p className={styles.divContent}>Smart contracts could be used to automate certain aspects of the complaint process, such as triggering an investigation when certain criteria are met or notifying individuals when their complaints have been resolved.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Online access</h1>
          <p className={styles.divContent}>A police complaint system on the blockchain would likely provide online access to individuals, allowing them to file and track complaints and view related information from any device with an internet connection.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Tracking and reporting</h1>
          <p className={styles.divContent}> The system could include features for tracking the progress of complaints and generating reports on complaint trends and resolutions.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>Encrypted messaging</h1>
          <p className={styles.divContent}> A police complaint system on the blockchain could include encrypted messaging capabilities, allowing individuals to communicate with investigators and other authorities securely.</p>
        </div>
        <div className={styles.element}>
        <h1 className={styles.divHeading}>User authentication</h1>
          <p className={styles.divContent}>To ensure the integrity of the system, it may include measures for verifying the identity of individuals who file complaints and access the system.</p>
        </div>
      </div>
    </div>
  );
}

export default features;
