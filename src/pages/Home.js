import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
  const authStatus= useSelector((state)=> state.auth.isAuthenticated)
    console.log(authStatus)
  return (
    <div>Home</div>
  )
}

export default Home