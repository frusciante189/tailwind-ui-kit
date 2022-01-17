import React from "react";

const cta02 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="lg:flex lg:justify-between lg:align-center lg:text-left text-center">
          <div className="max-w-xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
              Download our mobile app
            </h2>
            <p className="max-w-md mx-auto lg:mx-0 lg:mt-6 mt-4 leading-7 text-slate-700">
              With lots of unique blocks, you can easily build a page without
              coding. Build your next landing page.
            </p>
          </div>
          <div className="sm:flex lg:justify-end sm:justify-center sm:items-center lg:mt-0 mt-8 sm:space-x-6">
            <a href="/" className="inline-flex">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/10/app-store.svg"
                alt=""
                className="mx-auto h-16 w-auto rounded-full"
              />
            </a>
            <a href="/" className="inline-flex">
              <img
                src="https://cdn.rareblocks.xyz/collection/clarity/images/cta/10/play-store.svg"
                alt=""
                className="mx-auto h-16 w-auto rounded-full"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default cta02;
