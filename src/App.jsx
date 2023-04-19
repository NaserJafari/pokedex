import { Routes, Route, Link } from "react-router-dom";
import PokemonOverview from "./PokemonOverview.jsx";
import PokemonDetail from "./PokemonDetail.jsx";
import About from "./About.jsx";
import Out from "./Out.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/out">Out</Link>
      </nav>
      <Routes>
        <Route path="/" element={<PokemonOverview />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/out" element={<Out />} />
      </Routes>
    </div>
  );
}

export default App;
