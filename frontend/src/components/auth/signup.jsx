import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import axios from 'axios'


const SignUp = () => {
    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
      });
    
      const navigate = useNavigate();

      const changeEventHandler = (e) => {
        setInput({...input, [e.target.name]: e.target.value});
      }
    
      const changeFileHandler = (e) => {
        setInput({...input, file:e.target.files?.[0]});
      }

    const submitHandler = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);  
        formData.append("phoneNumber", input.phoneNumber);  
        formData.append("password", input.password);  
        formData.append("role", input.role);  
        console.log(formData);
        if(input.file){
            formData.append("file", input.file);
        }
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData, {
                headers:{
                    "Content-Type": "multipart/form-data"
                },
                withCredentials: true,
            });
            if(res.data.success){
                navigate("/login");
                toast.success(res.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    return (
        <div>
            <Navbar />

            <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
                <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-lg shadow-lg p-6 bg-white">
                    <h1 className="font-bold text-2xl mb-5 text-gray-800">Sign Up</h1>

                    <div className="mb-4">
                        <Label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </Label>
                        <Input
                            id="fullname"
                            type="text"
                            placeholder="Enter your name"
                            value={input.fullname}
                            name="fullname"
                            onChange={changeEventHandler}
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
                            placeholder="Enter your email"
                            value={input.email}
                            name="email"
                            onChange={changeEventHandler}
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
                            placeholder="Enter your number"
                            value={input.phoneNumber}
                            name="phoneNumber"
                            onChange={changeEventHandler}
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
                            value={input.password}
                            name="password"
                            onChange={changeEventHandler}
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
                                    checked={input.role === "student"}
                                    onChange={changeEventHandler}
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
                                    checked={input.role === "recruiter"}
                                    onChange={changeEventHandler}
                                    className="cursor-pointer"
                                />
                                <Label htmlFor="recruiter" className="text-gray-700">
                                    Recruiter
                                </Label>
                            </div>
                        </RadioGroup>

                        <div className='flex items-center gap-2'>
                            <Label>Profile</Label>
                            <Input 
                            accept="image/*" 
                            type="file" 
                            onChange={changeFileHandler}
                            className="cursor-pointer" />
                        </div>
                    </div>
                    


                    <div>
                        <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">Sign Up</Button>
                    </div>

                    <span className='text-sm'>Already have an account? <Link to="/login" className='text-blue-600'>Login</Link></span>

                </form>
            </div>
        </div>
    );
};

export default SignUp;