import Image from "next/image";
import React from "react";
import WP from "../../public/Assets/drone1.png";
import { BiTimeFive } from "react-icons/bi";

const contactkerem = () => {
  return (
    <section className="lg:px-6 sm:px-4 px-2">
      <div className="flex flex-col">
        <Image src={WP} width={1920} height={650} objectFit="cover" />
        <div className="grid md:grid-cols-3 grid-cols-1 bg-zinc-200 mt-3 px-1.5">
          <div className="md:h-60 h-32 flex flex-col space-y-5 items-start pt-16 pl-16 justify-start hover:scale-[1.03] transition-all duration-200 transform bg-zinc-200 hover:bg-zinc-100">
            <p className="inline-flex items-center font-light">
              <BiTimeFive size={20} className="mr-2 fill-teal-500" />
              Avg Response Time
              <span className="ml-2 font-medium">2 Days</span>
            </p>
            <div className="text-left">
              <p className="text-3xl">Hire me</p>
              <span className="">Available</span>
            </div>
          </div>
          <div className="md:h-60 h-32 flex flex-col items-center justify-center hover:scale-[1.03] transition-all duration-200 transform bg-zinc-200 hover:bg-zinc-100">
            <h2>frusthedev@gmail.com</h2>
            <p>Say hello</p>
          </div>
          <div className="md:h-60 h-32 flex flex-col items-center justify-center hover:scale-[1.03] transition-all duration-200 transform bg-zinc-200 hover:bg-zinc-100">
            <p>@frusthedev</p>
            <p>Ask me anything</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default contactkerem;
