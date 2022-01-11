const blog01 = () => {
  return (
    <section className="bg-stone-50 lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-16 grid-cols-1 items-center">
          <div className="order-2">
            <div className="max-w-md mx-auto">
              <div className="aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1593545517138-301fa4851c24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="order-1 md:text-left text-center md:p-0 px-6 py-8 text-slate-800">
            <p className="text-gray-400 uppercase font-bold tracking-widest text-sm">
              Information
            </p>
            <h2 className="xl:text-5xl sm:text-4xl text-3xl font-bold mt-6">
              Lessons and insights from 8 years of Rareblocks
            </h2>
            <p className="mt-8 text-slate-500 text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Perferendis odio officiis optio at quidem consequatur dolorum
              aliquam impedit tenetur quis voluptates voluptatibus
            </p>
            <a
              href="/"
              className="mt-8 inline-flex items-center font-bold hover:text-slate-500"
            >
              Continue Reading{" "}
              <svg
                className="w-5 h-5 ml-2 transition-all transform duration-200 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default blog01;
