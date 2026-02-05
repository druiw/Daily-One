import React, { useState } from "react";
import { Link } from "react-router-dom";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handeSubmit = async (e) => {
    e.preventDefault();

    //send to backend
    const res = await fetch("http://localhost:5173/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  };
  return (
    <div className="flex flex-col gap-5 w-full max-w-md mx-auto bg-white rounded-2xl shadow p-8">
      <p className="mt-2 text-3xl md:text-base font-light text-black">
        Create your journal
      </p>

      <div class="flex flex-col gap-10">
        {/* input fields */}
        <div class="flex flex-col gap-5">
          <div>
            <p class="text-sm text-gray-600">Email</p>
            <input
              type="email"
              placeholder="your@email.com"
              class="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
          <div>
            <p class="text-sm text-gray-600">Password</p>
            <input
              type="password"
              placeholder="*********"
              class="mt-2 w-full rounded-2xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        </div>
        {/* end of input fields */}

        <button class="bg-green-600 rounded-2xl py-3 text-white">
          Sign Up
        </button>

        <p className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
