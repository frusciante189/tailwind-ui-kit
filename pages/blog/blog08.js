import React from "react";

const blog08 = () => {
  return (
    <section className="lg:py-24 sm:py-16 py-10 bg-white">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Latest from blog
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="max-w-md grid grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
          <div>
            <a href="/" className="block aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1640622842008-1897f26aafe3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full mt-9">
              Technology
            </span>
            <p className="text-slate-800 mt-6 text-xl font-semibold">
              How to mange your remote team?
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              Martin Jones . Jan 12, 2022
            </span>
          </div>
          <div>
            <a href="/" className="block aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1640622300473-977435c38c04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full mt-9">
              Technology
            </span>
            <p className="text-slate-800 mt-6 text-xl font-semibold">
              6 Product launching emails you want to use on next campaign.
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              Martin Jones . Jan 12, 2022
            </span>
          </div>
          <div>
            <a href="/" className="block aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1628359355624-855775b5c9c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="w-full h-full object-cover"
              />
            </a>
            <span className="inline-flex px-4 py-2 text-xs font-semibold tracking-widest uppercase rounded-full mt-9">
              Marketing
            </span>
            <p className="text-slate-800 mt-6 text-xl font-semibold">
              Learn from the best: 7 email marketing ideas you can use
            </p>
            <p className="mt-4 text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            <div className="h-0 mt-6 mb-4 border-t-2 border-gray-200 border-dashed"></div>
            <span className="block text-sm font-bold tracking-widest text-gray-500 uppercase">
              Martin Jones . Jan 12, 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog08;
