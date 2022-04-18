import { css, Global } from "@emotion/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import tw from "twin.macro";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <>
      <Global
        styles={css`
          * {
            ${tw`text-black text-lg lg:text-xl`}
          }
          body {
            background-color: #abe9cd;
            background-image: linear-gradient(315deg, #abe9cd 0%, #3eadcf 74%);
            ${tw`flex justify-center`}
          }
          #root {
            ${tw`w-full 2xl:max-w-6xl flex items-center justify-center h-screen px-5 md:grid md:grid-cols-3 xl:grid-cols-4`}
          }
        `}
      />
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contactme" element={<ContactMe />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
