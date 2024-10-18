import React from "react";

const SignUpPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-3 pt-16">
          <h1 className="font-bold text-2xl text-[#2E2A47]">
            Create your Account
          </h1>
          <p className="text-base text-[#7E8CA0]">
            Sign up to get started with your journey!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 ">
          {/* <SignUpForm /> */}
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        Finance
      </div>
    </div>
  );
};

export default SignUpPage;
