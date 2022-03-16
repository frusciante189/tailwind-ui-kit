import Image from "next/image";
import React from "react";

const testimonial07 = () => {
  return (
    <section className="lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 gap-6">
          <div className="rounded-md border">
            <div className="p-8">
              <div className="">
                <blockquote>
                  <p className="text-lg">
                    “You made it so simple. My new site is so much faster and
                    easier to work with than my old site. I just choose the
                    page, make the change and click save.”
                  </p>
                </blockquote>
              </div>
              <div className="mt-8">
                <div className="h-0 w-full border-t-2 border-dotted"></div>
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 rounded-full overflow-hidden relative">
                    <Image
                      src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default testimonial07;
