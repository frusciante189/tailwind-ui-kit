import Image from "next/image";
import React from "react";

const testimonial03 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="text-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto">
            <Image
              src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <p className="font-semibold mt-6 text-lg">
            Mark Tanker, <span className="font-normal">California</span>
          </p>
          <blockquote className="mx-auto max-w-xl mt-7">
            <p className="leading-relaxed text-xl">
              “Amet minim mollit non deserunt ullam co est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat.”
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default testimonial03;
