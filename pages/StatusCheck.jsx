import React from 'react'
import Status from '/components/Status'
import Admin from "/components/Admin"
import Header from '/components/Header';
import styles from "./StatusCheck.module.css"
import { useAddress, useContract, useContractRead } from "@thirdweb-dev/react";
import Head from 'next/head';
function StatusCheck() {
  const address = useAddress();

  const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
  const { data: officer } = useContractRead(contract, "officer");

  return (
    <div className={styles.mainDiv}>
      <Header/>
      <Status/>
      {officer === address && <Admin />}
    </div>
  )
}

export default StatusCheck
