import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import { useSelector } from 'react-redux'

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector(store => store.job);
  return (
    <div className=''>
      <Table>
        <TableCaption>A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {
            allAppliedJobs.length <= 0 ? <span>You haven't applied for any job yet</span> : allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob._id}>
                <TableCell className="font-medium">{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="font-medium">{appliedJob?.job?.title}</TableCell>
                <TableCell className="font-medium">{appliedJob?.job?.company?.name}</TableCell>
                <TableCell className="text-right"><Badge className={`text-white ${appliedJob?.status === "rejected" ? 'hover:bg-red-600 hover:text-white bg-red-400' : appliedJob.status === 'pending' ? 'hover:bg-gray-600 hover:text-white bg-gray-400' : 'hover:bg-green-600 hover:text-white bg-green-400'}`}>{appliedJob.status.toUpperCase()}</Badge></TableCell>
                </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable