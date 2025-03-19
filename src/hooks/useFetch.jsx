import { useEffect, useState } from "react";

export function useFetch() {
  const [dataStore, setDataStore] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetch("/data/data.json");
        const res = await data.json();
        if (res.ok) throw new Error("data not found");
        setDataStore(res);
      } catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  }, []);
  return dataStore;
}
