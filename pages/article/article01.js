const Article01 = () => {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="max-w-7xl mx-auto lg:px-8 sm:px-6 px-4">
        <p className="text-gray-400 text-sm">Jan 10, 2022</p>
        <h1 className="text-neutral-100 mt-5 xl:text-5xl xl:max-w-5xl font-bold tracking-wider sm:text-4xl text-3xl max-w-4xl">
          How to create a succesful website using Frus UI Kit.
        </h1>
        <div className="grid lg:grid-cols-12 gap-y-20 gap-x-10 lg:mt-24 grid-cols-1 mt-10 ">
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden lg:max-h-full max-h-96 lg:h-full">
              <img
                src="https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
                alt=""
                className="object-cover lg:h-full max-w-full w-full h-auto object-bottom"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className="text-neutral-400 leading-7">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
              quidem deserunt consectetur! Blanditiis rerum qui repudiandae
              ipsum voluptate esse adipisci officiis labore nulla. Eaque eveniet
              nostrum veritatis modi maxime quam eos suscipit ad id molestias,
              iure in quae repudiandae temporibus!
            </p>
            <h2 className="mt-10 text-neutral-100 text-2xl">
              Get everything from scratch
            </h2>
            <p className="text-neutral-400 leading-7 mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              excepturi consectetur facere rerum quod vitae quae tenetur,
              ratione fuga, nostrum consequuntur similique eaque assumenda
              incidunt, tempora sint corrupti ex ab? Alias commodi ex corporis?
            </p>
            <ul className="leading-7 mt-6 pl-5 list-disc list-outside text-neutral-400 space-y-1">
              <li>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facere, enim.
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
            <h2 className="mt-10 text-neutral-100 text-2xl">
              Choose from 120+ UI blocks
            </h2>
            <p className="text-neutral-400 leading-7 mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              excepturi consectetur facere rerum quod vitae quae tenetur,
              ratione fuga, nostrum consequuntur similique eaque assumenda
              incidunt, tempora sint corrupti ex ab? Alias commodi ex corporis?
            </p>
            <p className="text-neutral-400 leading-7 mt-6">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              excepturi consectetur facere rerum quod vitae quae tenetur,
              ratione fuga
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article01;
