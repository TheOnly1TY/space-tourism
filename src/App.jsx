import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";
import { useEffect, useState } from "react";

// const BASE_URL = "http://localhost:5000";

export default function App() {
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="destination"
          element={<Destination dataStore={dataStore} />}
        />
        <Route path="crew" element={<Crew dataStore={dataStore} />} />
        <Route
          path="technology"
          element={<Technology dataStore={dataStore} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
