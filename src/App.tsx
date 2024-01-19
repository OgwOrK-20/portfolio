import React, { useEffect } from "react";
import "./css/navbar.css";
import "./css/footer.css";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./scrollToTop";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <ScrollToTop />
      {/* <BrowserRouter> */}/{" "}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="home" element={<Home />}></Route>
        <Route path="work" element={<Work />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes>
      {/* </BrowserRouter> */}
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
