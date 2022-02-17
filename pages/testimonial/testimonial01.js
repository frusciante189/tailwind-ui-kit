import Image from "next/image";
import React from "react";

const testimonial01 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-neutral-800">
            Trusted by <span className="text-indigo-500">30k+</span> world class
            companies & design teams
          </h2>
        </div>
        <div className="lg:mt-20 sm:mt-12 mt-8">
          <div className="max-w-xl lg:max-w-full mx-auto text-center">
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-6 xl:gap-x-12 gap-x-6">
              <div className="shadow bg-white rounded-md overflow-hidden">
                <div className="px-8 py-12">
                  <div className="w-24 h-24 relative mx-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="rounded-full overflow-hidden"
                    />
                    <div className="bg-indigo-500 flex items-center justify-center rounded-full absolute top-0 right-0 w-8 h-8">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-neutral-800 text-lg">
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur consequuntur aperiam optio quam ratione molestias
                      sit consectetur."
                    </p>
                  </blockquote>
                  <p className="mt-9 font-semibold">Jenny Wilson</p>
                  <p className="mt-1">Project Manager At Microsoft</p>
                </div>
              </div>
              <div className="shadow bg-white rounded-md overflow-hidden">
                <div className="px-8 py-12">
                  <div className="w-24 h-24 relative mx-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="rounded-full overflow-hidden"
                    />
                    <div className="bg-indigo-500 flex items-center justify-center rounded-full absolute top-0 right-0 w-8 h-8">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-neutral-800 text-lg">
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur consequuntur aperiam optio quam ratione molestias
                      sit consectetur."
                    </p>
                  </blockquote>
                  <p className="mt-9 font-semibold">Robert Fox</p>
                  <p className="mt-1">Founder at Brain.co</p>
                </div>
              </div>
              <div className="shadow bg-white rounded-md overflow-hidden">
                <div className="px-8 py-12">
                  <div className="w-24 h-24 relative mx-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=644&q=80"
                      layout="fill"
                      objectFit="cover"
                      unoptimized
                      className="rounded-full overflow-hidden"
                    />
                    <div className="bg-indigo-500 flex items-center justify-center rounded-full absolute top-0 right-0 w-8 h-8">
                      <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M20.309 17.708C22.196 15.66 22.006 13.03 22 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292zm-11.007 0C11.19 15.66 10.999 13.03 10.993 13V5a1 1 0 0 0-1-1h-6c-1.103 0-2 .897-2 2v7a1 1 0 0 0 1 1h3.078a2.89 2.89 0 0 1-.429 1.396c-.508.801-1.465 1.348-2.846 1.624l-.803.16V20h1c2.783 0 4.906-.771 6.309-2.292z"></path>
                      </svg>
                    </div>
                  </div>
                  <blockquote className="mt-7">
                    <p className="text-neutral-800 text-lg">
                      "Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Tenetur consequuntur aperiam optio quam ratione molestias
                      sit consectetur."
                    </p>
                  </blockquote>
                  <p className="mt-9 font-semibold">Kristin Watson</p>
                  <p className="mt-1">UX Designer at Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial01;
