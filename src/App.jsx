import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/home/Homepage";
import { Destination } from "./pages/destination/Destination";
import { Crew } from "./pages/crew/Crew";
import { Technology } from "./pages/technology/Technology";
import { PageNotFound } from "./pages/PageNotFound";
import { SpaceProvider } from "./contexts/SpaceContext";

export default function App() {
  return (
    <BrowserRouter>
      <SpaceProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="destination" element={<Destination />} />
          <Route path="crew" element={<Crew />} />
          <Route path="technology" element={<Technology />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </SpaceProvider>
    </BrowserRouter>
  );
}
