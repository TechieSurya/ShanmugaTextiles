import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/HomeImg/Logo.png";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  
   const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      const user = userCred.user;

      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().role === 'admin') {
        navigate('/dashboard');
      } else {
        setError('Access denied. Not an admin.');
      }
    } catch (err) {
      console.error(err);
      setError('Login failed. Check credentials.');
    }
  };
  return (
    <div className="min-h-[650px] flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-sm w-full bg-white p-8 rounded-lg shadow">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-4">
          <img src={Logo} alt="Logo" className="h-24 w-28" />
          <p className="text-xl font-semibold bg-gradient-to-r from-[#32754c] to-[#2a469e] bg-clip-text text-transparent italic">
            Shri Shanmuga Textiles
          </p>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-green-800 mb-4">
          Sign in
        </h2>

        {/* Error message */}
        {error && (
          <div className="text-red-600 text-sm text-center mb-3">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Admin Email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin Password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-900 transition"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
