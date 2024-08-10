"use client";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const params = useParams();

  const [number, setNumber] = useState(
    params.slug == undefined ? 1 : params.slug
  );
  const [size, setSize] = useState(10);
  const [sort, setSort] = useState("-published_at");
  const [data, setData] = useState();
  const [error, setError] = useState(false)
  console.log();
  // Provider component
  const getData = async (number, size, sort) => {
    try {
      const response = await axios.get(
        `/api/ideas?page[number]=${number}&page[size]=${size}&append[]=small_image&append[]=medium_image&sort=${sort}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      setData(response.data);
      setError(null); // Reset error state if request is successful
    } catch (err) {
      setError(err.message); // Set error state if request fails
      console.error("Failed to fetch data:", err);
    }
  };

  useEffect(() => {
    getData(number, size, sort);
  }, [number, size, sort, params]);

  return (
    <Contex.Provider
      value={{
        data,
        size,
        setSize,
        sort,
        setSort,
        number,
        setNumber,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
