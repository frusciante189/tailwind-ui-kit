import React from "react";

const blog03 = () => {
  return (
    <section className="bg-stone-50 lg:py-20 sm:py-16 py-12 text-slate-800">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid lg:grid-cols-12 lg:gap-x-16 gap-y-12 grid-cols-1">
          <div className="lg:text-left col-span-5 text-center">
            <h2 className="font-bold sm:text-4xl text-3xl">
              We teach devs how to write better content.
            </h2>
            <p className="font-medium mt-6 text-xl text-slate-700">
              Proin faucibus nibh et sagittis a. Lacinia purus ac amet
              pellentesque aliquam enim.
            </p>
            <p className="mt-8 text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
              voluptatem, neque maiores laudantium culpa accusamus totam unde
              commodi
            </p>
          </div>
          <div className="col-span-7">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative group">
                <div className="absolute -inset-4">
                  <div className="gradient filter opacity-30 w-full h-full blur-lg rounded-2xl mx-auto"></div>
                </div>
                <div className="rounded-2xl overflow-hidden flex flex-col relative shadow-md bg-white">
                  <div className="aspect-[4/3] flex-shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1109&q=80"
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-125 transition-all transform duration-300 ease-in-out"
                    />
                  </div>
                  <div className="sm:p-8 p-6 flex-1 flex-col">
                    <p className="font-bold text-xl text-slate-700">
                      How to write content about your photographs
                    </p>
                    <p className="lg:mt-9 md:mt-16 mt-9 text-sm">
                      January 11, 2022
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden flex flex-col relative shadow-md bg-white group">
                <div className="aspect-[4/3] flex-shrink-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-125 transition-all transform duration-300 ease-in-out"
                  />
                </div>
                <div className="sm:p-8 p-6 flex-1 flex-col">
                  <p className="font-bold text-xl text-slate-700">
                    How to choose the right colors?
                  </p>
                  <p className="lg:mt-9 md:mt-16 mt-9 text-sm">
                    January 11, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog03;
