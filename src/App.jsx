import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="destination" element={<Destination />} />
        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}

function Homepage() {
  return <h1>HOMEPAGE</h1>;
}
function Destination() {
  return <h1>DESTINATION</h1>;
}
function Crew() {
  return <h1>CREW</h1>;
}
function Technology() {
  return <h1>TECHNOLOGY</h1>;
}
