import React from "react";

const signin02 = () => {
  return (
    <section>
      <div className="min-h-full lg:flex lg:justify-between">
        <div className="flex flex-col flex-1 bg-zinc-50 xl:px-24 lg:px-20 sm:px-6 px-4 py-12">
          <div className="max-w-sm mx-auto lg:max-w-md flex-1">
            <h1 className="xl:text-5xl xl:mt-32 lg:text-left lg:mt-20 sm:text-4xl text-zinc-900 font-semibold">
              Welcome back to Rareblock UI Kit
            </h1>
            <form action="#" className="mt-10">
              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg
                      className="h-5 w-5 text-zinc-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Username"
                    className="block w-full overflow-hidden rounded-xl border border-zinc-300 bg-zinc-100 py-4 pl-12 pr-4 text-zinc-900 
                    transition-all ease-in-out duration-200 focus:border-zinc-900 focus:outline-2 focus:outline-offset-2 focus:outline-transparent focus:bg-zinc-50"
                  />
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4">
                    <svg
                      className="w-5 h-5 text-zinc-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Password (min. 8 characters)"
                    className="block w-full overflow-hidden rounded-xl border border-zinc-300 bg-zinc-100 py-4 pl-12 pr-4 text-zinc-900 
                    transition-all ease-in-out duration-200 focus:border-zinc-900 focus:outline-2 focus:outline-offset-2 focus:outline-transparent focus:bg-zinc-50"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mt-5">
                <div className="relative flex items-center">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="h-5 w-5 text-zinc-900"
                    />
                  </div>
                  <div className="ml-3">
                    <label htmlFor="checkbox" className="text-zinc-900">
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="/"
                  className="font-medium text-zinc-500 hover:underline hover:underline-offset-2 hover:text-zinc-900 transition-all duration-200 transform ease-in-out"
                >
                  Forgot Password?
                </a>
              </div>
              <div className="relative mt-8">
                <div className="absolute -inset-2">
                  <div className="gradient filter blur-lg opacity-40 w-full h-full mx-auto"></div>
                </div>
                <button
                  className="relative flex items-center justify-center bg-zinc-900 w-full text-zinc-100 rounded-xl border border-transparent px-8 py-4 font-semibold
                transition-all duration-200 ease-in-out transform hover:bg-zinc-600 focus:outline-2 focus:outline-transparent focus:outline-offset-2 focus:ring focus:ring-offset-2 focus:ring-zinc-900"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="xl:mt-32 lg:mt-20 mt-10 lg:text-left text-center text-zinc-900">
              Don't have an account?{" "}
              <a href="/" className="font-semibold">
                Sign up now
              </a>
            </p>
          </div>
        </div>
        <div className="relative grid w-full flex-1 place-items-center overflow-hidden bg-zinc-900 xl:px-24 lg:px-20 sm:px-6 px-4 py-12">
          <div className="absolute inset-0">
            <img
              src="https://cdn.rareblocks.xyz/collection/clarity/images/sign-up/4/background-pattern.png"
              alt=""
              className="w-full h-full -rotate-90 transform scale-150 object-cover object-top opacity-10"
            />
          </div>
          <div className="relative max-w-sm mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-xl bg-zinc-800">
              <svg
                className="h-5 w-auto fill-white"
                viewBox="0 0 33 23"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32.0011 4.7203L30.9745 0C23.5828 0.33861 18.459 3.41404 18.459 12.4583V22.8687H31.3725V9.78438H26.4818C26.4819 6.88236 28.3027 5.17551 32.0011 4.7203Z"></path>
                <path d="M13.5421 4.7203L12.5155 0C5.12386 0.33861 0 3.41413 0 12.4584V22.8687H12.914V9.78438H8.02029C8.02029 6.88236 9.84111 5.17551 13.5421 4.7203Z"></path>
              </svg>
            </div>
            <blockquote className="mt-14">
              <p className="lg:text-3xl text-2xl font-medium text-white">
                “You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change.”
              </p>
            </blockquote>
            <div className="mt-12 flex items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1475418418312536068/HmbUY9x9_400x400.jpg"
                alt=""
                className="object-cover w-14 h-14 flex-shrink-0 rounded-full"
              />
              <div className="ml-4">
                <p className="font-semibold text-white text-lg">Frus</p>
                <p className="text-lg mt-px text-zinc-400">React Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default signin02;
