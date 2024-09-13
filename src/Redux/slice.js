import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postData=createAsyncThunk("post data",async(obj)=>{
    const value=await axios.post("https://66d1927762816af9a4f4200e.mockapi.io/crud",obj)
    return value.data
})

export const getData=createAsyncThunk("get data",async()=>{
    const value=await axios.get("https://66d1927762816af9a4f4200e.mockapi.io/crud")
    return value.data
})


export const deleteUser=createAsyncThunk("delete user",async(id)=>{
    console.log(id,"createAsyncThunk")
    const value=await axios.delete(`https://66d1927762816af9a4f4200e.mockapi.io/crud/${id}`)
    return id
})

export const updateUser=createAsyncThunk("update data",async(obj)=>{
    const value=await axios.put(`https://66d1927762816af9a4f4200e.mockapi.io/crud/${obj.id}`,obj)
    return value.data
})



const dataSlice=createSlice({
    name:"Form",
    initialState:{
        notification:"",
        data:[]
    },
    reducers:{
        // postData:(state,action)=>{
        //     console.log(action.payload,"slice data")
        // }
        emptyNotification:(state,action)=>{
            state.notification=""
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(postData.fulfilled,(state,action)=>{
            console.log(action.payload,"createasyncthunk")
            state.notification="Data send successfully"
        })
        .addCase(getData.fulfilled,(state,action)=>{
            console.log(action.payload,"get data")
            state.data=action.payload
        })
        .addCase(deleteUser.fulfilled,(state,action)=>{
            console.log(action.payload,"delete payload")
            state.data=state.data.filter((e,i)=>{
                return e.id != action.payload
            })
        })
        .addCase(updateUser.fulfilled,(state,action)=>{

        })
    }
})
export const {emptyNotification}=dataSlice.actions
export default dataSlice.reducer