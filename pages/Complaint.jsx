import React from 'react'
import ComplaintReg from '/components/ComplaintReg'
import Header from '/components/Header'
import styles from "./Complaint.module.css"
function Complaint() {
  return (
    <div className={styles.mainDiv}>
        <Header/>
        <div className={styles.complaintDiv}>
        <ComplaintReg/>
        </div>
        
    </div>
  )
}

export default Complaint