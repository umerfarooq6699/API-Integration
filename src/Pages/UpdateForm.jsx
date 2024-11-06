import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../Redux/slice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateForm = () => {
    const [obj, setobj] = useState({})
    const { id } = useParams()
    const { data } = useSelector(state => state.Data)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInput = (e) => {
        setobj({ ...obj, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        setobj(data.find((e, i) => {
            return e.id === id
        }))
    }, [])


    const handleUpdate = (e) => {
        e.preventDefault()
        dispatch(updateUser(obj))
        toast.success("User updated successfully",
            {
                position:"top-center",
                autoClose:1000,
            }
        )
        setTimeout(() => {
            navigate("/allpost")
        }, 1800);
    }

    console.log(obj)

    return (
        <>
            <div><ToastContainer/></div>
            <div className='w-full h-screen background'>
                <Navbar />
                <div className='flex h-[90vh] justify-center items-center px-2'>
                    <div className='w-[300px] md:w-[350px] p-5 rounded-xl bg-white'>


                        <form class="max-w-md mx-auto">
                        <div class="relative z-0 w-full mb-5 group">
                            <input value={obj?.name} onChange={handleInput} type="text" name="name" id="name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input value={obj?.email} onChange={handleInput} type="email" name="email" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input value={obj?.age} onChange={handleInput} type="text" name="age" id="age" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="age" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Age</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input value={obj?.city} onChange={handleInput} type="text" name="city" id="city" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="city" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input value={obj?.country} onChange={handleInput} type="text" name="country" id="country" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="country" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Country</label>
                        </div>
                        <div className='mb-5'>
                            <p className='mb-2 text-sm text-gray-500 dark:text-gray-400'>Gender</p>
                            <div className='flex items-center'>
                                <input checked={obj?.gender === "Male"} onChange={handleInput} type="radio" name="gender" value="Male" id="male" className='' />
                                <label htmlFor="male" className='ml-1'>Male</label>

                                <input checked={obj?.gender === "Female"} onChange={handleInput} type="radio" name="gender" value="Female" id="female" className='ml-2' />
                                <label htmlFor="female" className='ml-1'>Female</label>
                            </div>
                        </div>

                        <button onClick={handleUpdate} type="submit" class="text-white bg-[#64B4D4] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateForm