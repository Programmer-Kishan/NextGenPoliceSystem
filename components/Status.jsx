import React, { useState } from 'react'
import { useContract, useContractRead } from "@thirdweb-dev/react";

const Status = () => {
    const [id, setId] = useState(0);
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
    const { contract } = useContract("0x73BE7B3D5c0050dC11F7461CFdC89e096FFeA383", contractABI);
    console.log(contract);
    const { data: Complaints } = useContractRead(contract, "Complaints", id)
    return (
        <div className='status-container'>
            <div className='status'>
                <p className='status-title'>Check Status of Your Complaint:</p>
                <div className='flex items-center justify-center'>
                    <p className='status-text'>Complaint ID:</p>
                    <input type="number" className='status-input md:w-[300px]' placeholder='Enter Complaint ID'
                        onChange={(e) => {setId(e.target.value) }} />
                </div>
            </div>
            {Complaints && Complaints.title && (
                <div className="status-render-container md:w-[600px]">
                    <p className='status-render-title'>Complaint Details:</p>
                    <p className='status-render-text'>Complaint Id: {(Complaints.id).toString()}</p>
                    <p className='status-render-text'>Complaint Description: {(Complaints.description).toString()}</p>
                    <p className='status-render-text'>Complaint by: {(Complaints.complaintRegisteredBy).toString()}</p>
                    <p className='status-render-text'>Complaint Title: {Complaints.title}</p>
                    <p className='status-render-text'>Approval Status: {Complaints.isApproved ? "Approved" : !Complaints.exists ? "Declined" : "Approval Pending"}</p>
                    <p className='status-render-text'>Approval Remark: {Complaints.approvalRemark}</p>
                    <p className='status-render-text'>Resolution Status: {Complaints.isResolved ? "Resolved" : "Resolution pending"}</p>
                    <p className='status-render-text mb-2'>Resolution Remark: {Complaints.resolutionRemark}</p>
                </div>
            )}

        </div>
    )
}

export default Status