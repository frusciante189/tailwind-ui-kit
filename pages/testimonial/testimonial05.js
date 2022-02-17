import Image from "next/image";
import React from "react";
import { BsApple, BsFillStarFill, BsSlack } from "react-icons/bs";

const testimonial05 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center">
          <h2 className="font-semibold text-3xl text-neutral-800 underline underline-offset-[5px] decoration-4 decoration-amber-400">
            Trusted by 1200+ world class businesses
          </h2>
        </div>
        <div className="md:mt-24 mt-16 grid grid-cols-1 md:grid-cols-2 text-center gap-x-24 gap-y-10">
          <div>
            <div className="flex items-center justify-center space-x-3 text-amber-600">
              <BsFillStarFill size={32} />
              <BsFillStarFill size={32} />
              <BsFillStarFill size={32} />
              <BsFillStarFill size={32} />
            </div>
            <blockquote className="mt-7">
              <p className="text-xl leading-relaxed">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam”
              </p>
            </blockquote>
            <div className="md:mt-10 mt-6">
              <BsSlack size={60} className="mx-auto text-neutral-600" />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center space-x-3 text-amber-600">
              <BsFillStarFill size={32} />
              <BsFillStarFill size={32} />
              <BsFillStarFill size={32} />
              <BsFillStarFill size={32} />
            </div>
            <blockquote className="mt-7">
              <p className="text-xl leading-relaxed">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam”
              </p>
            </blockquote>
            <div className="md:mt-10 mt-6">
              <BsApple size={60} className="mx-auto text-neutral-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial05;
