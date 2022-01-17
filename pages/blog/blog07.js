import React from "react";

const blog07 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-white">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="flex justify-between items-end">
          <div className="flex-1 sm:text-left text-center">
            <h2 className="lg:text-5xl sm:text-4xl text-3xl leading-5 font-bold text-slate-800">
              Latest from blog
            </h2>
            <p className="max-w-xl lg:mx-0 mx-auto mt-4 leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>
          <div className="lg:flex hidden lg:items-center text-gray-500 lg:space-x-2">
            <button className="bg-transparent border rounded flex items-center justify-center w-9 h-9 transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="bg-transparent border rounded flex items-center justify-center w-9 h-9 transition-colors duration-200 ease-in-out hover:bg-blue-500 hover:text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="max-w-md mx-auto lg:mt-16 mt-8 lg:max-w-full grid lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="overflow-hidden shadow rounded">
            <div className="p-5">
              <div className="relative">
                <a href="/" className="aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="absolute top-4 left-4">
                  <span className="uppercase px-4 py-2 text-xs font-semibold tracking-widest bg-white text-slate-700 rounded-full">
                    Lifestyle
                  </span>
                </div>
              </div>
              <span className="text-slate-600 mt-6 font-semibold uppercase tracking-widest text-sm block">
                January 17, 2022
              </span>
              <p className="mt-5 text-2xl font-semibold text-slate-800">
                How to build coffee inside your home in 5 minutes
              </p>
              <p className="mt-4 text-slate-800">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <a
                href="/"
                className="mt-5 inline-flex items-center justify-center font-semibold pb-[2px] border-b-2 border-transparent transition-all ease-in-out duration-200 hover:border-indigo-500 text-indigo-500"
              >
                Continue Reading
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="overflow-hidden shadow rounded">
            <div className="p-5">
              <div className="relative">
                <a href="/" className="aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="absolute top-4 left-4">
                  <span className="uppercase px-4 py-2 text-xs font-semibold tracking-widest bg-white text-slate-700 rounded-full">
                    Marketing
                  </span>
                </div>
              </div>
              <span className="text-slate-600 mt-6 font-semibold uppercase tracking-widest text-sm block">
                January 17, 2022
              </span>
              <p className="mt-5 text-2xl font-semibold text-slate-800">
                Ho7 Tips to run your remote team faster and better.
              </p>
              <p className="mt-4 text-slate-800">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <a
                href="/"
                className="mt-5 inline-flex items-center justify-center font-semibold pb-[2px] border-b-2 border-transparent transition-all ease-in-out duration-200 hover:border-indigo-500 text-indigo-500"
              >
                Continue Reading
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="overflow-hidden shadow rounded">
            <div className="p-5">
              <div className="relative">
                <a href="/" className="aspect-[3/4]">
                  <img
                    src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                </a>
                <div className="absolute top-4 left-4">
                  <span className="uppercase px-4 py-2 text-xs font-semibold tracking-widest bg-white text-slate-700 rounded-full">
                    Productivity
                  </span>
                </div>
              </div>
              <span className="text-slate-600 mt-6 font-semibold uppercase tracking-widest text-sm block">
                January 17, 2022
              </span>
              <p className="mt-5 text-2xl font-semibold text-slate-800">
                Ho7 Tips to run your remote team faster and better.
              </p>
              <p className="mt-4 text-slate-800">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <a
                href="/"
                className="mt-5 inline-flex items-center justify-center font-semibold pb-[2px] border-b-2 border-transparent transition-all ease-in-out duration-200 hover:border-indigo-500 text-indigo-500"
              >
                Continue Reading
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog07;
