import React from "react";

const cta06 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-zinc-900">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid lg:grid-cols-2 grid-cols-1 sm:gap-16 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <div className="xl:max-w-md max-w-sm bg-white mx-auto rounded-2xl -rotate-3 hover:rotate-3 transition-all ease-in-out transform duration-300">
              <div className="sm:px-10 sm:py-12">
                <img
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/crowny-logo.svg"
                  alt=""
                  className="w-auto h-7"
                />
                <blockquote className="mt-6">
                  <p className="text-lg leading-relaxed text-slate-800">
                    “You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change.”
                  </p>
                </blockquote>
                <div className="flex mt-8 items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/avatar-female.png"
                      alt=""
                      className="object-cover flex-shrink-0 h-11 w-11 rounded-full"
                    />
                    <div className="ml-3">
                      <p className="text-lg font-bold text-slate-800">
                        Jerome Bell
                      </p>
                      <p className="mt-[2px] text-slate-800">CTO, Waverio</p>
                    </div>
                  </div>
                  <img
                    src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/3/signature.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-md mx-auto lg:max-w-none lg:text-left text-center order-1 lg:order-2">
            <h2 className="font-bold text-slate-100 sm:text-4xl xl:text-5xl">
              Get a demo 💪 Build landing pages.
            </h2>
            <p className="mt-8 leading-7 text-slate-300">
              Create custom landing pages with Rareblocks that converts more
              visitors than any website. With lots of unique blocks, you can
              easily build a page.
            </p>
            <div className="mt-16">
              <label className="font-bold text-lg text-slate-100">
                Provide email address to get free demo
              </label>
              <div className="relative max-w-lg mx-auto mt-5 lg:mx-0">
                <div className="gradient -inset-2 blur-lg filter absolute opacity-30 mx-auto rotate-180 w-full"></div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter yor email address"
                    className="block w-full rounded-xl border-2 border-transparent bg-zinc-900 px-5 py-6 placeholder:text-slate-400 focus:placeholder:text-slate-200 focus:outline-none focus:border-white "
                  />
                  <div className="sm:mt-0 mt-4 sm:absolute sm:inset-y-0 sm:right-0 sm:flex sm:items-center sm:pr-3">
                    <button className="inline-flex sm:w-auto w-full items-center justify-center rounded-xl border border-transparent bg-white px-8 sm:py-3 py-4 text-slate-800 font-bold">
                      Get started now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta06;
