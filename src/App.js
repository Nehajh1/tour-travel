import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Assets/HomePage/Header";
import SecondHeader from "./Assets/HomePage/SecondHeader";
import AboutUs from "./Assets/About/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SecondHeader />

      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
