"use client";
import { Contex } from "@/context/store";
import Image from "next/image";
import { useContext } from "react";

export default function Card() {
  const { data } = useContext(Contex);
  return (
    <>
      {data &&
        data.data.map((str, index) => (
          <div key={index} className="m-auto mb-8">
            <div className="m-auto relative flex w-[19rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative h-44 overflow-hidden rounded-t-xl bg-white bg-clip-border text-gray-700">
                <Image
                  width={1000}
                  height={1000}
                  alt={"foto"}
                  src={
                    str.medium_image[0] == undefined
                      ? "a"
                      : str.medium_image[0].url
                  }
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 h-36">
                <div className="mb-2 flex items-center justify-between">
                  <p className="block font-sans text-sm font-bold leading-relaxed text-gray-300 antialiased">
                    {`${str.created_at.split(" ")[0]}`}
                  </p>
                </div>
                <p className=" block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75 ellipsis-container">
                  {str.title}
                </p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
