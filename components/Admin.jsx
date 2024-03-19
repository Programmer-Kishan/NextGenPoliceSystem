import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";

const Getter = () => {
    const [id, setId] = useState(0);
    const [rId, setRId] = useState(0);
    const [aRemark, setARemark] = useState("");
    const [rRemark, setRRemark] = useState("");
    const { contract } = useContract(process.env.NEXT_PUBLIC_SMART_CONTRACT);
    const { data: nextId } = useContractRead(contract, "nextId")
    const { data: pendingApprovals } = useContractRead(contract, "pendingApprovals", 0)
    const { data: pendingResolutions } = useContractRead(contract, "pendingResolutions", 0)
    const { mutateAsync: calcPendingApprovalIds } = useContractWrite(contract, "calcPendingApprovalIds")
    const { mutateAsync: calcPendingResolutionIds } = useContractWrite(contract, "calcPendingResolutionIds")

    const { mutateAsync: approveComplaint } = useContractWrite(contract, "approveComplaint")
    const { mutateAsync: resolveComplaint } = useContractWrite(contract, "resolveComplaint")
    const { mutateAsync: discardComplaint } = useContractWrite(contract, "discardComplaint")

    const getPendingApprovals = async () => {
        try {
            const data = await calcPendingApprovalIds([]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const getPendingResolutions = async () => {
        try {
            const data = await calcPendingResolutionIds([]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleApproveComplaint = async () => {
        try {
            const data = await approveComplaint([id, aRemark]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleDeclineComplaint = async () => {
        try {
            const data = await discardComplaint([id, aRemark]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    const handleResolveComplaint = async () => {
        try {
            const data = await resolveComplaint([rId, rRemark]);
            console.info("contract call successs", data);
        } catch (err) {
            console.error("contract call failure", err);
        }
    }

    return (
        <div className='getter-container md:p-[30px]  md:m-5 xl:flex xl:flex-row'>
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Approvals</p>
                <div className='flex items-center mt-3'>
                   
                    <Button variant="light" className="mb-6" onClick={getPendingApprovals}>Next Pending Approval ID</Button>
                    {
                        pendingApprovals && (
                            <p className='getter-card-number'>: {pendingApprovals.toString()}</p>
                        )
                    }
                </div>

                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='p-1 m-1 md:w-[500px] w-[200px] text-black rounded-sm bg-[#fff]' placeholder='Enter Id Here'
                        onChange={(e) => { setId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='p-1 m-1 md:w-[500px] w-[200px] text-black rounded-sm bg-[#fff]' placeholder='Enter Remark Here'
                        onChange={(e) => { setARemark(e.target.value) }} />
                </div>
                <div className='flex'>
                    
                    <Button variant="light" onClick={handleApproveComplaint}>Approve Complaint</Button>
                    <Button variant="light" className='ml-10' onClick={handleDeclineComplaint}>Decline Complaint</Button>
                </div>

            </div>
            <div className='getter-card md:m-5'>
                <p className='getter-card-title'>Pending Resolutions</p>
                <div className='flex items-center mt-3'>
                    
                    <Button variant="light" className="mb-6" onClick={getPendingResolutions}>Next Pending Resolution ID</Button>
                    {
                        pendingResolutions && (
                            <p className='getter-card-number'>: {pendingResolutions.toString()}</p>
                        )
                    }

                </div>

                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Complaint Id: </p>
                    <input type="number" className='getter-input  text-black md:w-[500px]' placeholder='Enter Id Here'
                        onChange={(e) => { setRId(e.target.value) }} />
                </div>
                <div className='md:flex items-center'>
                    <p className='text-2xl font-semibold'>Your Remark: </p>
                    <input type="text" className='getter-input text-black md:w-[500px]' placeholder='Enter Remark Here'
                        onChange={(e) => { setRRemark(e.target.value) }} />
                </div>
                <Button variant="light" className="mb-6" onClick={handleResolveComplaint}>Resolve Complaint</Button>
            </div>

        </div>
    )
}

export default Getter