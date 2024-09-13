import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser, getData } from '../Redux/slice'
import QuickView from './QuickView'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Allpost = () => {
  const [array, setarray] = useState([])
  const [view, setview] = useState()
  const dispatch = useDispatch()
  const { data } = useSelector(state => state.Data)
  const [rangeValue, setrangeValue] = useState(20)
  const [selectedGender, setselectedGender] = useState("All")

  useEffect(() => {
    dispatch(getData())
  }, [])

  useEffect(() => {
    if (data && data.length > 0) {
      setarray(data)
    }
  }, [data])

  const handleAll = (e) => {
    setarray(data)
    setselectedGender("All")
  }

  const handleMale = () => {
    setarray(data.filter((e, i) => {
      return e.gender === "Male"
    }))
    setselectedGender("Male")
  }

  const handleFemale = () => {
    setarray(data.filter((e, i) => {
      return e.gender === "Female"
    }))
    setselectedGender("Female")
  }


  const search = (e) => {
    setarray(data.filter((ele, i) => {
      return ele.name.toLowerCase().includes(e.target.value.toLowerCase())
        || ele.email.toLowerCase().includes(e.target.value.toLowerCase())
    }))
  }

  const handleDelete = (id) => {
    console.log(id, "all post id")
    dispatch(deleteUser(id))
    toast.success("Data deleted successfully",
      {
        position: "top-center",
        autoClose: 1000,
      }
    )
  }

  const handleView = (e) => {
    setview(e)
    console.log(e, "EEEEEEEe")
  }

  const handleRange = (e) => {
    setrangeValue(e.target.value)
    setarray(data.filter((ele, i) => {
      return ele.age > e.target.value
    }))
  }

  const customRange = (e) => {
    setrangeValue(e.target.value)
    setarray(data.filter((ele, i) => {
      return ele.age > e.target.value
    }))
  }


  console.log(selectedGender)
  console.clear()
  console.log(rangeValue, "rangeValue")
  console.log(array, "Array")

  return (
    <>
      <div><ToastContainer /></div>
      <div>

        <div className=' bg-gray-200 p-3'>

          <div className='w-full lg:h-[80px] lg:flex justify-center items-center sticky top-0 z-20 bg-[#E5E7EB]'>
            <div className='flex flex-wrap items-center justify-between'>

              <div className=' md:flex'>
                <div className=''>
                  <label htmlFor="">All</label>
                  <input checked={selectedGender === "All"} onChange={handleAll} type="radio" name="radioBtn" className='ml-1' />
                  <label htmlFor="" className='ml-4'>Male</label>
                  <input checked={selectedGender === "Male"} onChange={handleMale} type="radio" name="radioBtn" className='ml-1' />
                  <label htmlFor="" className='ml-4'>Female</label>
                  <input checked={selectedGender === "Female"} onChange={handleFemale} type="radio" name="radioBtn" className='ml-1' />
                </div>

                <div>
                  <label htmlFor="" className='md:ml-9'>Age</label>
                  <input min={20} max={100} value={rangeValue} type="range" onChange={handleRange} className='ml-2' />
                  <input onChange={customRange} type="text" value={rangeValue} className='bg-white w-[50px] text-center rounded-[5px] ml-2 h-[30px] mt-2 md:mt-0' />
                </div>
              </div>

              <div className=' md:flex mt-4 lg:mt-0'>
                <div className='flex relative ml-0 lg:ml-6'>
                  <div className='absolute top-1 left-3'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </div>
                  <div className='w-full'>
                    <input onChange={search} type="text" placeholder='Search by Name and Email' className='w-[290px] px-9 py-1 text-gray-500 rounded-full' />
                  </div>
                </div>

                <Link to="/">
                  <button className='px-2 py-1 mt-4 md:mt-0 ml-0 md:ml-5 text-white rounded cursor-pointer bg-[#64B4D4]'>Create Post</button>
                </Link>
              </div>
            </div>
          </div>



          {
            array && array.length > 0 ?

              <div class="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
                <div className='overflow-auto'>
                  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">


                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" class="px-6 py-3">
                          Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Email
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Age
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Gender
                        </th>
                        <th scope="col" class="px-6 py-3">
                          City
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Country
                        </th>
                        <th scope="col" class="px-6 py-3">
                          Actions
                        </th>
                      </tr>
                    </thead>


                    <tbody>

                      {

                        array.map((e, i) => {
                          return (
                            <>
                              <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td class="px-6 py-4 text-nowrap">
                                  {e.name}
                                </td>
                                <td class="px-6 py-4">
                                  RS.{e.email}
                                </td>
                                <td class="px-6 py-4 text-nowrap">
                                  {e.age}
                                </td>
                                <td class="px-6 py-4 text-nowrap">
                                  {e.gender}
                                </td>
                                <td class="px-6 py-4 text-nowrap">
                                  {e.city}
                                </td>
                                <td class="px-6 py-4 text-nowrap">
                                  {e.country}
                                </td>
                                <td class="px-6 py-4 flex">
                                  <i onClick={() => handleView(e)} class="cursor-pointer text-green-500 fa-solid fa-eye"></i>
                                  <i onClick={() => handleDelete(e.id)} class="cursor-pointer text-red-500 ml-3 fa-solid fa-trash"></i>
                                  <Link to={`/updateform/${e.id}`}>
                                    <i class="cursor-pointer text-blue-600 ml-3 fa-solid fa-pen"></i>
                                  </Link>
                                </td>
                              </tr>
                            </>
                          )
                        })

                      }


                    </tbody>
                  </table>
                </div>

                {/* <div className='w-full flex justify-end mt-5'>
                  <div className='flex items-center mr-3'>
                    <button onClick={first} className='bg-[rgb(252,185,53)] text-white px-2 py-1 rounded'>First</button>
                    <i onClick={previous} class="fa-solid fa-chevron-left cursor-pointer ml-3"></i>
                    <p className='ml-2'>{pageNumber}</p>
                    <i onClick={next} class="fa-solid fa-chevron-right ml-3 cursor-pointer"></i>
                    <button onClick={last} className='bg-[rgb(252,185,53)] text-white px-2 py-1 ml-3 rounded'>Last</button>
                  </div>
                </div> */}

              </div>

              :
              <>
                <div className='p-5 text-2xl font-[500]'>User not found</div>
              </>
          }




        </div>

        {view && <QuickView object={view} setview={setview} />}

      </div>
    </>
  )
}

export default Allpost