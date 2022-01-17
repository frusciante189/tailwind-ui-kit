import React from "react";

const cta04 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center lg:text-left lg:pr-8 lg:w-1/2 w-2/5">
          <p className="text-lg font-medium text-slate-800">
            2,157 people are using
          </p>
          <h2 className="mt-6 font-bold text-3xl lg:text-5xl text-slate-800">
            Rareblocks helps you grow fast
          </h2>
          <ul className="mt-8 lg:mt-16 space-y-5">
            <li className="flex items-center lg:justify-start text-slate-800">
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
            <li className="flex items-center lg:justify-start text-slate-800">
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
            <li className="flex items-center lg:justify-start text-slate-800">
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
          <div className="mt-8 lg:mt-16 flex flex-col sm:flex-row items-center lg:justify-start sm:space-x-5">
            <a
              href="/"
              className="relative inline-flex w-48 sm:w-auto items-center justify-center rounded-xl border-2 border-transparent bg-slate-900 px-8 py-3 font-bold text-slate-200 hover:bg-slate-800 transition-all ease-in-out duration-200 transform"
            >
              Get Rareblocks
            </a>
            <a
              href="/"
              className="mt-5 sm:mt-0 inline-flex items-center justify-center w-48 border-2 rounded-xl px-8 py-3 border-slate-500 text-slate-800 font-bold hover:bg-slate-900 hover:text-slate-200 transition-all ease-in-out duration-200 transform hover:border-transparent"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 lg:absolute lg:bottom-0 lg:right-0 lg:translate-y-8 lg:translate-x-96 xl:translate-x-56 translate-x-12">
        <div className="relative">
          <div className="absolute -inset-2">
            <div className="gradient mx-auto h-full w-full opacity-30 blur-lg filter"></div>
          </div>
          <div className="relative">
            <div className="lg:static lg:pb-0 aspect-[16/12]">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/8/illustration-old.png"
                alt=""
                className="w-full h-full object-cover object-left-top lg:max-w-4xl lg:inset-auto lg:static lg:w-auto lg:h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta04;
