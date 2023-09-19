import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";





let api_url = "https://wtsacademy.dedicateddevelopers.us/api/user/signup";


export const regData = createAsyncThunk("post/sign_up",
    async (formData) => {
        // console.log(formData);
        const res = await axios.post(api_url, formData, {
            headers:
            {
                "Content-Type": "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin': "*"
            }

        });
        return res?.data
    });



let login_api_url = "https://wtsacademy.dedicateddevelopers.us/api/user/signin";


export const logData = createAsyncThunk("post/logData",
    async (formdata) => {
        console.log(formdata);
        const res = await axios.post(login_api_url, formdata, {
            headers:
            {
                "Content-Type": "application/x-www-form-urlencoded",
                'Access-Control-Allow-Origin': "*"
            }
        });
        return res?.data;
    }
)

const intial_value = {
    isloading: false,
    status: 0,
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    message: "",
    errMsg: "",
    authToken: ""

}

export const authSlice = createSlice({
    name: "data",
    initialState: intial_value,

    extraReducers: (builder) => {

        builder.addCase(regData.pending, (state, action) => {
            state.isloading = true;
        })

        builder.addCase(regData.fulfilled, (state, action) => {
            console.log("action regdata:", action);

            state.isloading = false;
            state.status = action.payload.status;
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.data.last_name;
            state.email = action.payload.data.email;
            state.message = action.payload.message
        })

        builder.addCase(regData.rejected, (state, action) => {
            state.isloading = false;
        })

/////  for log in 


        builder.addCase(logData.pending, (state, action) => {
            state.isloading = true;

        })

        builder.addCase(logData.fulfilled, (state, action) => {
            console.log("log in action :", action);
            state.isloading = false;
            state.email = action.payload.data.email;
            state.authToken = action.payload.data.token;
            window.sessionStorage.setItem('token', action.payload.token);
            window.sessionStorage.setItem('email',action.payload.data.email)
        })
        builder.addCase(logData.rejected, (state, action) => {
            state.isloading = false;
        })

    }
})

export default authSlice.reducer