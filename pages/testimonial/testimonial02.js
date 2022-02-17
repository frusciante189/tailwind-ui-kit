import Image from "next/image";
import React from "react";

const testimonial02 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-4xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="md:flex md:items-center md:justify-center md:space-x-14">
          <div className="w-48 h-48 relative flex-shrink-0">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              layout="fill"
              objectFit="cover"
              className="rounded-full z-10"
            />
            <div className="w-48 h-48 absolute -bottom-2 -right-1 rounded-full bg-neutral-300 z-0 "></div>
          </div>
          <div className="md:mt-0 mt-10">
            <blockquote>
              <p className="text-lg text-neutral-800">
                “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat.”
              </p>
            </blockquote>
            <p className="mt-7 font-semibold text-lg">Kristin Watson</p>
            <p className="mt-1 text-neutral-500">UX Designer at Google</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial02;
