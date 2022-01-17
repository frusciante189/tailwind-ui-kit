import React from "react";

const cta01 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4 bg-zinc-100 rounded-[24px]">
        <div className="py-8 px-10 md:py-20 lg:px-24">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-bold lg:text-5xl sm:text-4xl text-3xl">
              Create any landing page with Rareblocks
            </h2>
          </div>
          <ul className="mt-8 sm:mt-12 lg:mt-16 flex md:flex-row flex-col justify-center items-center md:space-x-12 space-y-6 md:space-y-0">
            <li className="flex items-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold ml-3 text-lg">150+ UI Blocks</span>
            </li>
            <li className="flex items-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold ml-3 text-lg">Fully Responsive</span>
            </li>
            <li className="flex items-center">
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
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="font-bold ml-3 text-lg">Just Copy & Paste</span>
            </li>
          </ul>
          <div className="sm:mt-12 mt-8 text-center">
            <div className="inline-flex relative group">
              <div className="gradient absolute -inset-px filter blur-lg rounded-xl opacity-70 duration-1000 transition-colors transform ease-in-out group-hover:opacity-100"></div>
              <a
                href="/"
                className="relative inline-flex items-center justify-center rounded-xl border border-transparent px-9 py-[14px] font-bold bg-zinc-900 text-white"
              >
                Get Rareblocks
              </a>
            </div>
          </div>
          <p className="mt-5 text-sm text-center">No credit card required</p>
        </div>
      </div>
    </section>
  );
};

export default cta01;
