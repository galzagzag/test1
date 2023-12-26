import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center p-4 font-bold bg-pink-300">
      <div>
        <button onClick={() => navigate('/')}>Logo</button>
      </div>
      <div className="flex w-full justify-end">
        <button className="p-4" onClick={() => navigate('/SignIn')}>
          sign In
        </button>
        <button className="p-4">sign up</button>
        <button className="p-4">contact us</button>
      </div>
    </div>
  );
}
