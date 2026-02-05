import React from "react";
import "./AuthPage.css";
import AuthForm from "../AuthForm/AuthForm";
import { Sprout } from "lucide-react";

const AuthPage = () => {
  return (
    <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-[rgb(249,249,249)]">
      <div className="mb-4 flex items-center justify-center rounded-full bg-green-50 p-4">
        <Sprout className="h-14 w-14 text-green-600" />
      </div>

      <div className="text-center mb-10">
        <p className="text-4xl font-light tracking-tight text-gray-900">
          One Question a Day
        </p>
        <h3 className="mt-1 text-base md:text-lg font-light text-gray-500">
          Reflect, one day at a time
        </h3>
      </div>
      <AuthForm />
    </div>
  );
};

export default AuthPage;
