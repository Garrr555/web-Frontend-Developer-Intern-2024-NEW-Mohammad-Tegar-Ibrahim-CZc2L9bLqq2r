"use client";
import React from "react";
import { Contex } from "@/context/store";
import { useContext } from "react";
import { useRouter, useParams } from "next/navigation";

export default function Pafination({ sep }) {
  const { setNumber, number, data } = useContext(Contex);
  const router = useRouter();
  const params = useParams();
  const tambah = (e) => {
    if (e == "kurang") {
      number < 1 ? "" : setNumber(number - 1);
    } else {
      data.meta.last_page == number ? "" : setNumber(number + 1);
    }
    router.push(`/${number}`);
  };

  const go = (event) => {
    setNumber(event);
    router.push(`/${event}`);
  };

  return (
    <nav className="mt-10 ">
      <div className="w-fit mx-auto">
        <ul className="flex flex-wrap  mx-auto">
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
              aria-label="Previous"
              onClick={() => {
                setNumber(1);
                router.push(`/1`);
              }}
            >
              <span className="material-icons text-sm">{`<<`}</span>
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              aria-label="Previous"
              onClick={() => tambah("kurang")}
            >
              <span className="material-icons text-sm">{`<`}</span>
            </a>
          </li>

          {data &&
            data?.meta.links
              .slice(1)
              .slice(0, data.meta.links.length - 2)
              .map((e, i) => (
                <li key={i}>
                  <button
                    disabled={e.url == null ? true : false}
                    className={`${
                      params.slug == e.label ? "bg-[#ff6800] text-white" : ""
                    } ${
                      1 == e.label ? sep : ""
                    } mx-1 flex h-9 w-9 items-center justify-center rounded-lg  p-0 text-sm  shadow-md transition duration-150 ease-in-out`}
                    onClick={() => go(e.label)}
                  >
                    {e.label}
                  </button>
                </li>
              ))}

          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              aria-label="Next"
              onClick={() => tambah("tambah")}
            >
              <span className="material-icons text-sm">{`>`}</span>
            </a>
          </li>
          <li>
            <a
              className="mx-1 flex h-9 w-9 items-center justify-center rounded-lg border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
              href="#"
              aria-label="Next"
              onClick={() => {
                setNumber(data.meta.last_page);
                router.push(`/${data.meta.last_page}`);
              }}
            >
              <span className="material-icons text-sm">{`>>`}</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
