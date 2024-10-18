import React from "react";

const SignInPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-3 pt-16">
          <h1 className="font-bold text-2xl text-[#2E2A47]">Welcome Back!</h1>
          <p className="text-base text-[#7E8CA0]">
            Sign in to get back to your dashboard!
          </p>
        </div>
        <div className="flex items-center justify-center mt-8 ">
          {/* <SignInForm /> */}
        </div>
      </div>
      <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
        Finance
      </div>
    </div>
  );
};

export default SignInPage;
