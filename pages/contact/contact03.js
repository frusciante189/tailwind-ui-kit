import React from "react";

const contact03 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid md:grid-cols-2 lg:gap-x-20 gap-x-12 gap-y-10 md:items-stretch">
          <div className="lg:py-5">
            <div>
              <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl lg:leading-tight text-zinc-50">
                It’s time to build something exciting!
              </h2>
              <p className="max-w-xl mx-auto mt-4 leading-relaxed text-zinc-50">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                alt=""
                className="relative max-w-xs -mb-16 mx-auto z-10 md:hidden"
              />
              <img
                src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                alt=""
                className="md:block hidden w-full translate-x-24 translate-y-8"
              />
            </div>
          </div>
          <div className="lg:pl-12">
            <div className="overflow-hidden rounded-md bg-zinc-50">
              <div className="sm:p-10 p-6">
                <h3 className="text-3xl font-semibold text-zinc-900">
                  Get a free quote
                </h3>
                <p className="mt-4 text-zinc-600">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint.
                </p>
                <form action="#" className="mt-4">
                  <div className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="font-medium text-zinc-900"
                      >
                        Your name
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full block rounded-md border border-zinc-200 bg-zinc-50 p-4 transition-all ease-in-out duration-200 transform 
                          focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring focus:ring-teal-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="font-medium text-zinc-900"
                      >
                        Email address
                      </label>
                      <div className="relative mt-2.5">
                        <input
                          type="email"
                          placeholder="Enter your full email"
                          className="w-full block rounded-md border border-zinc-200 bg-zinc-50 p-4 transition-all ease-in-out duration-200 transform 
                          focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring focus:ring-teal-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="project"
                        className="font-medium text-zinc-900"
                      >
                        Project brief
                      </label>
                      <div className="mt-2 5 relative">
                        <textarea
                          name=""
                          id=""
                          rows="4"
                          className="block w-full resize-y border rounded-md border-zinc-200 bg-zinc-50 p-4 transition-all ease-in-out duration-200 transform 
                          focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring focus:ring-teal-600"
                        ></textarea>
                      </div>
                    </div>
                    <div>
                      <button
                        className="inline-flex w-full items-center justify-center py-4 bg-teal-600 rounded-md border border-transparent font-semibold text-zinc-50
                      transition-all ease-in-out duration-200 transform hover:bg-teal-700 focus:bg-teal-500 focus:outline-offset-2 focus:outline-2 focus:outline-transparent"
                      >
                        Get Free Quote
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contact03;
