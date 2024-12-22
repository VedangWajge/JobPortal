import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RadioGroup } from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { setLoading, setUser } from '@/redux/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Loader2 } from 'lucide-react'

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const { loading } = useSelector(store => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  }


  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-center max-w-7xl mx-auto my-10">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-lg shadow-lg p-6 bg-white">
          <h1 className="font-bold text-2xl mb-5 text-gray-800">Login</h1>

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

          <div className='flex items-center justify-between'>
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
          </div>
          {
            loading ? <Button className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200"><Loader2 className="mr-2 h-4 w-4 animate-spin" />Please wait</Button> : <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-200">Login</Button>
          
          }


          

          <span className='text-sm'>Don't have an account? <Link to="/signup" className='text-blue-600'>Sign Up</Link></span>

        </form>
      </div>
    </div>
  );
};

export default Login;