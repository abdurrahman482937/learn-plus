import React from "react";

const Register = ({ handleRegister, setIsLogin }) => {
  return (
    <div>
      <input type="checkbox" id="my_modal_8" className="modal-toggle" />
      <div className="modal bg-white text-black" role="dialog">
        <div className="modal-box">
          <label
            htmlFor="my_modal_8"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x-icon lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </label>

          <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white text-gray-800">
            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handleRegister} className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-default-600 border focus:ring-0"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="email" className="block text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-default-600 border focus:ring-0"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="password" className="block text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 rounded-md border-gray-300 bg-white text-gray-800 focus:border-default-600 border focus:ring-0"
                  required
                />
              </div>
              <div className="flex max-h-16 items-center gap-5">
                <button
                  type="button"
                  className="cursor-pointer underline block w-full p-3 text-center rounded-sm text-[#165BC7]"
                  onClick={() => setIsLogin(true)}
                >
                  have an account?
                </button>
                <button
                  type="submit"
                  className="cursor-pointer block w-full p-3 text-center rounded-sm text-black bg-gray-200"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
