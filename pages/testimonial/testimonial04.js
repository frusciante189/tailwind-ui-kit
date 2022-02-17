import Image from "next/image";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

const testimonial04 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12 bg-neutral-100">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid md:grid-cols-2 grid-cols-1 xl:gap-x-20 gap-x-12 gap-y-8 lg:items-stretch items-center">
          <div className="relative">
            <div className="relative aspect-[4/3]">
              <Image
                src="https://images.unsplash.com/photo-1523111567642-f71bebeb173f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex w-28 h-28 items-center justify-center rounded-full bg-white bg-opacity-[0.15] group">
                <button className="flex w-20 h-20 items-center justify-center bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white rounded-full group-hover:opacity-90">
                  <BsFillPlayFill className="lg:w-8 lg:h-8 w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between md:py-5">
            <blockquote>
              <p className="text-2xl leading-relaxed text-neutral-800">
                You made it so simple. My new site is so much faster and easier
                to work with than my old site. I just choose the page, make the
                change and click save. No need to think twice before making it.
              </p>
            </blockquote>
            <div className="lg:mt-auto mt-6">
              <p className="text-xl font-semibold text-neutral-800">
                Jenny Wilson
              </p>
              <p className="mt-2 text-neutral-600">Co-founder, Appson</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial04;
