import axios from 'axios';
import React from 'react'
import { useForm } from "react-hook-form"
import { useAuth } from "../context/AuthProvider"; 
import { Link } from 'react-router-dom';
export default function Login() {
    const {authUser, setAuthUser}=useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
    //   const onSubmit = (data) => console.log(data)
 

    const onSubmit = async(data) => {
        const userInfo = {
          email: data.Email,
          password: data.password, 
        };
        console.log(userInfo); // Check if data is correct
    
      await  axios
          .post("http://localhost:3000/user/login", userInfo)
          .then((res) => {
            if (res.data) {
              alert("Login successful");
            }
    
            localStorage.setItem("ChatifyApp", JSON.stringify(res.data)); // Store correct response data
            setAuthUser(res.data);
          })
          .catch((error) => {
            if (error.response) {
                // If the server responded with an error status
                console.log("Error Response Data: ", error.response.data);
                console.log("Error Status: ", error.response.status);
            
                // Assuming the backend sends specific error messages in `error.response.data.message`
                const errorMessage = error.response.data.message;
            
                if (errorMessage) {
                  // Display the exact error message in the alert
                  alert(`Error: ${errorMessage}`);
                } else {
                  // Default fallback message if no specific error message is found
                  alert('Something went wrong. Please try again.');
                }
              } else if (error.request) {
                // If the request was made but no response was received
                console.log("No Response from Server: ", error.request);
            
                // Show a pop-up for no response error
                alert("Error: No response from the server. Please try again later.");
              } else {
                // Other errors (e.g., network issues, or something wrong in frontend code)
                console.log("Error: ", error.message);
            
                // Show a pop-up for general errors
                alert(`Error: ${error.message}`);
              }
          });
      };
    
    return (
    <div>
       <div className='flex items-center justify-center h-screen' >

<div className='border rounded-lg px-6 py-2'>
    <h1 className='text-center font-semibold'>Chat
        <span className='text-green-500'>App</span></h1>
    <h2 className='font-bold text-white'>Login</h2>
    <form action='' onSubmit={handleSubmit(onSubmit)} className=' py-4 space-y-3 w-96 text-white'>
       
{/* gmail */}

        <label className="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" {...register("Email", { required: true })}  placeholder="Email" />
        </label>
        {errors.Email && <span className='text-red-600 font-semibold'> Email field is required</span>}



{/*  passworfd */}
        <label className="input input-bordered flex items-center gap-2">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd" />
            </svg>
            <input type="password" {...register("password", { required: true })}  placeholder='password'  />
        </label>
        {errors.password && <span  className='text-red-600 font-semibold'> Password field is required</span>}


        <div className='flex justify-between '>
            <h1>  New user ?
            <Link to="/signup"
             className='text-blue-500 cursor-pointer underline'>Signup 
            
            </Link>

            </h1>
            <button type='submit' className='text-right p-1 px-4 rounded-lg cursor-pointer bg-green-500'>Login</button>
        </div>

    </form>
</div>




</div>
    </div>
  )
}
