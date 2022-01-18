import React from "react";

const cta07 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-bold text-slate-800 text-3xl sm:text-4xl xl:text-5xl">
            Meet Rareblocks, the most rare & beautiful UI Kit
          </h2>
        </div>
        <div className="max-w-2xl mx-auto md:max-w-5xl sm:mt-16 mt-8 bg-zinc-900 text-slate-200 rounded-2xl overflow-hidden">
          <div className="relative lg:py-12 md:py-10 py-12 md:px-8 px-6">
            <div className="md:order-2 flex items-center justify-end">
              <div className="relative lg:pl-0 md:pl-8 md:text-left md:w-1/2 text-center">
                <p className="leading-relaxed text-lg">
                  Create custom landing pages with Rareblocks that converts more
                  visitors than any website. With lots of unique blocks, you can
                  easily build a page.
                </p>
                <a
                  href="/"
                  className="font-bold py-3 px-8 inline-flex items-center justify-center rounded-xl border border-transparent 
                    bg-slate-100 text-slate-800 mt-8 hover:bg-slate-200 focus:ring-2 ring-white focus:outline-2 outline-offset-2"
                >
                  Get Rareblocks Now
                </a>
              </div>
            </div>
            <div className="md:order-1 md:mt-0 md:top-8 md:absolute mt-8">
              <div className="md:block absolute hidden inset-8">
                <div className="gradient filter blur-lg w-full h-full rotate-180 opacity-80 mx-auto"></div>
              </div>
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/5/blocks.png"
                alt=""
                className="md:max-w-xs w-full mx-auto relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta07;
