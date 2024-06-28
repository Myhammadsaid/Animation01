import "./App.css";
import Header from "./components/header/Header";
import Home from "./page/home/Home";
import Boxes from "./page/boxes/Boxes";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boxes" element={<Boxes />} />
      </Routes>
    </>
  );
}

export default App;
