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
                <TableCell className="font-medium text-right">{ appliedJob?.status === "pending" ? <Badge variant={"outline"} className="bg-green-600 text-white" >{appliedJob?.status}</Badge> : <Badge variant={"outline"} className="bg-red-600 text-white" >{appliedJob?.status}</Badge>}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable