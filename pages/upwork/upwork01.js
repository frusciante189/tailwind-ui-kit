import Image from "next/image";
import React from "react";
import r1 from "../../public/Assets/r1.png";

const upwork01 = () => {
  return (
    <div className="w-[1359px] font-space pl-[61px] pt-[61px] overflow-hidden">
      <div className="flex space-x-[25px]">
        <div className="flex flex-col rounded-[5px] border w-[350px] h-[460px] flex-shrink-0">
          <div className="pt-[14px] pb-[9px] px-[17px] flex flex-col flex-1">
            <div className="">
              <img
                src="https://i.ibb.co/xz0gVfw/r1.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg">
                MCARBO KelTec Sub2000 Fixed Precision Stainless Steel...
              </p>
            </div>
            <div className="mt-[18px]">
              <p className="text-2xl font-bold text-[#433C3C]">$14.95</p>
            </div>
          </div>
          <div className="border-t flex items-center justify-center pt-3 pb-2">
            <a href="/" className="text-lg leading-6 font-bold text-[#B90101]">
              Add to Chart
            </a>
          </div>
        </div>
        <div className="flex flex-col rounded-[5px] border w-[350px] h-[460px] flex-shrink-0">
          <div className="pt-[14px] pb-[9px] px-[17px] flex flex-col flex-1">
            <div className="">
              <img
                src="https://i.ibb.co/ZL4TZPV/r2.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg">
                MCABRO KelTec Sub2000 Trigger Job Bundle
              </p>
            </div>
            <div className="mt-[18px]">
              <p className="text-2xl font-bold text-[#433C3C]">$139.95</p>
            </div>
          </div>
          <div className="border-t flex items-center justify-center  pt-3 pb-2">
            <a href="/" className="text-lg leading-6 font-bold text-[#B90101]">
              Add to Chart
            </a>
          </div>
        </div>
        <div className="flex flex-col rounded-[5px] border w-[350px] h-[460px] flex-shrink-0">
          <div className="pt-[14px] pb-[9px] px-[17px] flex flex-col flex-1">
            <div className="">
              <img
                src="https://i.ibb.co/7Sm2Qv3/r3.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4">
              <p className="text-lg">
                MCARBO KelTec Sub2000 Pro Performance Trigger Job...
              </p>
            </div>
            <div className="mt-[18px]">
              <p className="text-2xl font-bold text-[#433C3C]">$169.96</p>
            </div>
          </div>
          <div className="border-t flex items-center justify-center  pt-3 pb-2">
            <a href="/" className="text-lg leading-6 font-bold text-[#B90101]">
              Add to Chart
            </a>
          </div>
        </div>
        <div className="flex flex-col rounded-[5px] border w-[350px] h-[460px] flex-shrink-0">
          <div className="pt-[14px] pb-[9px] px-[17px] flex flex-col flex-1">
            <div className="w-[315px] h-[269px] bg-gray-300"></div>
            <div className="mt-4">
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
            <div className="mt-[18px]">
              <p className="text-2xl font-bold text-[#433C3C]">$99.95</p>
            </div>
          </div>
          <div className="border-t flex items-center justify-center pt-3 pb-2">
            <a href="/" className="text-lg leading-6 font-bold text-[#B90101]">
              Add to Chart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default upwork01;
