const blog02 = () => {
  return (
    <section className="bg-stone-50 lg:py-20 sm:py-16 py-12">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <div className="px-8 sm:px-0 text-center">
          <h2 className="sm:text-4xl text-3xl text-slate-800 font-bold">
            We share regular updates in Rareblocks
          </h2>
        </div>
        <div className="md:max-w-none sm:mt-12 mt-8 mx-auto max-w-md relative">
          <div className="absolute -inset-y-3 inset-x-16">
            <div className="gradient filter opacity-30 w-full h-full blur-lg rounded-2xl mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 shadow-xl bg-white rounded-2xl overflow-hidden relative text-slate-800 divide-x-2">
            <div className="xl:p-12 sm:p-8 px-6 py-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[16/8]">
                <img
                  src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-xl mt-7 tracking-tight">
                The unseen of spending three years at Pixelgrade
              </p>
              <p className="tracking-tight mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                vero dolor!
              </p>
              <span className="mt-8 text-xs uppercase text-gray-400 font-semibold tracking-widest inline-flex">
                Lifestyle
              </span>
            </div>
            <div className="xl:p-12 sm:p-8 px-6 py-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[16/8] group">
                <img
                  src="https://images.unsplash.com/photo-1500989145603-8e7ef71d639e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
                  alt=""
                  className="w-full h-full object-cover group-hover:-scale-150"
                />
              </div>
              <p className="font-semibold text-xl mt-7 tracking-tight">
                Why choose a theme looks good with WooCommerce
              </p>
              <p className="tracking-tight mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                vero dolor!
              </p>
              <span className="mt-8 text-xs uppercase text-gray-400 font-semibold tracking-widest inline-flex">
                Tutorial
              </span>
            </div>
            <div className="xl:p-12 sm:p-8 px-6 py-5 relative">
              <div className="rounded-2xl overflow-hidden aspect-[16/8]">
                <img
                  src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-semibold text-xl mt-7 tracking-tight">
                How does writing influence your personal brand?
              </p>
              <p className="tracking-tight mt-4 text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
                vero dolor!
              </p>
              <span className="mt-8 text-xs uppercase text-gray-400 font-semibold tracking-widest inline-flex">
                Personal
              </span>
            </div>
          </div>
        </div>
        <div className="md:mt-16 text-center mt-12">
          <a
            href="/"
            className="leading-7 font-bold pb-2 border-b-2 border-slate-800 text-slate-800"
          >
            Read all blog posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default blog02;
