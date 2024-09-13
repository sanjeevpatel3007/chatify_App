import React from 'react'
import Left from './home/leftpart/Left'
import Right from './home/rightpart/Right'
import Signup from './components/Signup'
import Login from './components/Login'
import AuthProvider from './context/AuthProvider'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuth } from "./context/AuthProvider";
import Check from './home/leftpart/Check'

export default function App() {
  const { authUser, setAuthUser } = useAuth();
  return (

    <Routes>
      <Route path="/" element={
        authUser ? (<div className='flex h-screen'>
          <Left />
          <Right />
        </div>
        ) : (
          <Navigate to={"/login"} />
        )

      }
      />
      <Route
        path='/login'
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path='/signup'
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />

      {/* <Route
        path='/userinfo'
        element={<Check/>}
      /> */}


    </Routes>

  )
}