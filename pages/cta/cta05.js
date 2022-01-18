import React from "react";

const cta05 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="lg:flex lg:items-center lg:justify-between lg:text-left text-center">
          <h2 className="max-w-xl mx-auto text-4xl lg:mx-0 text-slate-800 lg:pr-8 xl:pr-0 font-bold">
            Get started with Rareblocks. Build landing page fast.
          </h2>
          <div className="sm:flex sm:items-center sm:justify-center lg:justify-end space-x-5 mt-8 lg:mt-0">
            <a
              href="/"
              className="inline-flex items-center justify-center w-full sm:w-auto border-2 rounded-xl border-gray-300 px-6 py-3 font-bold 
              hover:bg-slate-800 transition-all duration-200 transform ease-in-out text-slate-600 hover:text-slate-200 hover:border-slate-800"
            >
              See how it works
            </a>
            <div className="relative inline-flex w-full sm:w-auto sm:mt-0 mt-5 group">
              <div className="gradient w-full h-full absolute -inset-px blur-lg filter rounded-xl opacity-70 duration-1000 group-hover:opacity-100 rotate-180"></div>
              <a
                href="/"
                className="relative inline-flex w-full lg:w-auto items-center justify-center border-2 rounded-xl border-transparent bg-slate-900 text-slate-200 px-6 py-3 font-bold
                group-hover:opacity-90 transition-all duration-200 ease-in-out transform"
              >
                Download Rareblocks
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta05;
