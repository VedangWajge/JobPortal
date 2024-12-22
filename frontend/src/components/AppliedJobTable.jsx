import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'

const AppliedJobTable = () => {
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
            [1, 2, 3, 4].map((job) => (
              <TableRow key={job}>
                <TableCell className="font-medium">01/01/2022</TableCell>
                <TableCell className="font-medium">Frontend Developer</TableCell>
                <TableCell className="font-medium">Google</TableCell>
                <TableCell className="font-medium text-right"><Badge variant={"outline"} className="bg-black text-white">Selected</Badge></TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable