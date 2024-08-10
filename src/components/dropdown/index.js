import { Contex } from "@/context/store";
import { useContext, useState } from "react";
import { useRouter } from "next/navigation";
export default function Dropdown({ first, arr }) {
  const { setSize, setSort, setNumber } = useContext(Contex);
  const router = useRouter();
  const [hide, setHide] = useState("hidden");
  const navigate = (event, parameter) => {
    if (parameter === "size") {
      setSize(event);
    }
    if (parameter === "sort") {
      setSort(event);
    }
    router.push(`/1`);
    setNumber(1);
  };
  return (
    <div className="relative group ">
      <button
        onClick={() => (hide === " " ? setHide("hidden") : setHide(" "))}
        id="dropdown-button"
        className="inline-flex  justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full  shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
      >
        <span className="mr-2">{first}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 ml-2 -mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        id="dropdown-menu"
        className={`${hide} z-10 absolute right-0 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1`}
      >
        {arr.map((e, i) => (
          <p
            key={i}
            onClick={() => navigate(e[0], e[2])}
            className="block w-32 text-center px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
          >
            {e[1]}
          </p>
        ))}
      </div>
    </div>
  );
}
