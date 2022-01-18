import React from "react";

const cta08 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800">
            Join ⚡️ Rareblocks community
          </h2>
          <p className="max-w-md mx-auto mt-5 text-slate-600">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="max-w-lg mx-auto mt-14 relative">
          <div className="absolute -inset-x-2 -inset-y-5">
            <div className="gradient filter blur-lg opacity-30 rotate-180 w-full h-full mx-auto"></div>
          </div>
          <div className="relative">
            <input
              type="text"
              className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-6 "
              placeholder="Enter your email address"
            />
            <div className="sm:absolute sm:inset-y-0 sm:right-0 sm:mt-0 mt-4 sm:flex sm:items-center sm:pr-3">
              <button className="inline-flex items-center justify-center border border-transparent rounded-xl bg-slate-900 text-slate-200 px-8 py-4 font-bold sm:w-auto w-full sm:py-3">
                Get started now
              </button>
            </div>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-slate-800">
          No ads. No trails. No commitments
        </p>
      </div>
    </section>
  );
};

export default cta08;
