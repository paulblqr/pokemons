import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "components/Home/Home";
import Random from "components/Random/Random";
import Pokemon from "components/Pokemon/Pokemon";
import Type from "components/Type/Type";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random" element={<Random />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />;
        <Route path="/type/:name" element={<Type />} />;
      </Routes>
    </BrowserRouter>
  );
}
