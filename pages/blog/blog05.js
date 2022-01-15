import React from "react";

const blog05 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center max-w-md mx-auto">
          <h2 className="font-bold sm:text-4xl text-3xl">Read our blog</h2>
          <p className="mt-5 text-slate-600">
            With lots of unique blocks, you can easily build a page without
            coding. Build your next landing page.
          </p>
        </div>
        <div className="max-w-3xl mx-auto sm:mt-16 mt-8 grid sm:grid-cols-2 grid-cols-1 lg:gap-x-20 gap-x-8 gap-y-8 sm:text-left text-center">
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="object-cover w-full h-full group-hover:scale-125 transition-all transform duration-300 ease-in-out"
              />
            </div>
            <p className="mt-6 text-sm text-slate-500">January 15, 2022</p>
            <p className="capitalize mt-4 font-bold text-xl">
              How To Optimize Nextjs Apps: Going Beyond The Basics
            </p>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt=""
                className="object-cover w-full h-full group-hover:scale-125 transition-all transform duration-300 ease-in-out"
              />
            </div>
            <p className="mt-6 text-sm text-slate-500">January 15, 2022</p>
            <p className="capitalize mt-4 font-bold text-xl">
              How To Improve Nextjs Apps Performance: Going Beyond The Basics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog05;
