import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function SignIn(props) {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [userNameValidate, setUserNameValidate] = useState(false);
  const [passwordValidate, setPasswordValidate] = useState(false);
  const user = 'dolev';
  const pass = 'dolev123';
  const handleSubmit = () => {
    if (userName === user) {
      if (password === pass) {
        props.setUser(userName);
        navigate('/');
      } else {
        setPasswordValidate(true);
        setTimeout(() => {
          setPasswordValidate(false);
        }, 5000);
      }
    } else {
      setUserNameValidate(true);
      setTimeout(() => {
        setUserNameValidate(false);
      }, 5000);
    }
  };
  return (
    <div className="p-4 mt-10 grid justify-center">
      <h1>Sign in</h1>
      <input
        dir="rtl"
        type="text"
        className="border-2 rounded-lg border-black p-2 mt-4"
        placeholder="שם משתמש"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <label className={`text-red-400 ${userNameValidate ? '' : 'hidden'}`}>
        username is not exist
      </label>
      <input
        dir="rtl"
        type="password"
        className="border-2 rounded-lg border-black p-2 mt-4"
        placeholder="סיסמא"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <label className={`text-red-400 ${passwordValidate ? '' : 'hidden'}`}>
        password is not correct
      </label>
      <button
        onClick={handleSubmit}
        className="bg-blue-300 rounded-lg px-4 py-2 mt-4 "
      >
        send
      </button>
         
    </div>
  );
}
