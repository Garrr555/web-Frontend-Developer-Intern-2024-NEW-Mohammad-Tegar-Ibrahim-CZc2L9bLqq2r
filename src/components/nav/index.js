"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
export default function Nav() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [nav, setNav] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrollingUp = currentScrollPos < prevScrollPos;

      setPrevScrollPos(currentScrollPos);

      // You can adjust the threshold based on when you want the header to hide/show
      setVisible(
        (isScrollingUp && currentScrollPos > 50) || currentScrollPos <= 50
      );
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div
      className={`w-full text-gray-700 bg-[#f6733c] fixed top-0 z-20 ${
        visible ? "fade-in" : "fade-out"
      } duration-700`}
    >
      <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between p-4">
          <Link
            href="/1"
            className="text-lg font-semibold tracking-widest  max-[600px]:tracking-normal text-gray-900 uppercase rounded-lg dark-mode:text-whit"
          >
            <Image
              src={"/logo2.png"}
              alt="Vercel Logo"
              width={350}
              height={72}
              priority
            />
          </Link>
          <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
            {nav ? (
              <svg
                className="text-xl text-right px-2 text_blue cursor-pointer mr-auto my-auto ml-5"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                onClick={() => (nav ? setNav(false) : setNav(true))}
              >
                <path
                  fill="#ffff"
                  onClick={() => (nav ? setNav(false) : setNav(true))}
                  d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
                />
              </svg>
            ) : (
              <svg
                className="text-xl text-right px-2 text_blue cursor-pointer mr-auto my-auto ml-5"
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"
                onClick={() => (nav ? setNav(false) : setNav(true))}
              >
                <path
                  fill="#ffff"
                  onClick={() => (nav ? setNav(false) : setNav(true))}
                  d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                />
              </svg>
            )}
          </button>
        </div>
        <nav
          className={` ${
            !nav ? "" : "hidden"
          } pb-4 md:pb-0 md:flex md:justify-end md:flex-row text-white font-normal`}
        >
          <Link
            className="px-4 py-2 text-sm tracking-widest  max-[600px]:tracking-normal bg-transparent rounded-lg"
            href="#"
          >
            Work
          </Link>
          <Link
            className="px-4 py-2 text-sm tracking-widest  max-[600px]:tracking-normal bg-transparent rounded-lg"
            href="#"
          >
            About
          </Link>
          <Link
            className="px-4 py-2  text-sm tracking-widest  max-[600px]:tracking-normal bg-transparent rounded-lg "
            href="#"
          >
            Services
          </Link>
          <Link
            className="px-4 py-2  text-sm tracking-widest  max-[600px]:tracking-normal bg-transparent rounded-lg "
            href="#"
          >
            Ideas
          </Link>
          <Link
            className="px-4 py-2  text-sm tracking-widest  max-[600px]:tracking-normal bg-transparent rounded-lg "
            href="#"
          >
            Careers
          </Link>
          <Link
            className="px-4 py-2 text-sm tracking-widest  max-[600px]:tracking-normal bg-transparent rounded-lg "
            href="#"
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}
