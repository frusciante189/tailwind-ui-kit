import Image from "next/image";
import React from "react";
import { BsTwitter } from "react-icons/bs";

const testimonial06 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="lg:text-5xl sm:text-4xl text-3xl font-bold text-neutral-800">
            What our customers says
          </h2>
          <p className="text-neutral-600 max-w-xl mx-auto leading-relaxed mt-4">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>
        <div className="xl:mt-20 mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 sm:px-0 px-4 gap-6">
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Darrell Steward
                  </p>
                  <p className="text-sm truncate text-neutral-600">@darrels</p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save.
                  <span className="text-sky-500 block">#another</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Leslie Alexander
                  </p>
                  <p className="text-sm truncate text-neutral-600">@lesslie</p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  Simply the best. Better than all the rest. I’d recommend this
                  product to beginners and advanced users.
                  <span className="text-sky-500 block">#Celebration</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Jenny Wilson
                  </p>
                  <p className="text-sm truncate text-neutral-600">
                    @jennywilson
                  </p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  This is a top quality product. No need to think twice before
                  making it live on web.
                  <span className="text-sky-500 block">#make_it_fast</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1508908324153-d1a219719814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Kristin Watson
                  </p>
                  <p className="text-sm truncate text-neutral-600">
                    @kristinwatson2
                  </p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  YFinally, I’ve found a template that covers all bases for a
                  bootstrapped startup. We were able to launch in days, not
                  months.
                  <span className="text-sky-500 block">#Celebration</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Marvin McKinney
                  </p>
                  <p className="text-sm truncate text-neutral-600">@marvin</p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  With Celebration, it’s quicker with the customer, the customer
                  is more ensured of getting exactly what they ordered, and I’m
                  all for the efficiency.
                  <span className="text-sky-500 block">#dev #tools</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1485043621645-c983f19e23c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Guy Hawkins
                  </p>
                  <p className="text-sm truncate text-neutral-600">@guyhaw</p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  This is a top quality product. No need to think twice before
                  making it live on web.
                  <span className="text-sky-500 block">#make_it_fast</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Annette Black
                  </p>
                  <p className="text-sm truncate text-neutral-600">@black</p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  You made it so simple. My new site is so much faster and
                  easier to work with than my old site. I just choose the page,
                  make the change and click save.
                  <span className="text-sky-500 block">#another</span>
                </p>
              </blockquote>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden hover:-translate-y-1.5 hover:shadow-lg transition-all duration-200 transform ease-in-out">
            <div className="px-5 py-6">
              <div className="flex items-center justify-between">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1516350712-9ded7adeb1ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="mr-auto ml-3">
                  <p className="font-semibold truncate text-neutral-800">
                    Floyd Miles
                  </p>
                  <p className="text-sm truncate text-neutral-600">@floyd</p>
                </div>
                <span className="text-[#0ea5e9]">
                  <BsTwitter size={24} />
                </span>
              </div>
              <blockquote className="mt-5">
                <p className="text-neutral-700">
                  My new site is so much faster and easier to work with than my
                  old site. I just choose the page, make the change and click
                  save.
                  <span className="text-sky-500 block">#Celebration</span>
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial06;
