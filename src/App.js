import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Home,
  Agents,
  Listings,
  Agentt,
  Listing,
} from "./pages";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/listing" element={<Listings />} />
        <Route path="/agent/:id" element={<Agentt />} />
        <Route path="/property/:id" element={<Listing />} />
      </Routes>
    </Router>
  );
};

export default App;
