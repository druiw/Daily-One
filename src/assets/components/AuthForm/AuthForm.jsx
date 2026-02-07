import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ mode }) => {
  const isLogin = mode === "login";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Todo: Prevent user from going to home page with only an email

    navigate("/home");

    //send to backend
    const endpoint = isLogin ? "/login" : "/signup";
    const res = await fetch(`http://localhost:5000${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-full max-w-md mx-auto bg-white rounded-2xl shadow p-8"
    >
      <p className="mt-2 text-xl md:text-lg font-medium text-black">
        {isLogin ? "Welcome back" : "Create your journal"}
      </p>

      <div class="flex flex-col gap-10">
        {/* input fields */}
        <div class="flex flex-col gap-5">
          <div>
            <p className="text-sm text-gray-600">Email</p>
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <p className="text-sm text-gray-600">Password</p>
            <input
              type="password"
              placeholder="*********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
        {/* end of input fields */}

        <button className="bg-green-600 rounded-2xl py-3 text-white">
          {isLogin ? "Log In" : "Sign Up"}
        </button>

        <p className="text-center text-sm">
          {isLogin ? "New here?" : "Already have an account?"}{" "}
          <Link
            to={isLogin ? "/signup" : "/login"}
            className="text-green-600 font-medium"
          >
            {isLogin ? "Sign Up" : "Log In"}
          </Link>
        </p>
      </div>
    </form>
  );
};

export default AuthForm;
