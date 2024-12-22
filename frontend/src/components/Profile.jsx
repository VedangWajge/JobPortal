import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Contact, Mail, Pen } from 'lucide-react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'


const skills = ["Html", "CSS", "Javascript", "Reactjs"];
const isResume = true;

const Profile = () => {
    const { open, setOpen } = useState(false);

    return (
        <div >
            <Navbar />
            <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
                <div className='flex justify-between'>

                    <div className='flex items-center gap-4'>
                        <Avatar className="w-24 h-24">
                            <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" alt="profile/image" />
                        </Avatar>
                        <div>
                            <h1 className='font-med text-xl'>Full Name</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga, asperiores. Ut quod odit quas perferendis?</p>
                        </div>
                    </div>
                    <Button onClick={() => setOpen(true)} className="text-right border-gray-200" variant="outline"><Pen /></Button>
                </div>
                <div className='my-5'>
                    <div className='flex items-center gap-3 my-2'>
                        <Mail />
                        <span>vedang@gmail.com</span>
                    </div>
                    <div className='flex items-center gap-3 my-2'>
                        <Contact />
                        <span>9930015398</span>
                    </div>
                </div>
                <div className='my-5'>
                    <h1>Skills</h1>
                    <div className='flex items-center gap-1'>

                    </div>
                    {
                        skills.length !== 0 ? skills.map((item, index) => <Badge variant="outline" key={index}>{item}</Badge>) : <span>NA</span>
                    }
                </div>
                <div className='grid w-full max-w-sm items-center gap-1.5'>
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target="blank" href="https://youtube.com/@warriorvedangop" className='text-blue-500 w-full hover:underline cursor-pointer'>Resume_VedangWajge</a> : <span>NA</span>
                    }
                </div>
            </div>
            <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
                <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
                {/* Application Table */}
                <AppliedJobTable />

            </div>
            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile