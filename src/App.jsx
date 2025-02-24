import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Destination } from "./pages/Destination";
import { Crew } from "./pages/Crew";
import { Technology } from "./pages/Technology";

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
