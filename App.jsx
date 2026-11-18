import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Guides from "./Guides";

function Home() {
  return (
    <div className="text-center py-16 px-4 bg-green-50">
      <h2 className="text-4xl font-bold">Explore Gilgit-Baltistan,</h2>
      <h2 className="text-4xl font-bold text-green-700">With Local Guides, Safe & Affordable</h2>
      <p className="mt-4 text-gray-600">Verified Guides, Hotels and Cars - All in One Place</p>
      <Link to="/guides">
        <button className="mt-8 bg-green-700 text-white px-8 py-3 rounded-full">Find Guides →</button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <div className="flex justify-between items-center px-6 py-4 shadow">
          <Link to="/" className="text-2xl font-bold text-green-700">TravelMate</Link>
          <div className="flex gap-3">
            <button className="px-4 py-2 border rounded-full">Login</button>
            <Link to="/guides">
              <button className="px-4 py-2 bg-green-700 text-white rounded-full">Become a Guide</button>
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
