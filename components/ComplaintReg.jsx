import React, { useState } from "react";
import {
  useContract,
  useContractRead,
  useContractWrite,
} from "@thirdweb-dev/react";
import styles from "./ComplaintReg.module.css";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";

const ComplaintReg = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  console.log(process.env);

  const contractABI = [
    {
      type: "constructor",
      name: "",
      inputs: [
        {
          type: "address",
          name: "_officer",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "event",
      name: "complaintFiled",
      inputs: [
        {
          type: "uint256",
          name: "id",
          indexed: false,
          internalType: "uint256",
        },
        {
          type: "address",
          name: "complaintRegisteredBy",
          indexed: false,
          internalType: "address",
        },
        {
          type: "string",
          name: "title",
          indexed: false,
          internalType: "string",
        },
      ],
      outputs: [],
      anonymous: false,
    },
    {
      type: "function",
      name: "Complaints",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "id",
          internalType: "uint256",
        },
        {
          type: "address",
          name: "complaintRegisteredBy",
          internalType: "address",
        },
        {
          type: "string",
          name: "title",
          internalType: "string",
        },
        {
          type: "string",
          name: "description",
          internalType: "string",
        },
        {
          type: "string",
          name: "approvalRemark",
          internalType: "string",
        },
        {
          type: "string",
          name: "resolutionRemark",
          internalType: "string",
        },
        {
          type: "bool",
          name: "isApproved",
          internalType: "bool",
        },
        {
          type: "bool",
          name: "isResolved",
          internalType: "bool",
        },
        {
          type: "bool",
          name: "exists",
          internalType: "bool",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "approveComplaint",
      inputs: [
        {
          type: "uint256",
          name: "_id",
          internalType: "uint256",
        },
        {
          type: "string",
          name: "_approvalRemark",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "calcPendingApprovalIds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "calcPendingResolutionIds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "calcResolvedIds",
      inputs: [],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "complainer",
      inputs: [],
      outputs: [
        {
          type: "address",
          name: "",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "discardComplaint",
      inputs: [
        {
          type: "uint256",
          name: "_id",
          internalType: "uint256",
        },
        {
          type: "string",
          name: "_approvalRemark",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "fileComplaint",
      inputs: [
        {
          type: "string",
          name: "_title",
          internalType: "string",
        },
        {
          type: "string",
          name: "_description",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "nextId",
      inputs: [],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "officer",
      inputs: [],
      outputs: [
        {
          type: "address",
          name: "",
          internalType: "address",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "pendingApprovals",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "pendingResolutions",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
    {
      type: "function",
      name: "resolveComplaint",
      inputs: [
        {
          type: "uint256",
          name: "_id",
          internalType: "uint256",
        },
        {
          type: "string",
          name: "_resolutionRemark",
          internalType: "string",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "setOfficerAddress",
      inputs: [
        {
          type: "address",
          name: "_officer",
          internalType: "address",
        },
      ],
      outputs: [],
      stateMutability: "nonpayable",
    },
    {
      type: "function",
      name: "solvedCases",
      inputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      outputs: [
        {
          type: "uint256",
          name: "",
          internalType: "uint256",
        },
      ],
      stateMutability: "view",
    },
  ];

  const { contract } = useContract(
    "0x2Dd9E6EE0A0623F5ed879e920654E82b06426907",
    contractABI
  );
  console.log(contract);
  const { data: nextId } = useContractRead(contract, "nextId");
  console.log(nextId)
  const { mutateAsync: fileComplaint } = useContractWrite(
    contract,
    "fileComplaint"
  );
  console.log(fileComplaint);

  const handleComplaint = async () => {
    const notification = toast.loading("Filing Complaint");
    // console.log(title, description, contact);
    try {
      const data = await fileComplaint([title, description]);
      toast.success(`Complaint Filed! Note Your ComplaintId:${nextId}`, {
        id: notification,
      });
      console.info("contract call successs", data);
      setTitle("");
      setDescription("");
      setContact("");
    } catch (err) {
      toast.error("Whoops, something went wrong!", {
        id: notification,
      });
      console.error("contract call failure", err);
    }
  };

  return (
    <div className="complaint-container md: mr-[50px] md:ml-[50px]">
      <p className="complaint-title-red">File Your Complaint Here:</p>
      <div className="md:flex items-center">
        <p className="complaint-text-margin">Title: </p>
        <input
          type="text"
          className="container-input1 md:w-[500px] w-[300px]"
          placeholder="Enter Title Here"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="md:flex items-center">
        <p className="complaint-text-normal">Description: </p>
        <input
          type="text"
          className="container-input2 md:w-[500px] w-[300px]"
          placeholder="Enter Description Here"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
      </div>
      <div className="md:flex items-center">
        <p className="complaint-text-normal2">Contact Details: </p>
        <input
          type="text"
          className="container-input3 md:w-[500px] w-[300px]"
          placeholder="Enter Mobile No / Email ID Here"
          onChange={(e) => {
            setContact(e.target.value);
          }}
        />
      </div>
      {/* <button className="button-common hover:bg-blue-900" onClick={handleComplaint}>File Complaint</button> */}
      <Button
        onClick={handleComplaint}
        className={styles.submitBtn}
        variant="light"
      >
        File Complaint
      </Button>
    </div>
  );
};

export default ComplaintReg;
