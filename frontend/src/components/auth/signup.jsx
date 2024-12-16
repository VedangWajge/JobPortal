import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'


const SignUp = () => {
    return (
        <div>
            <Navbar />

            <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
                <form className="w-1/2 border border-gray-200 rounded-lg shadow-lg p-6 bg-white">
                    <h1 className="font-bold text-2xl mb-5 text-gray-800">Sign Up</h1>

                    <div className="mb-4">
                        <Label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </Label>
                        <Input
                            id="fullname"
                            type="text"
                            placeholder="V2W"
                            className="mt-1 w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="v2w@gmail.com"
                            className="mt-1 w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Phone Number
                        </Label>
                        <Input
                            id="phone"
                            type="text"
                            placeholder="v2wxxxxxxxxx"
                            className="mt-1 w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>

                    <div className="mb-4">
                        <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter your password"
                            className="mt-1 w-full border-gray-300 rounded-md p-2 focus:ring focus:ring-indigo-300 focus:outline-none"
                        />
                    </div>

                    <div className="mb-6 flex items-center justify-between" >
                        <RadioGroup className="flex space-x-6">
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="student"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="student" className="text-gray-700">
                                    Student
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input
                                    type="radio"
                                    name="role"
                                    value="recruiter"
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter" className="text-gray-700">
                                    Recruiter
                                </Label>
                            </div>
                        </RadioGroup>

                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input accept="image/*" type="file" className="cursor-pointer" />
                        </div>
                    </div>
                    


                    <div>
                        <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"> Sign Up</Button>
                    </div>

                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>

                </form>
            </div>
        </div>
    );
};

export default SignUp;