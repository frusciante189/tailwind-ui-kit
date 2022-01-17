import React from "react";

const cta03 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center">
          <h2 className="font-bold text-4xl text-slate-700">
            Create a lnading page with ease
          </h2>
          <p className="max-w-md mx-auto mt-5 leading-7 text-slate-800">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="max-w-2xl mx-auto mt-10 p-8 rounded-3xl overflow-hidden bg-zinc-100">
          <div className="grid sm:grid-cols-3 grid-cols-1 text-center gap-x-12 gap-y-10">
            <div>
              <div className="mx-auto h-28 w-28 flex items-center justify-center border rounded-3xl border-gray-300 bg-white shadow-md">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                  alt=""
                  className="h-8 w-8"
                />
                <span className="font-bold text-[42px] inline-flex ml-1 text-slate-800">
                  C
                </span>
              </div>
              <p className="font-medium mt-4 text-sm text-slate-600">
                Copy and code you want
              </p>
            </div>
            <div>
              <div className="mx-auto h-28 w-28 flex items-center justify-center border rounded-3xl border-gray-300 bg-white shadow-md">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                  alt=""
                  className="h-8 w-8"
                />
                <span className="font-bold text-[42px] inline-flex ml-1 text-slate-800">
                  V
                </span>
              </div>
              <p className="font-medium mt-4 text-sm text-slate-600">
                Paste the code
              </p>
            </div>
            <div>
              <div className="mx-auto h-28 w-28 flex items-center justify-center border rounded-3xl border-gray-300 bg-white shadow-md">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/7/command-symbol.svg"
                  alt=""
                  className="h-8 w-8"
                />
                <span className="font-bold text-[42px] inline-flex ml-1 text-slate-800">
                  R
                </span>
              </div>
              <p className="font-medium mt-4 text-sm text-slate-600">
                Publish your website
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:flex sm:items-center sm:justify-center flex-shrink-0 sm:space-x-5">
          <a
            href="/"
            className="inline-flex items-center justify-center border-2 rounded-xl px-8 py-3 border-gray-300 text-slate-800 font-bold sm:w-auto w-full hover:bg-slate-900 hover:text-slate-200 transition-all duration-200 ease-in-out transform hover:border-transparent"
          >
            See it in action
          </a>
          <div className="relative sm:mt-0 mt-5 inline-flex sm:w-auto w-full group">
            <div className="gradient absolute -inset-px transform rotate-180 opacity-70 blur-lg filter duration-1000 group-hover:opacity-100"></div>
            <a
              href="/"
              className="relative sm:w-auto w-full inline-flex items-center justify-center rounded-xl bg-slate-800 text-slate-200 border-2 border-transparent px-8 py-3 font-bold transition-all ease-in-out duration-150 hover:opacity-90"
            >
              Get Rareblocks
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta03;
