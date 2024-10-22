"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";

const SignIn = () => {
  const { darkMode } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSignIn = async (e : any) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:4000/users/login", {
        email,
        password,
      });

      if (res.status === 200 && res.data.token) {
        // Almacenar el token JWT en localStorage
        localStorage.setItem("token", res.data.token);

        // Redirigir al panel de administración si el usuario es admin
        if (res.data.user.role === "ADMIN") {
          router.push("/admin");
        } else {
          router.push("/");
        }
      } else {
        setError("Invalid email or password.");
      }
    } catch (err) {
      setError("An error occurred while signing in.");
      console.error("Sign-in error:", err);
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-[#D6F4FF] text-black"
      }`}
    >
      <div
        className={`p-10 rounded-lg shadow-lg w-full max-w-lg transition-colors duration-300 ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <h2 className="text-[38px] font-bold text-center font-roboto mt-8">
          Sign in to your account
        </h2>
        <p className={`text-center mb-6 text-xs mt-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Welcome Back
        </p>
        <form className="m-6" onSubmit={handleSignIn}>
          <h1 className={`text-sm mb-2 font-roboto text-[16px] ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            Email Address
          </h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full p-1.5 mb-4 border border-[#1034FF] rounded-md focus:outline-none ${
              darkMode ? "bg-gray-800 text-white focus:ring-2 focus:ring-blue-400" : "bg-white text-black focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />
          <h1 className={`text-sm mb-2 font-roboto text-[16px] ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
            Password
          </h1>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full p-1.5 mb-4 border border-[#1034FF] rounded-md focus:outline-none ${
              darkMode ? "bg-gray-800 text-white focus:ring-2 focus:ring-blue-400" : "bg-white text-black focus:ring-2 focus:ring-blue-500"
            }`}
            required
          />
          {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
          <button
            type="submit"
            className={`w-60 mx-auto text-[18px] font-bold py-2 rounded-lg font-roboto mt-6 block ${
              darkMode ? "bg-green-400 text-black hover:bg-green-500" : "bg-[#05F26C] text-black hover:bg-[#05F26C]"
            }`}
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-6">
          <Link href="/auth/forgot-password" className={`font-bold hover:underline ${darkMode ? "text-blue-300" : "text-[#1034FF]"}`}>
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
