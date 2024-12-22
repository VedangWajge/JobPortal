import { Badge } from './ui/badge'
import React from 'react'
import { Button } from './ui/button'

const JobDescription = () => {
    const isApplied = true;
    return (
        <div className='max-w-7xl mx-auto my-10'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>12 Positions</Badge>
                        <Badge className={'text-[#F83002] font-bold'} variant={"ghost"}>Part Time</Badge>
                        <Badge className={'text-indigo-600 font-bold'} variant={"ghost"}>24LPA</Badge>
                    </div>
                </div>

                <Button
                    disabled={isApplied}
                    className={`rounded-lg text-white ${isApplied ? "bg-gray-600 cursor-not-allowed hover:bg-gray-700" : "bg-indigo-600 cursor-pointer hover:text-white hover:bg-indigo-700"}`}>
                    {isApplied ? "Already Applied" : "Apply Now"}
                </Button>
            </div>
            <h1 className='font-medium border-b-2 border-b-gray-300 py-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Mumbai</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia.</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>2 yrs</span></h1>
                <h1 className='font-bold my-1'>Salaray: <span className='pl-4 font-normal text-gray-800'>12 LPA</span></h1>
                <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>4</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>17-7-2024</span></h1>
            </div>
        </div>
    )
}

export default JobDescription