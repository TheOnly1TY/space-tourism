import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/home/Homepage";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { Technology } from "./pages/technology/Technology";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}
